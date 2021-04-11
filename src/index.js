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
        playground: process.env.NODE_ENV === 'development',
    });
    await server.start();

    server.applyMiddleware({ app });

    app.use((req, res) => {
        res.status(200);
        res.send('This is a graphQL Backend!');
        res.end();
    });

    await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
    // console.log(
    //     `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    // );
    return { server, app };
}

try {
    startApolloServer();
} catch (error) {
    console.log('An Error Occured!', error);
}
