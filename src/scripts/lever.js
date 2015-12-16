/* global io */
'use strict';

(function Lever() {

  var STATE_UP     = 'up';
  var STATE_PULLED = 'pulled';

  var state;

  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function (event) {
      var tilt = event.beta;

      if ((tilt < 60 || tilt > 120) && state === STATE_UP) {
        state = STATE_PULLED;
        io().emit('lever-pulled');
      }
      
      if (tilt >= 70 && tilt <= 90 && state !== STATE_UP) {
        state = STATE_UP;
      }
    });
  }

})();

/*
 NOTE: There's no fallback if device orientation is not supported. Could easily fallback
 to using a button, or emitting socket event to display button on the slot machine.

 Also, the device orientation detect for tilt, is simplest possible. It just detects any
 tilt from a (somewhat) upright position. So tilting forward, backward, left or right all
 works.
*/