
pref("security.tls.version.min",1);pref("security.tls.version.max",4);pref("security.tls.version.fallback-limit",4);pref("security.tls.insecure_fallback_hosts","");pref("security.tls.enable_0rtt_data",false);pref("security.tls.hello_downgrade_check",false);pref("security.ssl.treat_unsafe_negotiation_as_broken",false);pref("security.ssl.require_safe_negotiation",false);pref("security.ssl.enable_ocsp_stapling",true);pref("security.ssl.enable_false_start",true);pref("security.ssl.enable_alpn",true);pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256",true);pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256",true);pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256",true);pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256",true);pref("security.ssl3.ecdhe_ecdsa_aes_256_gcm_sha384",true);pref("security.ssl3.ecdhe_rsa_aes_256_gcm_sha384",true);pref("security.ssl3.ecdhe_rsa_aes_128_sha",true);pref("security.ssl3.ecdhe_ecdsa_aes_128_sha",true);pref("security.ssl3.ecdhe_rsa_aes_256_sha",true);pref("security.ssl3.ecdhe_ecdsa_aes_256_sha",true);pref("security.ssl3.dhe_rsa_aes_128_sha",true);pref("security.ssl3.dhe_rsa_aes_256_sha",true);pref("security.ssl3.rsa_aes_128_sha",true);pref("security.ssl3.rsa_aes_256_sha",true);pref("security.ssl3.rsa_des_ede3_sha",true);pref("security.content.signature.root_hash","97:E8:BA:9C:F1:2F:B3:DE:53:CC:42:A4:E6:57:7E:D6:4D:F4:93:C2:47:B4:14:FE:A0:36:81:8D:38:23:56:0E");pref("security.default_personal_cert","Ask Every Time");pref("security.remember_cert_checkbox_default_setting",true);pref("security.ask_for_password",0);pref("security.password_lifetime",30);


pref("security.family_safety.mode",2);pref("security.enterprise_roots.enabled",false);

pref("security.OCSP.enabled",1);pref("security.OCSP.require",false);pref("security.OCSP.timeoutMilliseconds.soft",2000);pref("security.OCSP.timeoutMilliseconds.hard",10000);pref("security.pki.cert_short_lifetime_in_days",10);pref("security.pki.sha1_enforcement_level",3);







pref("security.signed_app_signatures.policy",2);







pref("security.pki.name_matching_mode",3);




pref("security.pki.netscape_step_up_policy",1);pref("security.pki.certificate_transparency.mode",0);pref("security.webauth.u2f",false);pref("security.webauth.webauthn",true);
pref("security.webauth.webauthn_enable_softtoken",false);pref("security.webauth.webauthn_enable_usbtoken",true);pref("security.ssl.errorReporting.enabled",true);pref("security.ssl.errorReporting.url","https://incoming.telemetry.mozilla.org/submit/sslreports/");pref("security.ssl.errorReporting.automatic",false);

pref("security.cert_pinning.max_max_age_seconds",5184000);



pref("security.pki.distrust_ca_policy",2);
pref("security.pki.mitm_canary_issuer","");pref("security.pki.mitm_canary_issuer.enabled",true);


pref("security.pki.mitm_detected",false);pref("keyword.enabled",false);pref("general.useragent.compatMode.firefox",false);
pref("general.useragent.site_specific_overrides",true);pref("general.config.obscure_value",13);pref("general.warnOnAboutConfig",true);pref("browser.bookmarks.max_backups",5);pref("browser.cache.disk.enable",true);pref("browser.cache.disk.smart_size.first_run",true);pref("browser.cache.disk.smart_size.enabled",true);pref("browser.cache.disk.smart_size.use_old_max",true);pref("browser.cache.disk.capacity",256000);




pref("browser.cache.disk.free_space_soft_limit",5120);pref("browser.cache.disk.free_space_hard_limit",1024);
pref("browser.cache.disk.max_entry_size",51200);pref("browser.cache.memory.enable",true);
pref("browser.cache.memory.max_entry_size",5120);



pref("browser.cache.disk.max_chunks_memory_usage",40960);pref("browser.cache.disk.max_priority_chunks_memory_usage",40960);pref("browser.cache.disk_cache_ssl",true);pref("browser.cache.check_doc_frequency",3);pref("browser.cache.disk.metadata_memory_limit",250);
pref("browser.cache.disk.preload_chunk_count",4);
pref("browser.cache.frecency_half_life_hours",6);

pref("browser.cache.max_shutdown_io_lag",2);pref("browser.cache.offline.enable",true);pref("browser.cache.offline.insecure.enable",false);pref("offline-apps.allow_by_default",true);pref("browser.cache.offline.capacity",512000);
pref("offline-apps.quota.warn",51200);


pref("browser.cache.compression_level",0);pref("browser.download.forbid_open_with",false);pref("dom.registerContentHandler.enabled",false);pref("dom.registerProtocolHandler.insecure.enabled",false);pref("dom.quotaManager.testing",false);pref("dom.indexedDB.enabled",true);pref("dom.indexedDB.experimental",false);pref("dom.indexedDB.logging.enabled",true);pref("dom.indexedDB.logging.details",true);pref("dom.indexedDB.logging.profiler-marks",false);pref("dom.fileHandle.enabled",true);pref("dom.manifest.onappinstalled",false);pref("dom.select_events.enabled",true);
pref("dom.select_events.textcontrols.enabled",false);pref("dom.workers.maxPerDomain",512);pref("dom.serviceWorkers.idle_timeout",30000);pref("dom.serviceWorkers.idle_extended_timeout",300000);
pref("dom.serviceWorkers.update_delay",1000);pref("dom.serviceWorkers.testUpdateOverOneDay",false);pref("dom.enable_performance",true);pref("dom.enable_resource_timing",true);pref("dom.enable_performance_navigation_timing",true);pref("dom.performance.enable_notify_performance_timing",false);pref("dom.performance.enable_scheduler_timing",true);pref("dom.permissions.revoke.enable",false);pref("dom.performance.time_to_non_blank_paint.enabled",false);pref("dom.performance.time_to_dom_content_flushed.enabled",false);pref("dom.performance.time_to_first_interactive.enabled",false);pref("dom.requestIdleCallback.enabled",true);


pref("dom.pointer-lock.enabled",true);pref("dom.gamepad.enabled",true);pref("dom.gamepad.test.enabled",false);pref("dom.gamepad.non_standard_events.enabled",false);pref("dom.gamepad.extensions.enabled",true);pref("dom.gamepad.haptic_feedback.enabled",true);

pref("dom.keyboardevent.dispatch_during_composition",false);

pref("dom.keyboardevent.keypress.dispatch_non_printable_keys_only_system_group_in_content",false);pref("dom.webmidi.enabled",false);


pref("dom.script_loader.bytecode_cache.enabled",true);






pref("dom.script_loader.bytecode_cache.strategy",0);
pref("dom.window.event.enabled",false);
pref("browser.sessionhistory.max_total_viewers",-1);pref("ui.use_native_colors",true);pref("ui.click_hold_context_menus",false);pref("ui.context_menus.after_mouseup",false);pref("ui.menu.incremental_search.timeout",1000);pref("ui.popup.disable_autohide",false);pref("browser.display.use_document_fonts",1);


pref("browser.display.document_color_use",0);pref("browser.display.use_system_colors",false);pref("browser.display.foreground_color","#000000");pref("browser.display.background_color","#FFFFFF");pref("browser.display.force_inline_alttext",false);
pref("browser.display.normal_lineheight_calc_control",2);pref("browser.display.show_image_placeholders",true);pref("browser.display.show_loading_image_placeholder",false);pref("browser.display.auto_quality_min_font_size",20);pref("browser.anchor_color","#0000EE");pref("browser.active_color","#EE0000");pref("browser.visited_color","#551A8B");pref("browser.underline_anchors",true);pref("browser.enable_automatic_image_resizing",false);pref("browser.enable_click_image_resizing",true);pref("browser.autofocus",true);pref("browser.send_pings",false);pref("browser.send_pings.max_per_link",1);pref("browser.send_pings.require_same_host",false);pref("browser.display.use_focus_colors",false);pref("browser.display.focus_background_color","#117722");pref("browser.display.focus_text_color","#ffffff");pref("browser.display.focus_ring_width",1);pref("browser.display.focus_ring_on_anything",false);pref("browser.display.focus_ring_style",1);pref("browser.helperApps.neverAsk.saveToDisk","");pref("browser.helperApps.neverAsk.openFile","");pref("browser.helperApps.deleteTempFileOnExit",false);pref("browser.chrome.toolbar_tips",true);pref("browser.chrome.image_icons.max_size",1024);pref("browser.triple_click_selects_paragraph",true);pref("print.shrink-to-fit.scale-limit-percent",20);pref("print.use_simplify_page",false);pref("mathml.disabled",false);pref("mathml.scale_stretchy_operators.enabled",true);
pref("media.omt_data_delivery.enabled",true);


pref("media.throttle-factor",2);


pref("media.throttle-regardless-of-download-rate",false);pref("media.volume_scale","1.0");
pref("media.play-stand-alone",true);pref("media.hardware-video-decoding.enabled",true);pref("media.hardware-video-decoding.force-enabled",false);pref("media.gmp.decoder.aac",0);pref("media.gmp.decoder.h264",0);pref("media.opus.enabled",true);pref("media.wave.enabled",true);pref("media.webm.enabled",true);

pref("media.gmp.storage.version.expected",1);pref("media.decoder-doctor.notifications-allowed","MediaWMFNeeded,MediaWidevineNoWMF,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec");pref("media.decoder-doctor.decode-errors-allowed","");pref("media.decoder-doctor.decode-warnings-allowed","");pref("media.decoder-doctor.verbose",false);pref("media.decoder-doctor.new-issue-endpoint","https://webcompat.com/issues/new");pref("media.navigator.enabled",true);pref("media.navigator.video.enabled",true);pref("media.navigator.video.default_fps",30);pref("media.navigator.video.use_remb",true);pref("media.navigator.video.use_tmmbr",false);pref("media.navigator.audio.use_fec",true);pref("media.navigator.video.red_ulpfec_enabled",false);pref("media.peerconnection.dtmf.enabled",true);pref("media.peerconnection.sdp.rust.enabled",false);pref("media.peerconnection.sdp.rust.compare",false);pref("media.webrtc.debug.trace_mask",0);pref("media.webrtc.debug.multi_log",false);pref("media.webrtc.debug.log_file","");pref("media.webrtc.debug.aec_dump_max_size",4194304);pref("media.navigator.video.default_width",0);pref("media.navigator.video.default_height",0);pref("media.peerconnection.enabled",true);pref("media.peerconnection.video.enabled",true);pref("media.navigator.video.max_fs",12288);pref("media.navigator.video.max_fr",60);pref("media.navigator.video.h264.level",31);pref("media.navigator.video.h264.max_br",0);pref("media.navigator.video.h264.max_mbps",0);pref("media.navigator.mediadatadecoder_enabled",false);pref("media.navigator.mediadatadecoder_h264_enabled",false);pref("media.peerconnection.video.vp9_enabled",true);pref("media.peerconnection.video.vp9_preferred",false);pref("media.getusermedia.aec",1);pref("media.getusermedia.browser.enabled",false);pref("media.getusermedia.channels",0);pref("media.getusermedia.camera.off_while_disabled.enabled",false);pref("media.getusermedia.microphone.off_while_disabled.enabled",false);pref("media.getusermedia.camera.off_while_disabled.delay_ms",3000);pref("media.getusermedia.microphone.off_while_disabled.delay_ms",3000);
pref("media.peerconnection.video.min_bitrate",0);pref("media.peerconnection.video.start_bitrate",0);pref("media.peerconnection.video.max_bitrate",0);pref("media.peerconnection.video.min_bitrate_estimate",0);pref("media.peerconnection.video.denoising",false);pref("media.navigator.audio.fake_frequency",1000);pref("media.navigator.permission.disabled",false);pref("media.navigator.streams.fake",false);pref("media.peerconnection.simulcast",true);pref("media.peerconnection.default_iceservers","[]");pref("media.peerconnection.ice.loopback",false);pref("media.peerconnection.ice.tcp",true);pref("media.peerconnection.ice.tcp_so_sock_count",0);pref("media.peerconnection.ice.link_local",false);pref("media.peerconnection.ice.force_interface","");pref("media.peerconnection.ice.relay_only",false);pref("media.peerconnection.use_document_iceservers",true);pref("media.peerconnection.identity.enabled",true);pref("media.peerconnection.identity.timeout",10000);pref("media.peerconnection.ice.stun_client_maximum_transmits",7);pref("media.peerconnection.ice.trickle_grace_period",5000);pref("media.peerconnection.ice.no_host",false);pref("media.peerconnection.ice.default_address_only",false);pref("media.peerconnection.ice.proxy_only",false);pref("media.peerconnection.rtpsourcesapi.enabled",true);

pref("media.peerconnection.turn.disable",false);pref("media.getusermedia.aec_enabled",true);pref("media.getusermedia.noise_enabled",true);pref("media.getusermedia.aec_extended_filter",true);pref("media.getusermedia.noise",1);pref("media.getusermedia.agc_enabled",true);pref("media.getusermedia.agc",3);

pref("media.navigator.audio.full_duplex",true);pref("media.peerconnection.capture_delay",100);pref("dom.webaudio.enabled",true);pref("dom.webdriver.enabled",true);pref("media.getusermedia.audiocapture.enabled",false);pref("media.webvtt.regions.enabled",true);pref("media.webvtt.pseudo.enabled",true);pref("media.track.enabled",false);pref("media.mediasource.enabled",true);pref("media.mediasource.mp4.enabled",true);pref("media.mediasource.webm.enabled",false);pref("media.mediasource.webm.audio.enabled",true);pref("media.mediasource.experimental.enabled",false);pref("media.benchmark.vp9.threshold",150);pref("media.benchmark.frames",300);pref("media.benchmark.timeout",1000);pref("media.media-capabilities.enabled",true);pref("media.media-capabilities.screen.enabled",false);pref("media.webspeech.synth.enabled",false);pref("media.encoder.webm.enabled",true);pref("media.recorder.audio_node.enabled",false);
pref("media.recorder.video.frame_drops",true);pref("media.autoplay.default",0);pref("media.autoplay.block-webaudio",false);pref("media.autoplay.allow-muted",true);pref("media.autoplay.allow-extension-background-pages",true);


