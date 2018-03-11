'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let read = exports.read = (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    const user = User.getSingletonUser();
    const shareHoldings = (0, _users2.getCurrentShareHoldings)(user);

    const shareHoldingsValue = yield (0, _transactions.getLiveValueOfShareHoldings)(shareHoldings);

    res.end(JSON.stringify(_extends({}, user, { shareHoldingsValue })));
  });

  return function read(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

var _users = require('../models/users');

var User = _interopRequireWildcard(_users);

var _users2 = require('../../lib/users');

var _transactions = require('../../lib/transactions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=users.js.map