require('../datepicker/index-nocss.js');
require('../position/index-nocss.js');
require('../../template/datepickerPopup/popup.html.js');

var MODULE_NAME = 'ui.bootstrap.module.datepickerPopup';

angular.module(MODULE_NAME, ['ui.bootstrap.datepickerPopup', 'uib/template/datepickerPopup/popup.html']);

module.exports = MODULE_NAME;