pref("media.allowed-to-play.enabled",false);
pref("media.video-queue.default-size",10);pref("media.video-queue.send-to-compositor-size",9999);pref("media.video_stats.enabled",true);
pref("media.cubeb.logging_level","");
pref("media.cubeb.sandbox",true);pref("media.audioipc.pool_size",2);pref("media.audioipc.stack_size",262144);pref("media.av1.enabled",false);pref("media.webaudio.audiocontextoptions-samplerate.enabled",true);
pref("media.setsinkid.enabled",false);pref("layers.amd-switchable-gfx.enabled",true);pref("layers.async-pan-zoom.enabled",true);pref("layers.geometry.opengl.enabled",true);pref("layers.geometry.basic.enabled",true);pref("layers.geometry.d3d11.enabled",true);
pref("apz.allow_checkerboarding",true);pref("apz.allow_double_tap_zooming",true);pref("apz.allow_immediate_handoff",true);pref("apz.allow_zooming",false);pref("apz.android.chrome_fling_physics.enabled",true);pref("apz.android.chrome_fling_physics.friction","0.015");pref("apz.android.chrome_fling_physics.inflexion","0.35");pref("apz.android.chrome_fling_physics.stop_threshold","0.1");pref("apz.autoscroll.enabled",true);

pref("apz.axis_lock.mode",0);pref("apz.axis_lock.lock_angle","0.5235987");pref("apz.axis_lock.breakout_threshold","0.03125");pref("apz.axis_lock.breakout_angle","0.3926991");pref("apz.axis_lock.direct_pan_angle","1.047197");pref("apz.content_response_timeout",400);pref("apz.drag.enabled",true);pref("apz.drag.initial.enabled",true);pref("apz.drag.touch.enabled",true);pref("apz.danger_zone_x",50);pref("apz.danger_zone_y",100);pref("apz.disable_for_scroll_linked_effects",false);pref("apz.displayport_expiry_ms",15000);pref("apz.enlarge_displayport_when_clipped",false);pref("apz.fling_accel_base_mult","1.0");pref("apz.fling_accel_interval_ms",500);pref("apz.fling_accel_min_velocity","1.5");pref("apz.fling_accel_supplemental_mult","1.0");pref("apz.fling_curve_function_x1","0.0");pref("apz.fling_curve_function_y1","0.0");pref("apz.fling_curve_function_x2","1.0");pref("apz.fling_curve_function_y2","1.0");pref("apz.fling_curve_threshold_inches_per_ms","-1.0");pref("apz.fling_friction","0.002");pref("apz.fling_min_velocity_threshold","0.5");pref("apz.fling_stop_on_tap_threshold","0.05");pref("apz.fling_stopped_threshold","0.01");pref("apz.frame_delay.enabled",true);pref("apz.keyboard.enabled",false);pref("apz.keyboard.passive-listeners",false);pref("apz.max_tap_time",300);pref("apz.max_velocity_inches_per_ms","-1.0");pref("apz.max_velocity_queue_size",5);pref("apz.min_skate_speed","1.0");pref("apz.minimap.enabled",false);pref("apz.one_touch_pinch.enabled",true);pref("apz.overscroll.enabled",false);pref("apz.overscroll.min_pan_distance_ratio","1.0");pref("apz.overscroll.spring_friction","0.015");pref("apz.overscroll.spring_stiffness","0.0018");pref("apz.overscroll.stop_distance_threshold","5.0");pref("apz.overscroll.stop_velocity_threshold","0.01");pref("apz.overscroll.stretch_factor","0.35");pref("apz.paint_skipping.enabled",true);pref("apz.peek_messages.enabled",true);pref("apz.pinch_lock.mode",1);pref("apz.pinch_lock.scoll_lock_threshold","0.03125");pref("apz.pinch_lock.span_breakout_threshold","0.03125");pref("apz.pinch_lock.span_lock_threshold","0.03125");pref("apz.popups.enabled",false);pref("apz.printtree",false);pref("apz.record_checkerboarding",false);pref("apz.second_tap_tolerance","0.5");pref("apz.test.logging_enabled",false);pref("apz.touch_start_tolerance","0.1");pref("apz.touch_move_tolerance","0.1");pref("apz.velocity_bias","0.0");pref("apz.velocity_relevance_time_ms",150);pref("apz.x_skate_highmem_adjust","0.0");pref("apz.y_skate_highmem_adjust","0.0");pref("apz.x_skate_size_multiplier","1.25");pref("apz.y_skate_size_multiplier","3.5");pref("apz.x_stationary_size_multiplier","1.5");pref("apz.y_stationary_size_multiplier","3.5");pref("apz.zoom_animation_duration_ms",250);pref("apz.scale_repaint_delay_ms",500);pref("apz.allow_zooming",true);pref("apz.enlarge_displayport_when_clipped",true);pref("apz.y_skate_size_multiplier","1.5");pref("apz.y_stationary_size_multiplier","1.5");pref("layout.scroll.root-frame-containers",0);pref("layout.scrollbars.always-layerize-track",false);pref("gfx.layerscope.enabled",false);pref("gfx.layerscope.port",23456);pref("gfx.perf-warnings.enabled",false);pref("gfx.color_management.mode",2);pref("gfx.color_management.display_profile","");pref("gfx.color_management.rendering_intent",0);pref("gfx.color_management.enablev4",false);pref("gfx.downloadable_fonts.enabled",true);pref("gfx.downloadable_fonts.fallback_delay",3000);pref("gfx.downloadable_fonts.fallback_delay_short",100);
pref("gfx.downloadable_fonts.disable_cache",false);pref("gfx.downloadable_fonts.woff2.enabled",true);
pref("gfx.downloadable_fonts.otl_validation",false);
pref("gfx.downloadable_fonts.keep_color_bitmaps",false);pref("gfx.downloadable_fonts.validate_variation_tables",true);pref("gfx.bundled_fonts.enabled",true);pref("gfx.bundled_fonts.force-enabled",false);
pref("gfx.missing_fonts.notify",false);
pref("gfx.font_loader.delay",8000);pref("gfx.font_loader.interval",50);
pref("gfx.font_rendering.fallback.always_use_cmaps",false);pref("gfx.font_rendering.wordcache.charlimit",32);pref("gfx.font_rendering.wordcache.maxentries",10000);pref("gfx.font_rendering.graphite.enabled",true);pref("gfx.font_ahem_antialias_none",false);pref("gfx.canvas.azure.backends","skia");pref("gfx.content.azure.backends","skia");pref("gfx.canvas.skiagl.dynamic-cache",true);pref("gfx.text.disable-aa",false);pref("gfx.work-around-driver-bugs",true);pref("gfx.draw-color-bars",false);pref("gfx.logging.painted-pixel-count.enabled",false);pref("gfx.logging.texture-usage.enabled",false);pref("gfx.logging.peak-texture-usage.enabled",false);pref("gfx.ycbcr.accurate-conversion",false);





pref("gfx.webrender.force-disabled",false);pref("gfx.webrender.highlight-painted-layers",false);pref("gfx.webrender.blob-images",true);pref("gfx.webrender.blob.invalidation",true);pref("gfx.webrender.blob.paint-flashing",false);pref("gfx.webrender.debug.texture-cache",false);pref("gfx.webrender.debug.render-targets",false);pref("gfx.webrender.debug.alpha-primitives",false);pref("gfx.webrender.debug.profiler",false);pref("gfx.webrender.debug.gpu-time-queries",false);pref("gfx.webrender.debug.gpu-sample-queries",false);pref("gfx.webrender.debug.disable-batching",false);pref("gfx.webrender.debug.epochs",false);pref("gfx.webrender.debug.compact-profiler",false);pref("gfx.webrender.debug.echo-driver-messages",false);pref("gfx.webrender.debug.new-frame-indicator",false);pref("gfx.webrender.debug.new-scene-indicator",false);pref("gfx.webrender.debug.show-overdraw",false);pref("gfx.webrender.dl.dump-parent",false);pref("gfx.webrender.dl.dump-content",false);pref("accessibility.browsewithcaret",false);pref("accessibility.warn_on_browsewithcaret",true);pref("accessibility.browsewithcaret_shortcut.enabled",true);pref("accessibility.tabfocus",7);pref("accessibility.tabfocus_applies_to_xul",false);
pref("ui.scrollToClick",0);pref("canvas.focusring.enabled",true);pref("canvas.customfocusring.enabled",false);pref("canvas.hitregions.enabled",false);pref("canvas.filters.enabled",true);pref("canvas.path.enabled",true);pref("canvas.capturestream.enabled",true);




pref("accessibility.force_disabled",0);pref("accessibility.AOM.enabled",false);pref("focusmanager.testmode",false);pref("accessibility.usetexttospeech","");pref("accessibility.accesskeycausesactivation",true);pref("accessibility.mouse_focuses_formcontrol",false);pref("accessibility.typeaheadfind",true);pref("accessibility.typeaheadfind.manual",true);pref("accessibility.typeaheadfind.autostart",true);

pref("accessibility.typeaheadfind.casesensitive",0);pref("accessibility.typeaheadfind.linksonly",true);pref("accessibility.typeaheadfind.startlinksonly",false);

pref("accessibility.typeaheadfind.timeout",4000);pref("accessibility.typeaheadfind.soundURL","beep");pref("accessibility.typeaheadfind.enablesound",true);pref("accessibility.typeaheadfind.prefillwithselection",true);pref("accessibility.typeaheadfind.matchesCountLimit",1000);pref("findbar.highlightAll",false);pref("findbar.modalHighlight",false);pref("findbar.entireword",false);pref("findbar.iteratorTimeout",100);pref("gfx.use_text_smoothing_setting",false);pref("toolkit.autocomplete.richBoundaryCutoff",200);pref("toolkit.osfile.log",false);pref("toolkit.cosmeticAnimations.enabled",true);pref("toolkit.scrollbox.smoothScroll",true);pref("toolkit.scrollbox.scrollIncrement",20);pref("toolkit.scrollbox.verticalScrollDistance",3);pref("toolkit.scrollbox.horizontalScrollDistance",5);pref("toolkit.scrollbox.clickToScroll.scrollDelay",150);pref("toolkit.telemetry.server","https://incoming.telemetry.mozilla.org");pref("toolkit.telemetry.server_owner","Mozilla");
pref("toolkit.telemetry.debugSlowSql",false);pref("toolkit.telemetry.unified",true);
pref("toolkit.asyncshutdown.crash_timeout",60000);
pref("toolkit.asyncshutdown.log",false);

pref("browser.dom.window.dump.enabled",false,sticky);pref("toolkit.dump.emit",false);pref("devtools.recordreplay.mvp.enabled",false);pref("view_source.syntax_highlight",true);pref("view_source.wrap_long_lines",false);pref("view_source.editor.path","");
pref("view_source.editor.args","");pref("plain_text.wrap_long_lines",false);pref("nglayout.enable_drag_images",true);
pref("nglayout.debug.paint_flashing",false);pref("nglayout.debug.paint_flashing_chrome",false);
pref("nglayout.debug.widget_update_flashing",false);pref("nglayout.debug.invalidation",false);pref("layout.framevisibility.enabled",true);pref("layout.framevisibility.numscrollportwidths",0);pref("layout.framevisibility.numscrollportheights",1);

pref("slider.snapMultiplier",0);pref("browser.fixup.alternate.enabled",true);pref("browser.fixup.alternate.prefix","www.");pref("browser.fixup.alternate.suffix",".com");pref("browser.fixup.dns_first_for_single_words",false);pref("browser.fixup.hide_user_pass",true);pref("browser.urlbar.autocomplete.enabled",true);pref("browser.urlbar.usepreloadedtopurls.enabled",false);pref("browser.urlbar.usepreloadedtopurls.expire_days",14);






pref("print.print_headerleft","&T");pref("print.print_headercenter","");pref("print.print_headerright","&U");pref("print.print_footerleft","&PT");pref("print.print_footercenter","");pref("print.print_footerright","&D");pref("print.show_print_progress",true);

pref("print.use_global_printsettings",true);pref("print.save_print_settings",true);



pref("print.print_unwriteable_margin_top",-1);pref("print.print_unwriteable_margin_left",-1);pref("print.print_unwriteable_margin_right",-1);pref("print.print_unwriteable_margin_bottom",-1);

pref("print.print_edge_top",0);pref("print.print_edge_left",0);pref("print.print_edge_right",0);pref("print.print_edge_bottom",0);pref("print.print_via_parent",false);

pref("print.font-variations-as-paths",true);

pref("extensions.spellcheck.inline.max-misspellings",500);


