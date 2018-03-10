'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = read;

var _users = require('../models/users');

var User = _interopRequireWildcard(_users);

var _users2 = require('../../lib/users');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function read(req, res) {
  const user = User.getSingletonUser();
  const shareHoldings = (0, _users2.getCurrentShareHoldings)(user);

  res.end(JSON.stringify(user));
}
//# sourceMappingURL=users.js.map