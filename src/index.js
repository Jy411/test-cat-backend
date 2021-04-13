import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import './utils/db';
import schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

async function startApolloServer(port, callback) {
    const app = express();
    const server = new ApolloServer({
        schema,
        playground: true,
    });
    await server.start();

    server.applyMiddleware({ app });

    app.use((req, res) => {
        res.status(200);
        res.send('This is a graphQL Backend!');
        res.end();
    });

    await new Promise((resolve) => app.listen({ port: process.env.PORT }, resolve));

    return { server, app };
}

try {
    startApolloServer();
} catch (error) {
    console.log('An Error Occured!', error);
}