pref("editor.resizing.enabled_by_default",false);pref("editor.inline_table_editing.enabled_by_default",false);pref("editor.positioning.enabled_by_default",false);
pref("editor.use_div_for_default_newlines",true);
pref("editor.use_custom_colors",false);pref("editor.singleLine.pasteNewlines",2);pref("editor.use_css",false);pref("editor.css.default_length_unit","px");pref("editor.resizing.preserve_ratio",true);pref("editor.positioning.offset",0);pref("dom.disable_beforeunload",false);pref("dom.disable_window_flip",false);pref("dom.disable_window_move_resize",false);pref("dom.disable_window_open_feature.titlebar",false);pref("dom.disable_window_open_feature.close",false);pref("dom.disable_window_open_feature.toolbar",false);pref("dom.disable_window_open_feature.location",false);pref("dom.disable_window_open_feature.personalbar",false);pref("dom.disable_window_open_feature.menubar",false);pref("dom.disable_window_open_feature.resizable",true);pref("dom.disable_window_open_feature.minimizable",false);pref("dom.disable_window_open_feature.status",true);pref("dom.disable_window_showModalDialog",true);pref("dom.allow_scripts_to_close_windows",false);pref("dom.require_user_interaction_for_beforeunload",true);pref("dom.disable_open_during_load",false);pref("dom.popup_maximum",20);pref("dom.popup_allowed_events","change click dblclick mouseup pointerup notificationclick reset submit touchend");pref("dom.disable_open_click_delay",1000);pref("dom.serviceWorkers.disable_open_click_delay",1000);pref("dom.storage.enabled",true);pref("dom.storage.default_quota",5120);pref("dom.storage.testing",false);pref("dom.send_after_paint_to_content",false);pref("dom.min_timeout_value",4);pref("dom.min_background_timeout_value",1000);
pref("dom.min_tracking_timeout_value",4);
pref("dom.min_tracking_background_timeout_value",4);pref("dom.timeout.throttling_delay",30000);pref("dom.timeout.background_budget_regeneration_rate",100);
pref("dom.timeout.background_throttling_max_budget",50);pref("dom.timeout.foreground_budget_regeneration_rate",1);
pref("dom.timeout.foreground_throttling_max_budget",-1);pref("dom.timeout.budget_throttling_max_delay",15000);pref("dom.timeout.enable_budget_timer_throttling",true);pref("dom.experimental_forms",false);
pref("dom.forms.color",true);pref("dom.forms.datetime",true);pref("dom.forms.datetime.others",false);pref("dom.forms.datetime.timepicker",false);pref("dom.forms.autocomplete.formautofill",false);pref("dom.forms.selectSearch",false);pref("dom.forms.select.customstyling",true);pref("dom.select_popup_in_parent.enabled",false);pref("dom.select_popup_in_content.enabled",false);pref("dom.input.dirpicker",false);
pref("dom.input.skip_cursor_move_for_same_value_set",true);pref("dom.cycle_collector.incremental",true);pref("dom.use_components_shim",true);pref("content.sink.pending_event_mode",0);



pref("privacy.popups.disable_from_plugins",3);pref("privacy.donottrackheader.enabled",false);

pref("privacy.permissionPrompts.showCloseButton",false);pref("privacy.trackingprotection.enabled",false);pref("privacy.trackingprotection.pbmode.enabled",true);pref("privacy.trackingprotection.annotate_channels",true);pref("privacy.firstparty.isolate",false);
pref("privacy.firstparty.isolate.restrict_opener_access",true);


pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts",true);
pref("privacy.reduceTimerPrecision",true);pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds",1000);pref("privacy.resistFingerprinting.reduceTimerPrecision.jitter",true);pref("privacy.trackingprotection.lower_network_priority",false);pref("dom.event.contextmenu.enabled",true);pref("dom.event.clipboardevents.enabled",true);pref("dom.event.highrestimestamp.enabled",true);pref("dom.event.coalesce_mouse_move",true);pref("dom.ua_widget.enabled",false);pref("dom.webcomponents.shadowdom.enabled",true);pref("dom.webcomponents.customelements.enabled",true);pref("javascript.enabled",true);pref("javascript.options.strict",false);pref("javascript.options.baselinejit",true);pref("javascript.options.baselinejit.threshold",10);pref("javascript.options.ion",true);pref("javascript.options.ion.threshold",1000);pref("javascript.options.ion.frequent_bailout_threshold",10);pref("javascript.options.asmjs",true);pref("javascript.options.wasm",true);pref("javascript.options.wasm_ionjit",true);pref("javascript.options.wasm_baselinejit",true);pref("javascript.options.native_regexp",true);pref("javascript.options.parallel_parsing",true);pref("javascript.options.asyncstack",false);pref("javascript.options.throw_on_asmjs_validation_failure",false);pref("javascript.options.ion.offthread_compilation",true);


pref("javascript.options.discardSystemSource",false);


pref("javascript.options.mem.high_water_mark",128);

pref("javascript.options.mem.max",-1);
pref("javascript.options.mem.nursery.max_kb",4096);pref("javascript.options.mem.gc_per_zone",true);pref("javascript.options.mem.gc_incremental",true);
pref("javascript.options.mem.gc_incremental_slice_ms",5);pref("javascript.options.mem.gc_compacting",true);pref("javascript.options.mem.gc_high_frequency_time_limit_ms",1000);pref("javascript.options.mem.gc_high_frequency_low_limit_mb",100);pref("javascript.options.mem.gc_high_frequency_high_limit_mb",500);pref("javascript.options.mem.gc_high_frequency_heap_growth_max",300);pref("javascript.options.mem.gc_high_frequency_heap_growth_min",150);pref("javascript.options.mem.gc_low_frequency_heap_growth",150);
pref("javascript.options.mem.gc_dynamic_heap_growth",true);
pref("javascript.options.mem.gc_dynamic_mark_slice",true);pref("javascript.options.mem.gc_allocation_threshold_mb",30);pref("javascript.options.mem.gc_allocation_threshold_factor",90);pref("javascript.options.mem.gc_allocation_threshold_factor_avoid_interrupt",90);pref("javascript.options.mem.gc_min_empty_chunk_count",1);pref("javascript.options.mem.gc_max_empty_chunk_count",30);pref("javascript.options.showInConsole",false);pref("javascript.options.shared_memory",false);pref("javascript.options.throw_on_debuggee_would_run",false);pref("javascript.options.dump_stack_on_debuggee_would_run",false);pref("javascript.options.spectre.index_masking",true);pref("javascript.options.spectre.object_mitigations.barriers",true);pref("javascript.options.spectre.object_mitigations.misc",true);pref("javascript.options.spectre.string_mitigations",true);pref("javascript.options.spectre.value_masking",true);pref("javascript.options.spectre.jit_to_C++_calls",true);pref("javascript.options.streams",false);pref("advanced.mailftp",false);pref("image.animation_mode","normal");pref("security.fileuri.strict_origin_policy",true);

pref("logging.config.clear_on_startup",true);





pref("network.allow-experiments",true);
pref("network.notify.changed",true);
pref("network.notify.IPv6",true);
pref("network.tickle-wifi.enabled",false);pref("network.tickle-wifi.duration",400);pref("network.tickle-wifi.delay",16);pref("network.disable.ipc.security",true);pref("network.protocol-handler.external-default",true);pref("network.protocol-handler.warn-external-default",true);
pref("network.protocol-handler.external.hcp",false);pref("network.protocol-handler.external.vbscript",false);pref("network.protocol-handler.external.javascript",false);pref("network.protocol-handler.external.data",false);pref("network.protocol-handler.external.ms-help",false);pref("network.protocol-handler.external.shell",false);pref("network.protocol-handler.external.vnd.ms.radio",false);pref("network.protocol-handler.external.disk",false);pref("network.protocol-handler.external.disks",false);pref("network.protocol-handler.external.afp",false);pref("network.protocol-handler.external.moz-icon",false);pref("network.protocol-handler.external.ttp",false);pref("network.protocol-handler.external.htp",false);pref("network.protocol-handler.external.ttps",false);pref("network.protocol-handler.external.tps",false);pref("network.protocol-handler.external.ps",false);pref("network.protocol-handler.external.htps",false);pref("network.protocol-handler.external.ile",false);pref("network.protocol-handler.external.le",false);




pref("network.protocol-handler.expose-all",true);pref("network.warnOnAboutNetworking",true);
pref("network.manage-offline-status",true);pref("network.offline-mirrors-connectivity",false);pref("network.http.version","1.1");



pref("network.http.proxy.version","1.1");



pref("network.http.default-socket-type","");


pref("network.http.keep-alive.timeout",115);pref("network.http.response.timeout",300);

pref("network.http.max-connections",256);

pref("network.http.max-persistent-connections-per-server",6);
pref("network.http.max-urgent-start-excessive-connections-per-host",3);

pref("network.http.max-persistent-connections-per-proxy",32);


