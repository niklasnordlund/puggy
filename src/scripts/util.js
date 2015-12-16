'use strict';

var Util = {
  random: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  addClass: function (element, className) {
    if (element) {
      element.className += (element.className.length > 0 ? ' ' : '') + className;
    }
  },

  removeClass: function (element, className) {
    if (element) {
      var regEx = new RegExp("(^|\\s)" + className + "(\\s|$)");
      element.className = element.className.replace(regEx, ' ').replace(/^\s+/, '').replace(/\s+$/, '');
    }
  },
};

module.exports = Util;
