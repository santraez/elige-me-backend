"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var itemSchema = (0, _mongoose.Schema)({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  values: {
    type: Object,
    required: true
  },
  result: {
    type: Array,
    required: true
  },
  date: {
    type: String
  }
}, {
  versionKey: false
});
var _default = (0, _mongoose.model)('Item', itemSchema, 'items');
exports["default"] = _default;