pref("network.http.request.max-start-delay",10);pref("network.http.request.max-attempts",10);pref("network.http.accept.default","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
pref("network.http.sendRefererHeader",2);
pref("network.http.referer.defaultPolicy",3);pref("network.http.referer.defaultPolicy.pbmode",2);pref("network.http.referer.spoofSource",false);pref("network.http.referer.hideOnionSource",false);pref("network.http.referer.trimmingPolicy",0);pref("network.http.referer.XOriginTrimmingPolicy",0);pref("network.http.referer.XOriginPolicy",0);
pref("network.http.sendOriginHeader",0);pref("network.http.redirection-limit",20);
pref("network.http.accept-encoding","gzip, deflate");pref("network.http.accept-encoding.secure","gzip, deflate, br");pref("network.http.prompt-temp-redirect",false);
pref("network.http.assoc-req.enforce",false);


pref("network.http.qos",0);
pref("network.http.connection-retry-timeout",250);
pref("network.http.connection-timeout",90);
pref("network.http.tls-handshake-timeout",30);


pref("network.http.fallback-connection-timeout",5);

pref("network.http.network-changed.timeout",5);
pref("network.http.speculative-parallel-limit",6);
pref("network.http.rendering-critical-requests-prioritization",true);
pref("network.http.fast-fallback-to-IPv4",true);pref("network.http.spdy.enabled",true);pref("network.http.spdy.enabled.http2",true);pref("network.http.spdy.enabled.deps",true);pref("network.http.spdy.enforce-tls-profile",true);pref("network.http.spdy.chunk-size",16000);pref("network.http.spdy.timeout",170);pref("network.http.spdy.coalesce-hostnames",true);pref("network.http.spdy.persistent-settings",false);pref("network.http.spdy.ping-threshold",58);pref("network.http.spdy.ping-timeout",8);pref("network.http.spdy.send-buffer-size",131072);pref("network.http.spdy.allow-push",true);pref("network.http.spdy.push-allowance",131072);pref("network.http.spdy.pull-allowance",12582912);pref("network.http.spdy.default-concurrent",100);pref("network.http.spdy.default-hpack-buffer",65536);

pref("network.http.altsvc.enabled",true);pref("network.http.altsvc.oe",true);pref("security.tls.enable_0rtt_data",true);pref("network.http.originextension",true);pref("network.http.diagnostics",false);pref("network.http.pacing.requests.enabled",true);pref("network.http.pacing.requests.min-parallelism",6);pref("network.http.pacing.requests.hz",80);pref("network.http.pacing.requests.burst",10);pref("network.http.tcp_keepalive.short_lived_connections",true);pref("network.http.tcp_keepalive.short_lived_time",60);pref("network.http.tcp_keepalive.short_lived_idle_time",10);pref("network.http.tcp_keepalive.long_lived_connections",true);pref("network.http.tcp_keepalive.long_lived_idle_time",600);pref("network.http.enforce-framing.http1",false);pref("network.http.enforce-framing.soft",true);pref("network.http.max_response_header_size",393216);pref("network.http.rcwn.enabled",true);pref("network.http.rcwn.cache_queue_normal_threshold",8);pref("network.http.rcwn.cache_queue_priority_threshold",2);
pref("network.http.rcwn.small_resource_size_kb",256);pref("network.http.rcwn.min_wait_before_racing_ms",0);pref("network.http.rcwn.max_wait_before_racing_ms",500);
pref("network.http.focused_window_transaction_ratio","0.9");
pref("network.http.send_window_size",1024);pref("network.http.active_tab_priority",false);

pref("network.ftp.data.qos",0);pref("network.ftp.control.qos",0);pref("network.ftp.enabled",true);pref("network.sts.max_time_for_events_between_two_polls",100);
pref("network.sts.poll_busy_wait_period",50);
pref("network.sts.poll_busy_wait_period_timeout",7);
pref("network.sts.max_time_for_pr_close_during_shutdown",5000);
pref("network.sts.pollable_event_timeout",6);
pref("network.security.esni.enabled",false);pref("network.websocket.max-message-size",2147483647);pref("network.websocket.auto-follow-http-redirects",false);pref("network.websocket.timeout.open",20);
pref("network.websocket.timeout.close",20);
pref("network.websocket.timeout.ping.request",0);

pref("network.websocket.timeout.ping.response",10);
pref("network.websocket.extensions.permessage-deflate",true);

pref("network.websocket.max-connections",200);
pref("network.websocket.allowInsecureFromHTTPS",false);
pref("network.websocket.delay-failed-reconnects",true);
pref("dom.server-events.default-reconnection-time",5000);


pref("network.IDN_show_punycode",false);









pref("network.IDN.restriction_profile","high");pref("network.IDN.use_whitelist",false);pref("network.IDN.whitelist.ac",true);pref("network.IDN.whitelist.ar",true);pref("network.IDN.whitelist.at",true);pref("network.IDN.whitelist.br",true);pref("network.IDN.whitelist.ca",true);pref("network.IDN.whitelist.ch",true);pref("network.IDN.whitelist.cl",true);pref("network.IDN.whitelist.cn",true);pref("network.IDN.whitelist.de",true);pref("network.IDN.whitelist.dk",true);pref("network.IDN.whitelist.ee",true);pref("network.IDN.whitelist.es",true);pref("network.IDN.whitelist.fi",true);pref("network.IDN.whitelist.fr",true);pref("network.IDN.whitelist.gr",true);pref("network.IDN.whitelist.gt",true);pref("network.IDN.whitelist.hu",true);pref("network.IDN.whitelist.il",true);pref("network.IDN.whitelist.io",true);pref("network.IDN.whitelist.ir",true);pref("network.IDN.whitelist.is",true);pref("network.IDN.whitelist.jp",true);pref("network.IDN.whitelist.kr",true);pref("network.IDN.whitelist.li",true);pref("network.IDN.whitelist.lt",true);pref("network.IDN.whitelist.lu",true);pref("network.IDN.whitelist.lv",true);pref("network.IDN.whitelist.no",true);pref("network.IDN.whitelist.nu",true);pref("network.IDN.whitelist.nz",true);pref("network.IDN.whitelist.pl",true);pref("network.IDN.whitelist.pm",true);pref("network.IDN.whitelist.pr",true);pref("network.IDN.whitelist.re",true);pref("network.IDN.whitelist.se",true);pref("network.IDN.whitelist.sh",true);pref("network.IDN.whitelist.si",true);pref("network.IDN.whitelist.tf",true);pref("network.IDN.whitelist.th",true);pref("network.IDN.whitelist.tm",true);pref("network.IDN.whitelist.tw",true);pref("network.IDN.whitelist.ua",true);pref("network.IDN.whitelist.vn",true);pref("network.IDN.whitelist.wf",true);pref("network.IDN.whitelist.yt",true);
pref("network.IDN.whitelist.xn--mgbaam7a8h",true);pref("network.IDN.whitelist.xn--fiqz9s",true);pref("network.IDN.whitelist.xn--fiqs8s",true);
pref("network.IDN.whitelist.xn--wgbh1c",true);pref("network.IDN.whitelist.xn--j6w193g",true);pref("network.IDN.whitelist.xn--mgba3a4f16a",true);pref("network.IDN.whitelist.xn--mgba3a4fra",true);pref("network.IDN.whitelist.xn--mgbayh7gpa",true);pref("network.IDN.whitelist.xn--fzc2c9e2c",true);pref("network.IDN.whitelist.xn--xkc2al3hye2a",true);pref("network.IDN.whitelist.xn--wgbl6a",true);pref("network.IDN.whitelist.xn--90a3ac",true);pref("network.IDN.whitelist.xn--p1ai",true);pref("network.IDN.whitelist.xn--mgberp4a5d4ar",true);pref("network.IDN.whitelist.xn--mgberp4a5d4a87g",true);pref("network.IDN.whitelist.xn--mgbqly7c0a67fbc",true);pref("network.IDN.whitelist.xn--mgbqly7cvafr",true);pref("network.IDN.whitelist.xn--ogbpf8fl",true);pref("network.IDN.whitelist.xn--o3cw4h",true);pref("network.IDN.whitelist.xn--kpry57d",true);pref("network.IDN.whitelist.xn--kprw13d",true);
pref("network.IDN.whitelist.asia",true);pref("network.IDN.whitelist.biz",true);pref("network.IDN.whitelist.cat",true);pref("network.IDN.whitelist.info",true);pref("network.IDN.whitelist.museum",true);pref("network.IDN.whitelist.org",true);pref("network.IDN.whitelist.tel",true);


pref("network.IDN.whitelist.xn--0zwm56d",true);pref("network.IDN.whitelist.xn--11b5bs3a9aj6g",true);pref("network.IDN.whitelist.xn--80akhbyknj4f",true);pref("network.IDN.whitelist.xn--9t4b11yi5a",true);pref("network.IDN.whitelist.xn--deba0ad",true);pref("network.IDN.whitelist.xn--g6w251d",true);pref("network.IDN.whitelist.xn--hgbk6aj7f53bba",true);pref("network.IDN.whitelist.xn--hlcj6aya9esc7a",true);pref("network.IDN.whitelist.xn--jxalpdlp",true);pref("network.IDN.whitelist.xn--kgbechtv",true);pref("network.IDN.whitelist.xn--zckzah",true);



pref("network.IDN.blacklist_chars","\u0020\u00A0\u00BC\u00BD\u00BE\u01C3\u02D0\u0337\u0338\u0589\u058A\u05C3\u05F4\u0609\u060A\u066A\u06D4\u0701\u0702\u0703\u0704\u115F\u1160\u1735\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u200E\u200F\u2010\u2019\u2024\u2027\u2028\u2029\u202A\u202B\u202C\u202D\u202E\u202F\u2039\u203A\u2041\u2044\u2052\u205F\u2153\u2154\u2155\u2156\u2157\u2158\u2159\u215A\u215B\u215C\u215D\u215E\u215F\u2215\u2236\u23AE\u2571\u29F6\u29F8\u2AFB\u2AFD\u2FF0\u2FF1\u2FF2\u2FF3\u2FF4\u2FF5\u2FF6\u2FF7\u2FF8\u2FF9\u2FFA\u2FFB\u3000\u3002\u3014\u3015\u3033\u30A0\u3164\u321D\u321E\u33AE\u33AF\u33C6\u33DF\uA789\uFE14\uFE15\uFE3F\uFE5D\uFE5E\uFEFF\uFF0E\uFF0F\uFF61\uFFA0\uFFF9\uFFFA\uFFFB\uFFFC\uFFFD");

pref("network.dns.ipv4OnlyDomains","");pref("network.dns.disableIPv6",false);pref("network.dnsCacheEntries",400);pref("network.dnsCacheExpiration",60);pref("network.dns.get-ttl",true);pref("network.dns.native-is-localhost",false);
pref("network.dnsCacheExpirationGracePeriod",60);pref("network.dns.disablePrefetch",false);
pref("network.dns.blockDotOnion",true);pref("network.dns.localDomains","");
pref("network.dns.forceResolve","");pref("network.dns.offline-localhost",true);pref("network.dns.resolver-thread-extra-idle-time-seconds",60);pref("network.standard-url.max-length",1048576);
pref("network.standard-url.punycode-host",true);pref("network.ftp.idleConnectionTimeout",300);
pref("network.prefetch-next",true);pref("network.preload",false);


pref("network.auth.force-generic-ntlm-v1",false);
pref("network.negotiate-auth.trusted-uris","");pref("network.negotiate-auth.delegation-uris","");pref("network.negotiate-auth.allow-non-fqdn",false);pref("network.negotiate-auth.allow-proxies",true);pref("network.negotiate-auth.gsslib","");pref("network.negotiate-auth.using-native-gsslib",true);




pref("network.auth.force-generic-ntlm",false);


pref("network.automatic-ntlm-auth.allow-proxies",true);pref("network.automatic-ntlm-auth.allow-non-fqdn",false);pref("network.automatic-ntlm-auth.trusted-uris","");




pref("network.generic-ntlm-auth.workstation","WORKSTATION");



pref("network.auth.private-browsing-sso",false);


pref("network.http.throttle.enable",false);
pref("network.http.throttle.version",1);pref("network.http.throttle.suspend-for",900);pref("network.http.throttle.resume-for",100);pref("network.http.throttle.read-limit-bytes",8000);pref("network.http.throttle.read-interval-ms",500);


pref("network.http.throttle.hold-time-ms",800);

pref("network.http.throttle.max-time-ms",500);
pref("network.http.on_click_priority",true);
pref("network.http.tailing.enabled",true);
pref("network.http.tailing.delay-quantum",600);pref("network.http.tailing.delay-quantum-after-domcontentloaded",100);
pref("network.http.tailing.delay-max",6000);pref("network.http.tailing.total-max",45000);pref("permissions.default.image",1);pref("network.proxy.type",5);pref("network.proxy.ftp","");pref("network.proxy.ftp_port",0);pref("network.proxy.http","");pref("network.proxy.http_port",0);pref("network.proxy.ssl","");pref("network.proxy.ssl_port",0);pref("network.proxy.socks","");pref("network.proxy.socks_port",0);pref("network.proxy.socks_version",5);pref("network.proxy.socks_remote_dns",false);pref("network.proxy.proxy_over_tls",true);pref("network.proxy.no_proxies_on","localhost, 127.0.0.1");pref("network.proxy.failover_timeout",1800);pref("network.online",true);pref("network.cookie.thirdparty.sessionOnly",false);pref("network.cookie.thirdparty.nonsecureSessionOnly",false);pref("network.cookie.leave-secure-alone",true);pref("network.cookie.same-site.enabled",true);


pref("network.cookie.lifetimePolicy",0);pref("network.cookie.move.interval_sec",10);pref("network.cookie.maxNumber",3000);pref("network.cookie.maxPerHost",180);pref("network.cookie.quotaPerHost",150);pref("network.proxy.autoconfig_url","");pref("network.proxy.autoconfig_url.include_path",false);
pref("network.proxy.autoconfig_retry_interval_min",5);pref("network.proxy.autoconfig_retry_interval_max",300);pref("network.proxy.enable_wpad_over_dhcp",true);pref("network.stricttransportsecurity.preloadlist",true);pref("network.mdns.use_js_fallback",false);pref("converter.html2txt.structs",true);pref("converter.html2txt.header_strategy",1);



pref("converter.html2txt.always_include_ruby",false);pref("intl.accept_languages","chrome://global/locale/intl.properties");pref("intl.menuitems.alwaysappendaccesskeys","chrome://global/locale/intl.properties");pref("intl.menuitems.insertseparatorbeforeaccesskeys","chrome://global/locale/intl.properties");pref("intl.charset.detector","chrome://global/locale/intl.properties");pref("intl.charset.fallback.override","");pref("intl.charset.fallback.tld",true);pref("intl.charset.fallback.utf8_for_file",false);pref("intl.ellipsis","chrome://global-platform/locale/intl.properties");

pref("intl.regional_prefs.use_os_locales",false);
pref("intl.fallbackCharsetList.ISO-8859-1","windows-1252");pref("font.language.group","chrome://global/locale/intl.properties");


pref("intl.ime.hack.on_any_apps.fire_key_events_for_composition",false);


pref("intl.ime.hack.on_ime_unaware_apps.fire_key_events_for_composition",true);


pref("intl.ime.remove_placeholder_character_at_commit",false);pref("intl.uidirection",-1);
pref("intl.hyphenation-alias.en","en-us");pref("intl.hyphenation-alias.en-*","en-us");pref("intl.hyphenation-alias.af-*","af");pref("intl.hyphenation-alias.bg-*","bg");pref("intl.hyphenation-alias.ca-*","ca");pref("intl.hyphenation-alias.cy-*","cy");pref("intl.hyphenation-alias.da-*","da");pref("intl.hyphenation-alias.eo-*","eo");pref("intl.hyphenation-alias.es-*","es");pref("intl.hyphenation-alias.et-*","et");pref("intl.hyphenation-alias.fi-*","fi");pref("intl.hyphenation-alias.fr-*","fr");pref("intl.hyphenation-alias.gl-*","gl");pref("intl.hyphenation-alias.hr-*","hr");pref("intl.hyphenation-alias.hsb-*","hsb");pref("intl.hyphenation-alias.hu-*","hu");pref("intl.hyphenation-alias.ia-*","ia");pref("intl.hyphenation-alias.is-*","is");pref("intl.hyphenation-alias.it-*","it");pref("intl.hyphenation-alias.kmr-*","kmr");pref("intl.hyphenation-alias.la-*","la");pref("intl.hyphenation-alias.lt-*","lt");pref("intl.hyphenation-alias.mn-*","mn");pref("intl.hyphenation-alias.nl-*","nl");pref("intl.hyphenation-alias.pl-*","pl");pref("intl.hyphenation-alias.pt-*","pt");pref("intl.hyphenation-alias.ru-*","ru");pref("intl.hyphenation-alias.sl-*","sl");pref("intl.hyphenation-alias.sv-*","sv");pref("intl.hyphenation-alias.tr-*","tr");pref("intl.hyphenation-alias.uk-*","uk");
pref("intl.hyphenation-alias.de","de-1996");pref("intl.hyphenation-alias.de-*","de-1996");pref("intl.hyphenation-alias.de-AT-1901","de-1901");pref("intl.hyphenation-alias.de-DE-1901","de-1901");pref("intl.hyphenation-alias.de-CH-*","de-CH");
pref("intl.hyphenation-alias.sr","sh");pref("intl.hyphenation-alias.bs","sh");pref("intl.hyphenation-alias.sh-*","sh");pref("intl.hyphenation-alias.sr-*","sh");pref("intl.hyphenation-alias.bs-*","sh");pref("intl.hyphenation-alias.no","nb");pref("intl.hyphenation-alias.no-*","nb");pref("intl.hyphenation-alias.nb-*","nb");pref("intl.hyphenation-alias.nn-*","nn");pref("font.name.serif.ar","");pref("font.name.sans-serif.ar","");pref("font.name.monospace.ar","");pref("font.name.cursive.ar","");pref("font.name.serif.el","");pref("font.name.sans-serif.el","");pref("font.name.monospace.el","");pref("font.name.cursive.el","");pref("font.name.serif.he","");pref("font.name.sans-serif.he","");pref("font.name.monospace.he","");pref("font.name.cursive.he","");pref("font.name.serif.ja","");pref("font.name.sans-serif.ja","");pref("font.name.monospace.ja","");pref("font.name.cursive.ja","");pref("font.name.serif.ko","");pref("font.name.sans-serif.ko","");pref("font.name.monospace.ko","");pref("font.name.cursive.ko","");pref("font.name.serif.th","");pref("font.name.sans-serif.th","");pref("font.name.monospace.th","");pref("font.name.cursive.th","");pref("font.name.serif.x-cyrillic","");pref("font.name.sans-serif.x-cyrillic","");pref("font.name.monospace.x-cyrillic","");pref("font.name.cursive.x-cyrillic","");pref("font.name.serif.x-unicode","");pref("font.name.sans-serif.x-unicode","");pref("font.name.monospace.x-unicode","");pref("font.name.cursive.x-unicode","");pref("font.name.serif.x-western","");pref("font.name.sans-serif.x-western","");pref("font.name.monospace.x-western","");pref("font.name.cursive.x-western","");pref("font.name.serif.zh-CN","");pref("font.name.sans-serif.zh-CN","");pref("font.name.monospace.zh-CN","");pref("font.name.cursive.zh-CN","");pref("font.name.serif.zh-TW","");pref("font.name.sans-serif.zh-TW","");pref("font.name.monospace.zh-TW","");pref("font.name.cursive.zh-TW","");pref("font.name.serif.zh-HK","");pref("font.name.sans-serif.zh-HK","");pref("font.name.monospace.zh-HK","");pref("font.name.cursive.zh-HK","");pref("font.name.serif.x-devanagari","");pref("font.name.sans-serif.x-devanagari","");pref("font.name.monospace.x-devanagari","");pref("font.name.cursive.x-devanagari","");pref("font.name.serif.x-tamil","");pref("font.name.sans-serif.x-tamil","");pref("font.name.monospace.x-tamil","");pref("font.name.cursive.x-tamil","");pref("font.name.serif.x-armn","");pref("font.name.sans-serif.x-armn","");pref("font.name.monospace.x-armn","");pref("font.name.cursive.x-armn","");pref("font.name.serif.x-beng","");pref("font.name.sans-serif.x-beng","");pref("font.name.monospace.x-beng","");pref("font.name.cursive.x-beng","");pref("font.name.serif.x-cans","");pref("font.name.sans-serif.x-cans","");pref("font.name.monospace.x-cans","");pref("font.name.cursive.x-cans","");pref("font.name.serif.x-ethi","");pref("font.name.sans-serif.x-ethi","");pref("font.name.monospace.x-ethi","");pref("font.name.cursive.x-ethi","");pref("font.name.serif.x-geor","");pref("font.name.sans-serif.x-geor","");pref("font.name.monospace.x-geor","");pref("font.name.cursive.x-geor","");pref("font.name.serif.x-gujr","");pref("font.name.sans-serif.x-gujr","");pref("font.name.monospace.x-gujr","");pref("font.name.cursive.x-gujr","");pref("font.name.serif.x-guru","");pref("font.name.sans-serif.x-guru","");pref("font.name.monospace.x-guru","");pref("font.name.cursive.x-guru","");pref("font.name.serif.x-khmr","");pref("font.name.sans-serif.x-khmr","");pref("font.name.monospace.x-khmr","");pref("font.name.cursive.x-khmr","");pref("font.name.serif.x-mlym","");pref("font.name.sans-serif.x-mlym","");pref("font.name.monospace.x-mlym","");pref("font.name.cursive.x-mlym","");pref("font.name.serif.x-orya","");pref("font.name.sans-serif.x-orya","");pref("font.name.monospace.x-orya","");pref("font.name.cursive.x-orya","");pref("font.name.serif.x-telu","");pref("font.name.sans-serif.x-telu","");pref("font.name.monospace.x-telu","");pref("font.name.cursive.x-telu","");pref("font.name.serif.x-knda","");pref("font.name.sans-serif.x-knda","");pref("font.name.monospace.x-knda","");pref("font.name.cursive.x-knda","");pref("font.name.serif.x-sinh","");pref("font.name.sans-serif.x-sinh","");pref("font.name.monospace.x-sinh","");pref("font.name.cursive.x-sinh","");pref("font.name.serif.x-tibt","");pref("font.name.sans-serif.x-tibt","");pref("font.name.monospace.x-tibt","");pref("font.name.cursive.x-tibt","");pref("font.name.serif.x-math","");pref("font.name.sans-serif.x-math","");pref("font.name.monospace.x-math","");pref("font.name.cursive.x-math","");pref("font.name-list.serif.x-math","Latin Modern Math, STIX Two Math, XITS Math, Cambria Math, Libertinus Math, DejaVu Math TeX Gyre, TeX Gyre Bonum Math, TeX Gyre Pagella Math, TeX Gyre Schola, TeX Gyre Termes Math, STIX Math, Asana Math, STIXGeneral, DejaVu Serif, DejaVu Sans, serif");pref("font.name-list.sans-serif.x-math","sans-serif");pref("font.name-list.monospace.x-math","monospace");pref("font.blacklist.underline_offset","FangSong,Gulim,GulimChe,MingLiU,MingLiU-ExtB,MingLiU_HKSCS,MingLiU-HKSCS-ExtB,MS Gothic,MS Mincho,MS PGothic,MS PMincho,MS UI Gothic,PMingLiU,PMingLiU-ExtB,SimHei,SimSun,SimSun-ExtB,Hei,Kai,Apple LiGothic,Apple LiSung,Osaka");pref("security.directory","");pref("security.dialog_enable_delay",1000);pref("security.notification_enable_delay",500);pref("security.signed_content.CSP.default","script-src 'self'; style-src 'self'");pref("security.mixed_content.block_active_content",false);pref("security.mixed_content.block_display_content",false);pref("security.mixed_content.upgrade_display_content",false);pref("security.mixed_content.block_object_subrequest",false);pref("security.sri.enable",true);pref("security.block_script_with_wrong_mime",true);pref("security.ssl.enable_ocsp_must_staple",true);pref("security.insecure_field_warning.contextual.enabled",false);pref("security.insecure_field_warning.ignore_local_ip_address",true);pref("security.cert_pinning.enforcement_level",0);
pref("security.cert_pinning.process_headers_from_non_builtin_roots",false);
pref("security.view-source.reachable-from-inner-protocol",false);pref("services.settings.poll_interval",86400);pref("services.settings.server","https://firefox.settings.services.mozilla.com/v1");pref("services.settings.changes.path","/buckets/monitor/collections/changes/records");pref("services.settings.default_bucket","main");pref("services.settings.default_signer","remote-settings.content-signature.mozilla.org");pref("extensions.blocklist.enabled",true);pref("extensions.blocklist.interval",86400);
pref("security.onecrl.maximum_staleness_in_seconds",108000);pref("extensions.blocklist.url","https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/%PRODUCT%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/%PING_COUNT%/%TOTAL_PING_COUNT%/%DAYS_SINCE_LAST_PING%/");pref("extensions.blocklist.detailsURL","https://blocked.cdn.mozilla.net/");pref("extensions.blocklist.itemURL","https://blocked.cdn.mozilla.net/%blockID%.html");
pref("extensions.blocklist.level",2);pref("services.blocklist.bucket","blocklists");pref("services.blocklist.onecrl.collection","certificates");pref("services.blocklist.onecrl.checked",0);pref("services.blocklist.onecrl.signer","onecrl.content-signature.mozilla.org");pref("services.blocklist.addons.collection","addons");pref("services.blocklist.addons.checked",0);pref("services.blocklist.addons.signer","remote-settings.content-signature.mozilla.org");pref("services.blocklist.plugins.collection","plugins");pref("services.blocklist.plugins.checked",0);pref("services.blocklist.plugins.signer","remote-settings.content-signature.mozilla.org");pref("services.blocklist.pinning.enabled",true);pref("services.blocklist.pinning.bucket","pinning");pref("services.blocklist.pinning.collection","pins");pref("services.blocklist.pinning.checked",0);pref("services.blocklist.pinning.signer","pinning-preload.content-signature.mozilla.org");pref("services.blocklist.gfx.collection","gfx");pref("services.blocklist.gfx.checked",0);pref("services.blocklist.gfx.signer","remote-settings.content-signature.mozilla.org");pref("ui.key.accelKey",17);pref("ui.key.menuAccessKey",18);pref("ui.key.generalAccessKey",-1);
pref("ui.key.chromeAccess",4);pref("ui.key.contentAccess",5);pref("ui.key.menuAccessKeyFocuses",false);
pref("ui.use_activity_cursor",false);pref("middlemouse.paste",false);pref("middlemouse.contentLoadURL",false);pref("middlemouse.scrollbarPosition",false);pref("clipboard.autocopy",false);pref("clipboard.plainTextOnly",false);pref("mousewheel.transaction.timeout",1500);pref("mousewheel.transaction.ignoremovedelay",100);
pref("mousewheel.acceleration.start",-1);pref("mousewheel.acceleration.factor",10);






pref("mousewheel.system_scroll_override_on_root_content.vertical.factor",200);pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor",200);





pref("mousewheel.default.action",1);pref("mousewheel.with_alt.action",2);pref("mousewheel.with_control.action",3);pref("mousewheel.with_meta.action",1);pref("mousewheel.with_shift.action",4);pref("mousewheel.with_win.action",1);

pref("mousewheel.default.action.override_x",-1);pref("mousewheel.with_alt.action.override_x",-1);pref("mousewheel.with_control.action.override_x",-1);pref("mousewheel.with_meta.action.override_x",-1);pref("mousewheel.with_shift.action.override_x",-1);pref("mousewheel.with_win.action.override_x",-1);

pref("mousewheel.default.delta_multiplier_x",100);pref("mousewheel.default.delta_multiplier_y",100);pref("mousewheel.default.delta_multiplier_z",100);pref("mousewheel.with_alt.delta_multiplier_x",100);pref("mousewheel.with_alt.delta_multiplier_y",100);pref("mousewheel.with_alt.delta_multiplier_z",100);pref("mousewheel.with_control.delta_multiplier_x",100);pref("mousewheel.with_control.delta_multiplier_y",100);pref("mousewheel.with_control.delta_multiplier_z",100);pref("mousewheel.with_meta.delta_multiplier_x",100);pref("mousewheel.with_meta.delta_multiplier_y",100);pref("mousewheel.with_meta.delta_multiplier_z",100);pref("mousewheel.with_shift.delta_multiplier_x",100);pref("mousewheel.with_shift.delta_multiplier_y",100);pref("mousewheel.with_shift.delta_multiplier_z",100);pref("mousewheel.with_win.delta_multiplier_x",100);pref("mousewheel.with_win.delta_multiplier_y",100);pref("mousewheel.with_win.delta_multiplier_z",100);
pref("mousewheel.min_line_scroll_amount",5);




pref("mousewheel.autodir.enabled",false);








pref("mousewheel.autodir.honourroot",false);





pref("general.smoothScroll.mouseWheel.durationMinMS",200);pref("general.smoothScroll.mouseWheel.durationMaxMS",400);pref("general.smoothScroll.pixels.durationMinMS",150);pref("general.smoothScroll.pixels.durationMaxMS",150);pref("general.smoothScroll.lines.durationMinMS",150);pref("general.smoothScroll.lines.durationMaxMS",150);pref("general.smoothScroll.pages.durationMinMS",150);pref("general.smoothScroll.pages.durationMaxMS",150);pref("general.smoothScroll.scrollbars.durationMinMS",150);pref("general.smoothScroll.scrollbars.durationMaxMS",150);pref("general.smoothScroll.other.durationMinMS",150);pref("general.smoothScroll.other.durationMaxMS",150);pref("general.smoothScroll.mouseWheel",true);pref("general.smoothScroll.pixels",true);pref("general.smoothScroll.lines",true);pref("general.smoothScroll.pages",true);pref("general.smoothScroll.scrollbars",true);pref("general.smoothScroll.other",true);


pref("general.smoothScroll.durationToIntervalRatio",200);pref("general.smoothScroll.currentVelocityWeighting","0.25");pref("general.smoothScroll.stopDecelerationWeighting","0.4");pref("general.smoothScroll.msdPhysics.enabled",false);pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS",120);pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",1250);pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",12);pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio","1.3");pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",2000);pref("general.smoothScroll.msdPhysics.regularSpringConstant",1000);pref("profile.manage_only_at_launch",false);
pref("bidi.direction",1);

