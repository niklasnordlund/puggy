'use strict';

var util = require('./util');
var Sounds = require('./sounds');

var Reel = function (node) {
  var position = null;
  var positionMap = {
    1: 80,
    2: 260,
    3: 440,
  };

  return {
    spin: function () {
      util.addClass(node, 'spin');
    },

    stop: function (delay) {
      return new Promise(function (resolve) {
        window.setTimeout(function () {
          position = util.random(1, 3);
          util.removeClass(node, 'spin');
          node.style.transform = 'translate3d(0, -'+ positionMap[position] +'px, 0)';
          Sounds.play('reelstop');
          resolve();
        }, delay * 750);
      });
    },

    position: function () {
      return position;
    }
  };
};

module.exports = Reel;
