import { Schema, model } from 'mongoose';

const itemSchema = Schema ({
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
  },
}, {
  versionKey: false,
});

export default model ('Item', itemSchema, 'items');