pref("bidi.texttype",1);





pref("bidi.numeral",0);

pref("bidi.edit.delete_immediately",true);

pref("bidi.edit.caret_movement_style",2);

pref("bidi.browser.ui",false);pref("layout.word_select.eat_space_to_next_word",false);pref("layout.word_select.stop_at_punctuation",true);
pref("layout.word_select.stop_at_underscore",false);






pref("layout.selection.caret_style",0);pref("layout.css.report_errors",true);
pref("layout.css.dpi",-1);

pref("layout.css.devPixelsPerPx","-1.0");pref("layout.css.individual-transform.enabled",false);pref("layout.css.initial-letter.enabled",false);pref("layout.css.mix-blend-mode.enabled",true);pref("layout.css.isolation.enabled",true);pref("layout.css.scrollbar-color.enabled",true);pref("layout.css.scrollbar-width.enabled",true);
pref("layout.css.scroll-snap.proximity-threshold",200);
pref("layout.css.scroll-snap.prediction-max-velocity",2000);


pref("layout.css.scroll-snap.prediction-sensitivity","0.750");pref("layout.css.DOMPoint.enabled",true);pref("layout.css.DOMQuad.enabled",true);pref("layout.css.DOMMatrix.enabled",true);pref("layout.css.getBoxQuads.enabled",false);pref("layout.css.convertFromNode.enabled",false);pref("layout.css.text-align-unsafe-value.enabled",false);pref("layout.css.text-justify.enabled",true);pref("layout.css.image-orientation.enabled",true);pref("layout.css.paint-order.enabled",true);pref("layout.css.prefixes.border-image",true);pref("layout.css.prefixes.transforms",true);pref("layout.css.prefixes.transitions",true);pref("layout.css.prefixes.animations",true);pref("layout.css.prefixes.box-sizing",true);pref("layout.css.prefixes.font-features",true);pref("layout.css.background-blend-mode.enabled",true);
pref("layout.css.osx-font-smoothing.enabled",false);pref("layout.css.overflow-clip-box.enabled",false);pref("layout.css.contain.enabled",false);pref("layout.css.box-decoration-break.enabled",true);pref("layout.css.outline-style-auto.enabled",false);pref("layout.css.scroll-behavior.enabled",true);pref("layout.css.scroll-behavior.property-enabled",true);
pref("layout.css.scroll-behavior.spring-constant","250.0");



pref("layout.css.scroll-behavior.damping-ratio","1.0");pref("layout.css.scroll-snap.enabled",true);pref("layout.css.shape-outside.enabled",true);pref("layout.css.font-loading-api.enabled",true);pref("layout.css.ruby.intercharacter.enabled",false);pref("layout.css.overscroll-behavior.enabled",true);pref("layout.css.motion-path.enabled",false);



pref("layout.scrollbar.side",0);pref("layout.testing.overlay-scrollbars.always-visible",false);

