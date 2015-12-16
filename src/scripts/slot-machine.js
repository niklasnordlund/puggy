/* global $ */
'use strict';

var util = require('./util');
var Reel = require('./reel');
var Sounds = require('./sounds');

var SlotMachine = function () {
  
  var STATE_IDLE    = 'idle';
  var STATE_PLAYING = 'playing';

  var state = STATE_IDLE;
  var reels = [];

  $('.reel').each(function (node) {
    reels.push(Reel(node));
  });

  function play () {
    state = STATE_PLAYING;
    setMessage('');

    reels.forEach(function (reel) {
      reel.spin();
    });

    Sounds.play('playing', 2.5);

    var reelsStopped = reels.map(function (reel, index) {
      return reel.stop(index + 1);
    });

    Promise.all(reelsStopped).then(gameOver);
  }

  function gameOver () {
    state = STATE_IDLE;
    setMessage(isWin() ? 'You won!' : 'Try again ...');
    if (isWin()) {
      Sounds.play('win');
    }
  }

  function isWin () {
    return !!reels.reduce(function (firstPosition, current) {
      return firstPosition === current.position() ? firstPosition : false;
    }, reels[0].position());
  }

  function setMessage (message) {
    $('.message')[0].innerHTML = message;
  }

  return {
    play: function () {
      if (state !== STATE_PLAYING) {
        play();
      }
    }
  };
}();

module.exports = SlotMachine;
