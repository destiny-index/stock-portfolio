'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = undefined;

var _stockOrders = require('../../lib/stockOrders');

var _transactions = require('../helpers/transactions');

const create = exports.create = (0, _transactions.createStockOrderTransactionWith)(_stockOrders.makeBuyOrder);
//# sourceMappingURL=buyOrders.js.map