pref("layout.interruptible-reflow.enabled",true);
pref("layout.frame_rate",-1);pref("layout.display-list.dump",false);pref("layout.display-list.dump-content",false);pref("layout.display-list.dump-parent",false);
pref("layout.display-list.retain",false);
pref("layout.display-list.rebuild-frame-limit",500);pref("layout.spammy_warnings.enabled",false);pref("layout.float-fragments-inside-column.enabled",true);
pref("layout.idle_period.required_quiescent_frames",2);
pref("layout.idle_period.time_limit",1);pref("dom.animations-api.core.enabled",true);pref("dom.animations.offscreen-throttling",true);
pref("layout.animation.prerender.partial",false);pref("layout.animation.prerender.viewport-ratio-limit-x","1.125");pref("layout.animation.prerender.viewport-ratio-limit-y","1.125");pref("layout.animation.prerender.absolute-limit-x",4096);pref("layout.animation.prerender.absolute-limit-y",4096);pref("plugin.override_internal_types",false);pref("gestures.enable_single_finger_input",true);pref("editor.resizing.preserve_ratio",true);pref("editor.positioning.offset",0);pref("dom.use_watchdog",true);pref("dom.max_chrome_script_run_time",20);pref("dom.max_script_run_time",10);pref("dom.max_ext_content_script_run_time",5);pref("dom.global_stop_script",true);pref("input_event_queue.supported",true);
pref("input_event_queue.duration.max",8);pref("input_event_queue.duration.min",1);
pref("input_event_queue.default_duration_per_event",1);
pref("input_event_queue.count_for_prediction",9);pref("plugins.load_appdir_plugins",false);pref("plugins.click_to_play",false);pref("plugins.navigator.hidden_ctp_plugin","");pref("plugin.default.state",2);
pref("plugin.sessionPermissionNow.intervalInMinutes",60);
pref("plugin.persistentPermissionAlways.intervalInDays",90);



pref("plugins.favorfallback.mode","never");
pref("plugins.favorfallback.rules","");



pref("dom.ipc.plugins.timeoutSecs",45);

pref("dom.ipc.plugins.parentTimeoutSecs",0);
pref("dom.ipc.plugins.contentTimeoutSecs",10);
pref("dom.ipc.plugins.processLaunchTimeoutSecs",45);pref("dom.ipc.plugins.flash.disable-protected-mode",false);pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled",true);pref("dom.ipc.plugins.reportCrashURL",true);pref("dom.ipc.plugins.unloadTimeoutSecs",30);pref("dom.ipc.plugins.asyncdrawing.enabled",true);pref("dom.ipc.plugins.forcedirect.enabled",true);pref("dom.ipc.processCount",4);pref("dom.ipc.processCount.file",1);pref("dom.ipc.processCount.extension",1);pref("dom.ipc.processCount.privileged",1);
pref("dom.ipc.keepProcessesAlive.privileged",1);pref("dom.ipc.useNativeEventProcessing.content",true);pref("dom.ipc.scheduler.useMultipleQueues",true);pref("dom.ipc.scheduler.preemption",false);pref("dom.ipc.scheduler.threadCount",2);pref("dom.ipc.scheduler.chaoticScheduling",false);pref("svg.disabled",false);pref("dom.ipc.processCount.webLargeAllocation",10);pref("dom.largeAllocationHeader.enabled",true);pref("browser.tabs.remote.autostart",false);
pref("browser.tabs.remote.separateFileUriProcess",true);

pref("browser.tabs.remote.allowLinkedWebInFileUriProcess",true);pref("browser.tabs.remote.separatePrivilegedContentProcess",false);pref("svg.display-lists.hit-testing.enabled",true);pref("svg.display-lists.painting.enabled",true);pref("svg.new-getBBox.enabled",false);pref("svg.transform-box.enabled",true);pref("svg.context-properties.content.enabled",false);pref("font.default.ar","sans-serif");pref("font.minimum-size.ar",0);pref("font.size.variable.ar",16);pref("font.size.fixed.ar",13);pref("font.default.el","serif");pref("font.minimum-size.el",0);pref("font.size.variable.el",16);pref("font.size.fixed.el",13);pref("font.default.he","sans-serif");pref("font.minimum-size.he",0);pref("font.size.variable.he",16);pref("font.size.fixed.he",13);pref("font.default.ja","sans-serif");pref("font.minimum-size.ja",0);pref("font.size.variable.ja",16);pref("font.size.fixed.ja",16);pref("font.default.ko","sans-serif");pref("font.minimum-size.ko",0);pref("font.size.variable.ko",16);pref("font.size.fixed.ko",16);pref("font.default.th","sans-serif");pref("font.minimum-size.th",0);pref("font.size.variable.th",16);pref("font.size.fixed.th",13);pref("font.default.x-cyrillic","serif");pref("font.minimum-size.x-cyrillic",0);pref("font.size.variable.x-cyrillic",16);pref("font.size.fixed.x-cyrillic",13);pref("font.default.x-devanagari","serif");pref("font.minimum-size.x-devanagari",0);pref("font.size.variable.x-devanagari",16);pref("font.size.fixed.x-devanagari",13);pref("font.default.x-tamil","serif");pref("font.minimum-size.x-tamil",0);pref("font.size.variable.x-tamil",16);pref("font.size.fixed.x-tamil",13);pref("font.default.x-armn","serif");pref("font.minimum-size.x-armn",0);pref("font.size.variable.x-armn",16);pref("font.size.fixed.x-armn",13);pref("font.default.x-beng","serif");pref("font.minimum-size.x-beng",0);pref("font.size.variable.x-beng",16);pref("font.size.fixed.x-beng",13);pref("font.default.x-cans","serif");pref("font.minimum-size.x-cans",0);pref("font.size.variable.x-cans",16);pref("font.size.fixed.x-cans",13);pref("font.default.x-ethi","serif");pref("font.minimum-size.x-ethi",0);pref("font.size.variable.x-ethi",16);pref("font.size.fixed.x-ethi",13);pref("font.default.x-geor","serif");pref("font.minimum-size.x-geor",0);pref("font.size.variable.x-geor",16);pref("font.size.fixed.x-geor",13);pref("font.default.x-gujr","serif");pref("font.minimum-size.x-gujr",0);pref("font.size.variable.x-gujr",16);pref("font.size.fixed.x-gujr",13);pref("font.default.x-guru","serif");pref("font.minimum-size.x-guru",0);pref("font.size.variable.x-guru",16);pref("font.size.fixed.x-guru",13);pref("font.default.x-khmr","serif");pref("font.minimum-size.x-khmr",0);pref("font.size.variable.x-khmr",16);pref("font.size.fixed.x-khmr",13);pref("font.default.x-mlym","serif");pref("font.minimum-size.x-mlym",0);pref("font.size.variable.x-mlym",16);pref("font.size.fixed.x-mlym",13);pref("font.default.x-orya","serif");pref("font.minimum-size.x-orya",0);pref("font.size.variable.x-orya",16);pref("font.size.fixed.x-orya",13);pref("font.default.x-telu","serif");pref("font.minimum-size.x-telu",0);pref("font.size.variable.x-telu",16);pref("font.size.fixed.x-telu",13);pref("font.default.x-knda","serif");pref("font.minimum-size.x-knda",0);pref("font.size.variable.x-knda",16);pref("font.size.fixed.x-knda",13);pref("font.default.x-sinh","serif");pref("font.minimum-size.x-sinh",0);pref("font.size.variable.x-sinh",16);pref("font.size.fixed.x-sinh",13);pref("font.default.x-tibt","serif");pref("font.minimum-size.x-tibt",0);pref("font.size.variable.x-tibt",16);pref("font.size.fixed.x-tibt",13);pref("font.default.x-unicode","serif");pref("font.minimum-size.x-unicode",0);pref("font.size.variable.x-unicode",16);pref("font.size.fixed.x-unicode",13);pref("font.default.x-western","serif");pref("font.minimum-size.x-western",0);pref("font.size.variable.x-western",16);pref("font.size.fixed.x-western",13);pref("font.default.zh-CN","sans-serif");pref("font.minimum-size.zh-CN",0);pref("font.size.variable.zh-CN",16);pref("font.size.fixed.zh-CN",16);pref("font.default.zh-HK","sans-serif");pref("font.minimum-size.zh-HK",0);pref("font.size.variable.zh-HK",16);pref("font.size.fixed.zh-HK",16);pref("font.default.zh-TW","sans-serif");pref("font.minimum-size.zh-TW",0);pref("font.size.variable.zh-TW",16);pref("font.size.fixed.zh-TW",16);
pref("font.default.x-math","serif");pref("font.minimum-size.x-math",0);pref("font.size.variable.x-math",16);pref("font.size.fixed.x-math",13);pref("font.size.inflation.emPerLine",0);pref("font.size.inflation.minTwips",0);pref("font.size.inflation.forceEnabled",false);pref("font.size.inflation.disabledInMasterProcess",false);pref("font.size.inflation.lineThreshold",400);pref("font.size.inflation.mappingIntercept",1);pref("font.size.inflation.maxRatio",0);pref("font.size.systemFontScale",100);pref("ui.touch.radius.enabled",false);pref("ui.touch.radius.leftmm",8);pref("ui.touch.radius.topmm",12);pref("ui.touch.radius.rightmm",8);pref("ui.touch.radius.bottommm",4);pref("ui.touch.radius.visitedWeight",120);pref("ui.mouse.radius.enabled",false);pref("ui.mouse.radius.leftmm",8);pref("ui.mouse.radius.topmm",12);pref("ui.mouse.radius.rightmm",8);pref("ui.mouse.radius.bottommm",4);pref("ui.mouse.radius.visitedWeight",120);pref("ui.mouse.radius.inputSource.touchOnly",true);pref("network.protocol-handler.warn-external.file",false);pref("browser.drag_out_of_frame_style",1);pref("middlemouse.paste",true);pref("middlemouse.openNewWindow",true);pref("middlemouse.scrollbarPosition",true);pref("browser.urlbar.clickSelectsAll",false);pref("helpers.global_mime_types_file","/etc/mime.types");pref("helpers.global_mailcap_file","/etc/mailcap");pref("helpers.private_mime_types_file","~/.mime.types");pref("helpers.private_mailcap_file","~/.mailcap");pref("print.printer_list","");pref("print.print_reversed",false);pref("print.print_in_color",true);




pref("ui.panel.default_level_parent",true);pref("mousewheel.system_scroll_override_on_root_content.enabled",false);
pref("browser.download.forward_oma_android_download_manager",false);pref("font.size.fixed.ar",12);pref("font.default.el","sans-serif");pref("font.size.fixed.el",12);pref("font.size.fixed.he",12);pref("font.default.x-cyrillic","sans-serif");pref("font.size.fixed.x-cyrillic",12);pref("font.default.x-unicode","sans-serif");pref("font.size.fixed.x-unicode",12);pref("font.default.x-western","sans-serif");pref("font.size.fixed.x-western",12);pref("font.name-list.emoji","Noto Color Emoji");pref("font.name-list.serif.ar","Noto Naskh Arabic, Noto Serif, Droid Serif");pref("font.name-list.sans-serif.ar","Noto Naskh Arabic, Roboto, Droid Sans");pref("font.name-list.monospace.ar","Noto Naskh Arabic");pref("font.name-list.serif.el","Droid Serif, Noto Serif");pref("font.name-list.sans-serif.el","Roboto, Droid Sans");pref("font.name-list.monospace.el","Droid Sans Mono");pref("font.name-list.serif.he","Droid Serif, Noto Serif");pref("font.name-list.sans-serif.he","Roboto, Droid Sans Hebrew, Droid Sans, Arial");pref("font.name-list.monospace.he","Droid Sans Mono");pref("font.name-list.serif.ja","Charis SIL Compact, Noto Serif CJK JP, Noto Serif, Droid Serif");pref("font.name-list.sans-serif.ja","Roboto, Droid Sans, MotoyaLMaru, MotoyaLCedar, Noto Sans JP, Noto Sans CJK JP, Droid Sans Japanese");pref("font.name-list.monospace.ja","MotoyaLMaru, MotoyaLCedar, Noto Sans Mono CJK JP, Droid Sans Mono");pref("font.name-list.serif.ko","Charis SIL Compact, Noto Serif CJK KR, Noto Serif, Droid Serif, HYSerif");pref("font.name-list.sans-serif.ko","Roboto, SmartGothic, NanumGothic, Noto Sans KR, Noto Sans CJK KR, DroidSansFallback, Droid Sans Fallback");pref("font.name-list.monospace.ko","Droid Sans Mono, Noto Sans Mono CJK KR");pref("font.name-list.serif.th","Charis SIL Compact, Noto Serif, Droid Serif");pref("font.name-list.sans-serif.th","Roboto, Droid Sans Thai, Droid Sans");pref("font.name-list.monospace.th","Droid Sans Mono");pref("font.name-list.serif.x-cyrillic","Charis SIL Compact, Noto Serif, Droid Serif");pref("font.name-list.sans-serif.x-cyrillic","Roboto, Droid Sans");pref("font.name-list.monospace.x-cyrillic","Droid Sans Mono");pref("font.name-list.serif.x-unicode","Charis SIL Compact, Noto Serif, Droid Serif");pref("font.name-list.sans-serif.x-unicode","Roboto, Droid Sans");pref("font.name-list.monospace.x-unicode","Droid Sans Mono");pref("font.name-list.serif.x-western","Charis SIL Compact, Noto Serif, Droid Serif");pref("font.name-list.sans-serif.x-western","Roboto, Droid Sans");pref("font.name-list.monospace.x-western","Droid Sans Mono");pref("font.name-list.serif.zh-CN","Charis SIL Compact, Noto Serif CJK SC, Noto Serif, Droid Serif, Droid Sans Fallback");pref("font.name-list.sans-serif.zh-CN","Roboto, Droid Sans, Noto Sans SC, Noto Sans CJK SC, Droid Sans Fallback");pref("font.name-list.monospace.zh-CN","Droid Sans Mono, Noto Sans Mono CJK SC, Droid Sans Fallback");pref("font.name-list.serif.zh-HK","Charis SIL Compact, Noto Serif CJK TC, Noto Serif, Droid Serif, Droid Sans Fallback");pref("font.name-list.sans-serif.zh-HK","Roboto, Droid Sans, Noto Sans TC, Noto Sans SC, Noto Sans CJK TC, Droid Sans Fallback");pref("font.name-list.monospace.zh-HK","Droid Sans Mono, Noto Sans Mono CJK TC, Droid Sans Fallback");pref("font.name-list.serif.zh-TW","Charis SIL Compact, Noto Serif CJK TC, Noto Serif, Droid Serif, Droid Sans Fallback");pref("font.name-list.sans-serif.zh-TW","Roboto, Droid Sans, Noto Sans TC, Noto Sans SC, Noto Sans CJK TC, Droid Sans Fallback");pref("font.name-list.monospace.zh-TW","Droid Sans Mono, Noto Sans Mono CJK TC, Droid Sans Fallback");pref("font.name-list.serif.x-math","Latin Modern Math, STIX Two Math, XITS Math, Cambria Math, Libertinus Math, DejaVu Math TeX Gyre, TeX Gyre Bonum Math, TeX Gyre Pagella Math, TeX Gyre Schola, TeX Gyre Termes Math, STIX Math, Asana Math, STIXGeneral, DejaVu Serif, DejaVu Sans, Charis SIL Compact");pref("font.name-list.sans-serif.x-math","Roboto");pref("font.name-list.monospace.x-math","Droid Sans Mono");pref("signon.rememberSignons",true);pref("signon.rememberSignons.visibilityToggle",true);pref("signon.autofillForms",true);pref("signon.autofillForms.http",false);pref("signon.autologin.proxy",false);pref("signon.formlessCapture.enabled",true);pref("signon.storeWhenAutocompleteOff",true);pref("signon.debug",false);pref("signon.recipes.path","chrome://passwordmgr/content/recipes.json");pref("signon.schemeUpgrades",false);pref("signon.masterPasswordReprompt.timeout_ms",900000);
pref("browser.formfill.debug",false);pref("browser.formfill.enable",true);pref("browser.formfill.expire_days",180);pref("browser.formfill.agedWeight",2);pref("browser.formfill.bucketSize",1);pref("browser.formfill.maxTimeGroupings",25);pref("browser.formfill.timeGroupingSize",604800);pref("browser.formfill.boundaryWeight",25);pref("browser.formfill.prefixWeight",5);pref("browser.zoom.full",false);pref("zoom.minPercent",30);pref("zoom.maxPercent",300);pref("toolkit.zoomManager.zoomValues",".3,.5,.67,.8,.9,1,1.1,1.2,1.33,1.5,1.7,2,2.4,3");


