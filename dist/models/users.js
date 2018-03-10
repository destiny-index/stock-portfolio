'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getSingletonUser = getSingletonUser;
exports.replaceSingletonUser = replaceSingletonUser;
exports.addTransactionToSingletonUser = addTransactionToSingletonUser;

var _users = require('../../lib/users');

/* The app is for personal use so only create a singleton user.
 * We create the user in memory because a DB is not required. */
let user = (0, _users.makeUser)();

function getSingletonUser() {
  return user;
}

function replaceSingletonUser(updatedUser) {
  user = updatedUser;
  return user;
}

function addTransactionToSingletonUser(transaction) {
  user = _extends({}, user, {
    transactions: [...user.transactions, transaction]
  });
  return user;
}
//# sourceMappingURL=users.js.map