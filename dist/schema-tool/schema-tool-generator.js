"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _getObjDeepProp=require("../utils/get-obj-deep-prop"),_getObjDeepProp2=_interopRequireDefault(_getObjDeepProp);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var schemaToolGenerator=function(a,b){var c=a.__schema__,d=c.job,e=c.separator,f=void 0===e?" ":e,g=c.values,h=void 0===g?[]:g;if(h=h.map(function(a){return(0,_getObjDeepProp2.default)(a)(b)}),"join"===d)return h.join(f);if("custom"===d){var i=c.custom;if("function"==typeof i)return i.apply(void 0,h)}};exports.default=schemaToolGenerator;