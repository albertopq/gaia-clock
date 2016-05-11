requirejs.config({
  // waitSeconds is set to the default here; the build step rewrites
  // it to 0 in build/require_config.jslike so that we never timeout
  // waiting for modules in production. This is important when the
  // device is under super-low-memory stress, as it may take a while
  // for the device to get around to loading things like Clock's alarm
  // ringing screen, and we absolutely do not want that to time out.
  waitSeconds: 7,
  paths: {
    shared: '../bower_components'
  },
  shim: {
    'shared/template/index': {
      exports: 'Template'
    },
    'shared/gesture_detector/index': {
      exports: 'GestureDetector'
    },
    'shared/localforage/dist/localforage': {
      exports: 'asyncStorage'
    }
  }
});
