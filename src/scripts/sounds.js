'use strict';

var Sounds = function () {
  var context = window.AudioContext && new window.AudioContext();

  var soundList = {
    playing: '/sounds/playing.mp3',
    win: '/sounds/win.mp3',
    lever: '/sounds/lever.mp3',
    reelstop: '/sounds/reel-stop.mp3',
  };

  function load(name) {
    var request = new XMLHttpRequest();
    request.open('GET', document.location.origin + soundList[name], true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      context.decodeAudioData(request.response, function (buffer) {
        soundList[name] = buffer;
      });
    };

    request.send();
  }

  function play(buffer, duration, delay) {
    if (buffer) {
      var source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      source.start(delay || 0, 0, duration || buffer.duration);
    }                          
  }

  Object.keys(soundList).map(load);

  return {
    play: function (name, duration, delay) {
      play(soundList[name], duration, delay);
    }  
  };
};

module.exports = Sounds();
