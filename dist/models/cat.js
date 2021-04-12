"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatTC = exports.Cat = exports.CatSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseTimestamp = require("mongoose-timestamp");

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CatSchema = exports.CatSchema = new _mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  description: String,
  image_url: String,
  background_color: String,
  owner: Object
}, {
  collection: 'cats'
});
CatSchema.plugin(_mongooseTimestamp2.default);
CatSchema.index({
  createdAt: 1,
  updatedAt: 1
});

const Cat = exports.Cat = _mongoose2.default.model('Cat', CatSchema);

const CatTC = exports.CatTC = (0, _graphqlComposeMongoose.composeWithMongoose)(Cat);