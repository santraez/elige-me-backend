"use strict";

var _server = _interopRequireDefault(require("./config/server"));
var _database = _interopRequireDefault(require("./config/database"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _database["default"])();
_dotenv["default"].config();
var PORT = process.env.PORT || 4000;
_server["default"].listen(PORT, function () {
  return console.log('SERVER LISTENING ON PORT', PORT);
});