'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('./controllers/users');

var users = _interopRequireWildcard(_users);

var _deposits = require('./controllers/deposits');

var deposits = _interopRequireWildcard(_deposits);

var _withdrawals = require('./controllers/withdrawals');

var withdrawals = _interopRequireWildcard(_withdrawals);

var _buyOrders = require('./controllers/buyOrders');

var buyOrders = _interopRequireWildcard(_buyOrders);

var _sellOrders = require('./controllers/sellOrders');

var sellOrders = _interopRequireWildcard(_sellOrders);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use(_express2.default.json());
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../public')));
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));

app.get('/api/users', users.read);
app.post('/api/deposits', deposits.create);
app.post('/api/withdrawals', withdrawals.create);
app.post('/api/buyOrders', buyOrders.create);
app.post('/api/sellOrders', sellOrders.create);

app.listen(process.env.PORT || 3000);
//# sourceMappingURL=index.js.map