pref("image.animated.decode-on-demand.threshold-kb",20480);
pref("image.animated.decode-on-demand.batch-size",6);
pref("image.animated.generate-full-frames",false);
pref("image.animated.resume-from-last-displayed",true);


pref("image.cache.factor2.threshold-surfaces",4);
pref("image.cache.max-rasterized-svg-threshold-kb",92160);pref("image.cache.size",5242880);pref("image.cache.timeweight",500);pref("image.decode-immediately.enabled",false);pref("image.downscale-during-decode.enabled",true);pref("image.http.accept","*/*");

pref("image.infer-src-animation.threshold-ms",2000);
pref("image.layout_network_priority",true);

pref("image.mem.discardable",true);
pref("image.mem.animated.discardable",true);pref("image.mem.animated.use_heap",true);pref("image.mem.debug-reporting",false);
pref("image.mem.shared",true);pref("image.mem.allow_locking_in_content_processes",true);pref("image.mem.decode_bytes_at_a_time",16384);
pref("image.mem.surfacecache.min_expiration_ms",60000);
pref("image.mem.surfacecache.max_size_kb",1048576);



pref("image.mem.surfacecache.size_factor",4);




pref("image.mem.surfacecache.discard_factor",1);
pref("image.mem.volatile.min_threshold_kb",100);
pref("image.multithreaded_decoding.limit",-1);pref("image.multithreaded_decoding.idle_timeout",600000);
pref("canvas.image.cache.limit",0);
pref("gl.msaa-level",0);pref("gl.require-hardware",false);pref("gl.ignore-dx-interop2-blacklist",false);pref("gl.use-tls-is-current",0);pref("webgl.1.allow-core-profiles",false);pref("webgl.force-enabled",false);pref("webgl.disabled",false);pref("webgl.disable-angle",false);pref("webgl.disable-wgl",false);pref("webgl.min_capability_mode",false);pref("webgl.disable-extensions",false);pref("webgl.msaa-force",false);pref("webgl.prefer-16bpp",false);pref("webgl.default-no-alpha",false);pref("webgl.force-layers-readback",false);pref("webgl.force-index-validation",0);pref("webgl.lose-context-on-memory-pressure",false);pref("webgl.can-lose-context-in-foreground",true);pref("webgl.restore-context-when-visible",true);pref("webgl.max-contexts",16);pref("webgl.max-contexts-per-principal",8);pref("webgl.max-warnings-per-context",32);pref("webgl.enable-draft-extensions",false);pref("webgl.enable-privileged-extensions",false);pref("webgl.bypass-shader-validation",false);pref("webgl.disable-fail-if-major-performance-caveat",false);pref("webgl.disable-DOM-blit-uploads",false);pref("webgl.allow-fb-invalidation",false);pref("webgl.perf.max-warnings",0);pref("webgl.perf.max-acceptable-fb-status-invals",0);pref("webgl.perf.spew-frame-allocs",true);pref("webgl.enable-webgl2",true);pref("webgl.enable-debug-renderer-info",true);pref("webgl.renderer-string-override","");pref("webgl.vendor-string-override","");pref("dom.webgpu.enable",false);


pref("network.tcp.keepalive.enabled",true);
pref("network.tcp.keepalive.idle_time",600);
pref("network.tcp.keepalive.retry_interval",1);
pref("network.tcp.keepalive.probe_count",4);pref("network.tcp.tcp_fastopen_enable",false);pref("network.tcp.tcp_fastopen_consecutive_failure_limit",5);



pref("network.tcp.tcp_fastopen_http_check_for_stalls_only_if_idle_for",10);pref("network.tcp.tcp_fastopen_http_stalls_limit",3);pref("network.tcp.tcp_fastopen_http_stalls_timeout",20);pref("layers.acceleration.disabled",false);
pref("layers.bench.enabled",false);


pref("layers.acceleration.force-enabled",true);pref("layers.acceleration.draw-fps",false);
pref("layers.deaa.enabled",false);pref("layers.dump",false);pref("layers.draw-borders",false);pref("layers.draw-tile-borders",false);pref("layers.draw-bigimage-borders",false);pref("layers.child-process-shutdown",true);pref("layers.max-active",-1);

pref("layers.offmainthreadcomposition.frame-rate",-1);pref("layers.enable-tiles",false);pref("layers.enable-tiles-if-skia-pomtp",false);pref("layers.single-tile.enabled",true);pref("layers.low-precision-buffer",false);pref("layers.progressive-paint",false);pref("layers.tiles.retain-back-buffer",true);

pref("layers.tiles.adjust",true);pref("layers.tile-width",512);pref("layers.tile-height",512);pref("layers.tiles.edge-padding",true);pref("layers.offmainthreadcomposition.async-animations",true);pref("layers.offmainthreadcomposition.log-animations",false);pref("layers.bufferrotation.enabled",true);pref("layers.componentalpha.enabled",true);pref("layers.draw-mask-debug",false);pref("gfx.content.always-paint",false);pref("gfx.apitrace.enabled",false);pref("widget.window-transforms.disabled",false);pref("layers.shared-buffer-provider.enabled",true);pref("layers.force-active",false);pref("geo.enabled",true);pref("geo.wifi.xhr.timeout",60000);pref("device.sensors.enabled",true);pref("device.sensors.orientation.enabled",true);pref("device.sensors.motion.enabled",true);pref("device.sensors.proximity.enabled",false);pref("device.sensors.ambientLight.enabled",false);pref("device.storage.enabled",false);pref("browser.history.maxStateObjectSize",655360);pref("browser.meta_refresh_when_inactive.disabled",false);pref("xpinstall.whitelist.required",true);pref("xpinstall.signatures.required",false);pref("extensions.langpacks.signatures.required",false);pref("extensions.webExtensionsMinPlatformVersion","42.0a1");pref("extensions.legacy.enabled",true);pref("extensions.webextensions.keepStorageOnUninstall",false);pref("extensions.webextensions.keepUuidOnUninstall",false);pref("extensions.webextensions.identity.redirectDomain","extensions.allizom.org");pref("extensions.webextensions.restrictedDomains","accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,addons.mozilla.org,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,input.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com,testpilot.firefox.com");pref("extensions.webextensions.themes.icons.enabled",false);pref("extensions.webextensions.remote",false);

pref("extensions.webextensions.protocol.remote",true);pref("extensions.webextensions.tabhide.enabled",true);pref("extensions.webextensions.userScripts.enabled",false);pref("extensions.webextensions.background-delayed-startup",false);pref("extensions.webextensions.ExtensionStorageIDB.enabled",false);pref("extensions.webextensions.enablePerformanceCounters",true);

pref("extensions.webextensions.performanceCountersMaxAge",1000);pref("extensions.webcompat-reporter.newIssueEndpoint","https://webcompat.com/issues/new");pref("extensions.webcompat-reporter.enabled",false);pref("network.buffer.cache.count",24);pref("network.buffer.cache.size",32768);pref("dom.webnotifications.requireinteraction.count",3);pref("alerts.showFavicons",false);

pref("alerts.useSystemBackend",true);pref("full-screen-api.enabled",false);pref("full-screen-api.allow-trusted-requests-only",true);pref("full-screen-api.ignore-widgets",false);pref("full-screen-api.pointer-lock.enabled",true);
pref("full-screen-api.transition-duration.enter","200 200");pref("full-screen-api.transition-duration.leave","200 200");pref("full-screen-api.transition.timeout",1000);pref("full-screen-api.warning.timeout",3000);pref("full-screen-api.warning.delay",500);
pref("pointer-lock-api.warning.timeout",3000);pref("dom.event.handling-user-input-time-limit",1000);pref("layout.animated-image-layers.enabled",false);pref("dom.vibrator.enabled",true);pref("dom.vibrator.max_vibrate_ms",10000);pref("dom.vibrator.max_vibrate_list_len",128);pref("dom.battery.enabled",true);pref("dom.push.alwaysConnect",false);pref("dom.push.loglevel","Error");pref("dom.push.serverURL","wss://push.services.mozilla.com/");pref("dom.push.userAgentID","");
pref("dom.push.maxQuotaPerSubscription",16);
pref("dom.push.maxRecentMessageIDsPerSubscription",10);
pref("dom.push.quotaUpdateDelay",3000);
pref("dom.push.connection.enabled",true);pref("dom.push.retryBaseInterval",5000);

pref("dom.push.pingInterval",1800000);
pref("dom.push.requestTimeout",10000);pref("dom.push.http2.reset_retry_count_after_ms",60000);pref("dom.push.http2.maxRetries",2);pref("dom.push.http2.retryInterval",5000);


pref("dom.w3c_touch_events.enabled",2);
pref("dom.w3c_pointer_events.enabled",false);
pref("dom.w3c_pointer_events.implicit_capture",false);pref("dom.imagecapture.enabled",false);pref("media.ondevicechange.enabled",true);pref("media.ondevicechange.fakeDeviceChangeEvent.enabled",false);



pref("layout.css.touch_action.enabled",true);

pref("memory.ghost_window_timeout_seconds",60);pref("memory.dump_reports_on_oom",false);pref("memory.blob_report.stack_frames",0);
pref("dom.idle-observers-api.fuzz_time.disabled",true);pref("io.activity.enabled",false);

pref("io.activity.intervalMilliseconds",0);


pref("jsloader.shareGlobal",true);
pref("dom.browserElement.maxScreenshotDelayMS",2000);pref("dom.placeholder.show_on_focus",true);
pref("dom.vr.enabled",false);





pref("dom.vr.autoactivate.enabled",false);pref("dom.vr.controller_trigger_threshold","0.1");pref("dom.vr.external.enabled",false);
pref("dom.vr.external.notdetected.timeout",60000);

pref("dom.vr.external.quit.timeout",10000);



pref("dom.vr.navigation.timeout",5000);
pref("dom.vr.oculus.enabled",false);






pref("dom.vr.oculus.present.timeout",500);



pref("dom.vr.oculus.quit.timeout",10000);




pref("dom.vr.oculus.invisible.enabled",true);pref("dom.vr.osvr.enabled",false);
pref("dom.vr.openvr.enabled",false);

pref("dom.vr.controller.enumerate.interval",1000);


pref("dom.vr.display.enumerate.interval",5000);


pref("dom.vr.inactive.timeout",5000);

pref("dom.vr.poseprediction.enabled",true);


pref("dom.vr.require-gesture",true);pref("dom.vr.process.enabled",false);pref("dom.vr.puppet.enabled",false);
pref("dom.vr.puppet.submitframe",0);pref("gfx.vr.osvr.utilLibPath","");pref("gfx.vr.osvr.commonLibPath","");pref("gfx.vr.osvr.clientLibPath","");pref("gfx.vr.osvr.clientKitLibPath","");
pref("dom.vr.display.rafMaxDuration",50);pref("dom.vr.test.enabled",false);pref("dom.vr.service.enabled",true);


pref("ui.touch_activation.delay_ms",100);

