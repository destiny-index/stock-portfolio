'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = undefined;

var _cashAmounts = require('../../lib/cashAmounts');

var _transactions = require('../helpers/transactions');

const create = exports.create = (0, _transactions.createCashAmountTransactionWith)(({ amount }) => (0, _cashAmounts.makeDeposit)(amount));
//# sourceMappingURL=deposits.js.map