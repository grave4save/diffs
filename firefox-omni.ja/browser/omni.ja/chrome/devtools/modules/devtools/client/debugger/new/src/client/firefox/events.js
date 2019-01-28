"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientEvents = exports.setupEvents = undefined;

var _create = require("./create");

var _sourceQueue = require("../../utils/source-queue");

var _sourceQueue2 = _interopRequireDefault(_sourceQueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CALL_STACK_PAGE_SIZE = 1000; /* This Source Code Form is subject to the terms of the Mozilla Public
                                    * License, v. 2.0. If a copy of the MPL was not distributed with this
                                    * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

let threadClient;
let actions;
let supportsWasm;
let isInterrupted;

function setupEvents(dependencies) {
  threadClient = dependencies.threadClient;
  actions = dependencies.actions;
  supportsWasm = dependencies.supportsWasm;
  _sourceQueue2.default.initialize({ actions, supportsWasm, createSource: _create.createSource });

  if (threadClient) {
    Object.keys(clientEvents).forEach(eventName => {
      threadClient.addListener(eventName, clientEvents[eventName]);
    });

    if (threadClient._parent) {
      // Parent may be BrowsingContextTargetFront/WorkerTargetFront and
      // be protocol.js.  Or DebuggerClient and still be old fashion actor.
      if (threadClient._parent.on) {
        threadClient._parent.on("workerListChanged", workerListChanged);
      } else {
        threadClient._parent.addListener("workerListChanged", workerListChanged);
      }
    }
  }
}

async function paused(_, packet) {
  // If paused by an explicit interrupt, which are generated by the
  // slow script dialog and internal events such as setting
  // breakpoints, ignore the event.
  const { why } = packet;
  if (why.type === "interrupted" && !packet.why.onNext) {
    isInterrupted = true;
    return;
  }

  let response;
  try {
    // Eagerly fetch the frames
    response = await threadClient.getFrames(0, CALL_STACK_PAGE_SIZE);
  } catch (e) {
    console.log(e);
    return;
  }

  // NOTE: this happens if we fetch frames and then immediately navigate
  if (!response.hasOwnProperty("frames")) {
    return;
  }

  if (why.type != "alreadyPaused") {
    const pause = (0, _create.createPause)(packet, response);
    await _sourceQueue2.default.flush();
    actions.paused(pause);
  }
}

function resumed(_, packet) {
  // NOTE: the client suppresses resumed events while interrupted
  // to prevent unintentional behavior.
  // see [client docs](../README.md#interrupted) for more information.
  if (isInterrupted) {
    isInterrupted = false;
    return;
  }

  actions.resumed(packet);
}

function newSource(_, { source }) {
  _sourceQueue2.default.queue(source);
}

function workerListChanged() {
  actions.updateWorkers();
}

const clientEvents = {
  paused,
  resumed,
  newSource
};

exports.setupEvents = setupEvents;
exports.clientEvents = clientEvents;