pref("ui.touch_activation.duration_ms",10);
pref("memory_info_dumper.watch_fifo.enabled",false);
pref("network.captive-portal-service.minInterval",60000);pref("network.captive-portal-service.maxInterval",1500000);
pref("network.captive-portal-service.backoffFactor","5.0");pref("network.captive-portal-service.enabled",false);
pref("network.trr.mode",0);pref("network.trr.uri","https://mozilla.cloudflare-dns.com/dns-query");pref("network.trr.credentials","");
pref("network.trr.wait-for-portal",false);pref("network.trr.allow-rfc1918",false);pref("network.trr.useGET",false);
pref("network.trr.confirmationNS","example.com");
pref("network.trr.bootstrapAddress","");pref("network.trr.blacklist-duration",60);pref("network.trr.request-timeout",1500);pref("network.trr.early-AAAA",false);pref("network.trr.disable-ECS",true);pref("network.trr.max-fails",5);pref("captivedetect.canonicalURL","http://detectportal.firefox.com/success.txt");pref("captivedetect.canonicalContent","success\n");pref("captivedetect.maxWaitingTime",5000);pref("captivedetect.pollingTime",3000);pref("captivedetect.maxRetryCount",5);pref("dom.forms.inputmode",false);pref("dom.mapped_arraybuffer.enabled",true);pref("urlclassifier.malwareTable","goog-malware-proto,goog-unwanted-proto,test-harmful-simple,test-malware-simple,test-unwanted-simple");
pref("urlclassifier.phishTable","goog-phish-proto,test-phish-simple");pref("urlclassifier.downloadAllowTable","goog-downloadwhite-proto");pref("urlclassifier.downloadBlockTable","goog-badbinurl-proto");pref("urlclassifier.passwordAllowTable","goog-passwordwhite-proto");
pref("urlclassifier.trackingAnnotationTable","test-track-simple,base-track-digest256");pref("urlclassifier.trackingAnnotationWhitelistTable","test-trackwhite-simple,mozstd-trackwhite-digest256");pref("urlclassifier.trackingTable","test-track-simple,base-track-digest256");pref("urlclassifier.trackingWhitelistTable","test-trackwhite-simple,mozstd-trackwhite-digest256");pref("urlclassifier.disallow_completions","test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256,fastblock1-track-digest256,fastblock1-trackwhite-digest256,fastblock2-track-digest256,fastblock2-trackwhite-digest256,fastblock3-track-digest256");pref("urlclassifier.gethashnoise",4);pref("urlclassifier.gethash.timeout_ms",5000);pref("urlclassifier.update.response_timeout_ms",30000);pref("urlclassifier.update.timeout_ms",90000);pref("urlclassifier.alternate_error_page","blocked");pref("browser.safebrowsing.phishing.enabled",true);pref("browser.safebrowsing.malware.enabled",true);pref("browser.safebrowsing.debug",false);pref("browser.safebrowsing.allowOverride",true);pref("browser.safebrowsing.id","navclient-auto-ffox");pref("browser.safebrowsing.downloads.enabled",true);pref("browser.safebrowsing.downloads.remote.enabled",true);pref("browser.safebrowsing.downloads.remote.timeout_ms",15000);pref("browser.safebrowsing.downloads.remote.url","https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_API_KEY%");pref("browser.safebrowsing.downloads.remote.block_dangerous",true);pref("browser.safebrowsing.downloads.remote.block_dangerous_host",true);pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted",true);pref("browser.safebrowsing.downloads.remote.block_uncommon",true);pref("browser.safebrowsing.passwords.enabled",false);pref("browser.safebrowsing.provider.google.pver","2.2");pref("browser.safebrowsing.provider.google.lists","goog-badbinurl-shavar,goog-downloadwhite-digest256,goog-phish-shavar,googpub-phish-shavar,goog-malware-shavar,goog-unwanted-shavar");pref("browser.safebrowsing.provider.google.updateURL","https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2&key=%GOOGLE_API_KEY%");pref("browser.safebrowsing.provider.google.gethashURL","https://safebrowsing.google.com/safebrowsing/gethash?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2");pref("browser.safebrowsing.provider.google.reportURL","https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&hl=%LOCALE%&site=");pref("browser.safebrowsing.provider.google.reportPhishMistakeURL","https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url=");pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL","https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url=");pref("browser.safebrowsing.provider.google.advisoryURL","https://developers.google.com/safe-browsing/v4/advisory");pref("browser.safebrowsing.provider.google.advisoryName","Google Safe Browsing");pref("browser.safebrowsing.provider.google4.pver","4");pref("browser.safebrowsing.provider.google4.lists","goog-badbinurl-proto,goog-downloadwhite-proto,goog-phish-proto,googpub-phish-proto,goog-malware-proto,goog-unwanted-proto,goog-harmful-proto,goog-passwordwhite-proto");pref("browser.safebrowsing.provider.google4.updateURL","https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST");pref("browser.safebrowsing.provider.google4.gethashURL","https://safebrowsing.googleapis.com/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST");pref("browser.safebrowsing.provider.google4.reportURL","https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&hl=%LOCALE%&site=");pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL","https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url=");pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL","https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url=");pref("browser.safebrowsing.provider.google4.advisoryURL","https://developers.google.com/safe-browsing/v4/advisory");pref("browser.safebrowsing.provider.google4.advisoryName","Google Safe Browsing");pref("browser.safebrowsing.provider.google4.dataSharingURL","https://safebrowsing.googleapis.com/v4/threatHits?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST");pref("browser.safebrowsing.provider.google4.dataSharing.enabled",false);pref("browser.safebrowsing.reportPhishURL","https://%LOCALE%.phish-report.mozilla.com/?hl=%LOCALE%&url=");pref("browser.safebrowsing.provider.mozilla.pver","2.2");pref("browser.safebrowsing.provider.mozilla.lists","base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,fastblock1-track-digest256,fastblock1-trackwhite-digest256,fastblock2-track-digest256,fastblock2-trackwhite-digest256,fastblock3-track-digest256");pref("browser.safebrowsing.provider.mozilla.updateURL","https://shavar.services.mozilla.com/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2");pref("browser.safebrowsing.provider.mozilla.gethashURL","https://shavar.services.mozilla.com/gethash?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2");pref("browser.safebrowsing.provider.mozilla.nextupdatetime","1");
pref("browser.safebrowsing.provider.mozilla.lists.base","moz-std");pref("browser.safebrowsing.provider.mozilla.lists.content","moz-full");pref("browser.safebrowsing.blockedURIs.enabled",true);pref("urlclassifier.blockedTable","test-block-simple,mozplugin-block-digest256");pref("urlclassifier.flashAllowTable","allow-flashallow-digest256");pref("urlclassifier.flashAllowExceptTable","except-flashallow-digest256");pref("urlclassifier.flashTable","block-flash-digest256");pref("urlclassifier.flashExceptTable","except-flash-digest256");pref("urlclassifier.flashSubDocTable","block-flashsubdoc-digest256");pref("urlclassifier.flashSubDocExceptTable","except-flashsubdoc-digest256");pref("urlclassifier.flashInfobarTable","except-flashinfobar-digest256");pref("plugins.http_https_only",true);pref("plugins.flashBlock.enabled",false);pref("snav.enabled",false);pref("dom.wakelock.enabled",false);pref("identity.fxaccounts.auth.uri","https://api.accounts.firefox.com/v1");pref("beacon.enabled",true);pref("dom.udpsocket.enabled",false);pref("dom.presentation.enabled",false);pref("dom.presentation.controller.enabled",false);pref("dom.presentation.receiver.enabled",false);pref("dom.presentation.tcp_server.debug",false);pref("dom.presentation.discovery.enabled",false);pref("dom.presentation.discovery.timeout_ms",10000);pref("dom.presentation.discoverable",false);pref("dom.presentation.discoverable.encrypted",true);pref("dom.presentation.discoverable.retry_ms",5000);pref("dom.presentation.session_transport.data_channel.enable",false);pref("dom.meta-viewport.enabled",false);pref("dom.visualviewport.enabled",false);pref("browser.search.log",false);pref("browser.search.update",true);pref("browser.search.update.log",false);pref("browser.search.update.interval",21600);pref("browser.search.suggest.enabled",true);pref("browser.search.reset.enabled",false);pref("browser.search.reset.whitelist","");pref("browser.search.geoSpecificDefaults",false);pref("browser.search.geoip.url","https://location.services.mozilla.com/v1/country?key=%MOZILLA_API_KEY%");pref("browser.search.geoip.timeout",3000);
pref("media.gmp-manager.url","https://aus5.mozilla.org/update/3/GMP/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml");

pref("media.gmp-manager.cert.requireBuiltIn",true);










pref("media.gmp-manager.cert.checkAttributes",true);pref("media.gmp-manager.certs.1.issuerName","CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US");pref("media.gmp-manager.certs.1.commonName","aus5.mozilla.org");pref("media.gmp-manager.certs.2.issuerName","CN=thawte SSL CA - G2,O=\"thawte, Inc.\",C=US");pref("media.gmp-manager.certs.2.commonName","aus5.mozilla.org");pref("reader.parse-on-load.enabled",true);
pref("reader.parse-node-limit",3000);
pref("reader.parse-on-load.force-enabled",false);
pref("reader.errors.includeURLs",false);pref("reader.font_size",5);pref("reader.content_width",3);pref("reader.line_height",4);

pref("reader.color_scheme","light");pref("reader.color_scheme.values","[\"light\",\"dark\",\"sepia\"]");pref("reader.font_type","sans-serif");pref("reader.has_used_toolbar",false);pref("reader.toolbar.vertical",true);pref("narrate.enabled",false);pref("narrate.test",false);pref("narrate.rate",0);pref("narrate.voice"," { \"default\": \"automatic\" }");pref("narrate.filter-voices",true);pref("dom.dialog_element.enabled",false);


pref("dom.compositionevent.allow_control_characters",false);pref("memory.report_concurrency",10);pref("media.useAudioChannelAPI",false);pref("toolkit.pageThumbs.screenSizeDivisor",7);pref("toolkit.pageThumbs.minWidth",0);pref("toolkit.pageThumbs.minHeight",0);pref("webextensions.tests",false);pref("webextensions.webRequest.requestBodyMaxRawBytes",16777216);pref("webextensions.storage.sync.enabled",true);pref("webextensions.storage.sync.serverURL","https://webextensions.settings.services.mozilla.com/v1");pref("dom.input.fallbackUploadDir","");pref("plugins.rewrite_youtube_embeds",true);pref("dom.mozBrowserFramesEnabled",false);pref("layout.css.color-adjust.enabled",true);pref("dom.audiochannel.audioCompeting",false);pref("dom.audiochannel.audioCompeting.allAgents",false);pref("media.default_volume","1.0");pref("media.seekToNextFrame.enabled",true);pref("dom.maxHardwareConcurrency",16);pref("media.block-autoplay-until-in-foreground",true);


pref("security.data_uri.unique_opaque_origin",true);
pref("security.data_uri.block_toplevel_data_uri_navigations",true);pref("security.block_ftp_subresources",true);pref("dom.storageManager.prompt.testing",false);pref("dom.storageManager.prompt.testing.allow",false);pref("browser.storageManager.pressureNotification.minIntervalMS",1200000);pref("browser.storageManager.pressureNotification.usageThresholdGB",5);


pref("prompts.authentication_dialog_abuse_limit",3);pref("dom.IntersectionObserver.enabled",true);pref("dom.moduleScripts.enabled",true);
pref("dom.timeout.max_consecutive_callbacks_ms",4);pref("dom.payments.loglevel","Warn");pref("dom.payments.defaults.saveCreditCard",false);pref("dom.payments.defaults.saveAddress",true);pref("dom.xhr.lowercase_header.enabled",true);



pref("dom.clients.openwindow_favors_same_process",true);pref("toolkit.aboutPerformance.showInternals",false);
pref("toolkit.crashreporter.include_context_heap",false);pref("dom.noopener.newprocess.enabled",true);pref("layers.omtp.enabled",false);pref("layers.omtp.paint-workers",-1);pref("layers.omtp.release-capture-on-main-thread",false);pref("layers.omtp.dump-capture",false);

pref("general.document_open_conversion_depth_limit",20);pref("dom.event.default_to_passive_touch_listeners",true);
pref("browser.fastblock.timeout",5000);
pref("browser.fastblock.limit",20000);pref("dom.events.asyncClipboard",true);pref("dom.events.asyncClipboard.dataTransfer",false);pref("dom.events.testing.asyncClipboard",false);pref("dom.datatransfer.mozAtAPIs",true);
pref("devtools.enabled",true);pref("devtools.errorconsole.deprecation_warnings",true);pref("devtools.debugger.prompt-connection",true,sticky);pref("devtools.chrome.enabled",false,sticky);pref("devtools.debugger.remote-enabled",false,sticky);pref("devtools.debugger.log",false);pref("devtools.debugger.log.verbose",false);pref("devtools.debugger.remote-port",6000);pref("devtools.debugger.remote-websocket",false);pref("devtools.debugger.force-local",true);pref("devtools.debugger.forbid-certified-apps",true);

pref("devtools.netmonitor.responseBodyLimit",1048576);pref("devtools.defaultColorUnit","authored");pref("devtools.dump.emit",false);pref("devtools.discovery.log",false);pref("devtools.remote.wifi.scan",true);pref("devtools.remote.tls-handshake-timeout",10000);pref("devtools.remote.adb.extensionID","adb@mozilla.org");pref("devtools.remote.adb.extensionURL","https://ftp.mozilla.org/pub/mozilla.org/labs/devtools/adb-extension/#OS#/adb-extension-latest-#OS#.xpi");pref("devtools.devices.url","https://code.cdn.mozilla.net/devices/devices.json");pref("datareporting.policy.dataSubmissionEnabled",true);pref("datareporting.policy.dataSubmissionPolicyNotifiedTime","0");pref("datareporting.policy.dataSubmissionPolicyAcceptedVersion",0);pref("datareporting.policy.dataSubmissionPolicyBypassNotification",false);pref("datareporting.policy.currentPolicyVersion",2);pref("datareporting.policy.minimumPolicyVersion",1);pref("datareporting.policy.minimumPolicyVersion.channel-beta",2);pref("datareporting.policy.firstRunURL","https://www.mozilla.org/privacy/firefox/");