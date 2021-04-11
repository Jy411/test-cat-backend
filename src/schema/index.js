import { SchemaComposer } from 'graphql-compose';

const schemaComposer = new SchemaComposer();

import { CatQuery } from './cat';

schemaComposer.Query.addFields({
    ...CatQuery,
});

schemaComposer.Mutation.addFields({
    // ...CatMutation,
});

export default schemaComposer.buildSchema();
