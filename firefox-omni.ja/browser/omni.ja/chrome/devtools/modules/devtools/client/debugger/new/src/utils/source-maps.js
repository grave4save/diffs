"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGeneratedLocation = getGeneratedLocation;
exports.getMappedLocation = getMappedLocation;
exports.getSelectedLocation = getSelectedLocation;

var _devtoolsSourceMap = require("devtools/client/shared/source-map/index.js");

var _selectors = require("../selectors/index");

var _source = require("../utils/source");

async function getGeneratedLocation(state, source, location, sourceMaps) {
  if (!(0, _devtoolsSourceMap.isOriginalId)(location.sourceId)) {
    return location;
  }

  const { line, sourceId, column } = await sourceMaps.getGeneratedLocation(location, source);

  const generatedSource = (0, _selectors.getSource)(state, sourceId);
  if (!generatedSource) {
    return location;
  }

  return {
    line,
    sourceId,
    column: column === 0 ? undefined : column,
    sourceUrl: generatedSource.url
  };
} /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

async function getMappedLocation(state, sourceMaps, location) {
  const source = (0, _selectors.getSource)(state, location.sourceId);

  if (!source) {
    return location;
  }

  if ((0, _devtoolsSourceMap.isOriginalId)(location.sourceId)) {
    return getGeneratedLocation(state, source, location, sourceMaps);
  }

  return sourceMaps.getOriginalLocation(location, source);
}

function getSelectedLocation(mappedLocation, selectedSource) {
  return selectedSource && (0, _source.isGenerated)(selectedSource) ? mappedLocation.generatedLocation : mappedLocation.location;
}