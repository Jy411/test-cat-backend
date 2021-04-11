"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatQuery = undefined;

var _cat = require("../models/cat");

const CatQuery = {
  catById: _cat.CatTC.getResolver('findById'),
  catByIds: _cat.CatTC.getResolver('findByIds'),
  catMany: _cat.CatTC.getResolver('findMany'),
  catCount: _cat.CatTC.getResolver('count'),
  catConnection: _cat.CatTC.getResolver('connection')
};
exports.CatQuery = CatQuery;