require('./vendor/ki');
require('es6-promise').polyfill();

var SlotMachine = require('./slot-machine');

io().on('lever-pulled', SlotMachine.play);

$('.slot-machine').on('click', SlotMachine.play);