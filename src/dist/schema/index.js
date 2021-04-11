"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlCompose = require("graphql-compose");

var _cat = require("./cat");

const schemaComposer = new _graphqlCompose.SchemaComposer();
schemaComposer.Query.addFields({ ..._cat.CatQuery
});
schemaComposer.Mutation.addFields({// ...CatMutation,
});
exports.default = schemaComposer.buildSchema();