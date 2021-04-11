"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require("apollo-server-express");

require("./utils/db");

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

_dotenv2.default.config();

async function startApolloServer(port, callback) {
  const app = (0, _express2.default)();
  const server = new _apolloServerExpress.ApolloServer({
    schema: _schema2.default,
    playground: process.env.NODE_ENV === 'development'
  });
  await server.start();
  server.applyMiddleware({
    app
  });
  app.use((req, res) => {
    res.status(200);
    res.send('This is a graphQL Backend!');
    res.end();
  });
  await new Promise(resolve => app.listen({
    port: 4000
  }, resolve)); // console.log(
  //     `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
  // );

  return {
    server,
    app
  };
}

try {
  startApolloServer();
} catch (error) {
  console.log('An Error Occured!', error);
}