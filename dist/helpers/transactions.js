'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCashAmountTransactionWith = createCashAmountTransactionWith;
exports.createStockOrderTransactionWith = createStockOrderTransactionWith;

var _users = require('../models/users');

var User = _interopRequireWildcard(_users);

var _stockOrders = require('../../lib/stockOrders');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function createCashAmountTransactionWith(transactionCreator) {
  return function (req, res) {
    const newTransaction = transactionCreator(req.body);
    updateAndRespondWithUpdate(newTransaction, res);
  };
}

function createStockOrderTransactionWith(asyncTransactionCreator) {
  return (() => {
    var _ref = _asyncToGenerator(function* (req, res) {
      const { quantity, equitySymbol } = req.body;
      try {
        const newTransaction = yield asyncTransactionCreator(quantity, _stockOrders.fetchLivePrice, equitySymbol);
        updateAndRespondWithUpdate((yield newTransaction), res);
      } catch (err) {
        res.status(500).end(err.message);
      }
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })();
}

function updateAndRespondWithUpdate(newTransaction, res) {
  const updatedUser = User.addTransactionToSingletonUser(newTransaction);
  res.status(201).end(JSON.stringify(updatedUser.transactions));
}
//# sourceMappingURL=transactions.js.map