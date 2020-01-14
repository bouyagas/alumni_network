"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const federation_1 = require("@apollo/federation");
const apollo_server_1 = require("apollo-server");
const profile_resolvers_1 = require("./profile.resolvers");
const profile_typeDefs_1 = require("./profile.typeDefs");
const server = new apollo_server_1.ApolloServer({
    schema: federation_1.buildFederatedSchema([
        {
            // @ts-ignore
            resolver: profile_resolvers_1.resolver,
            typeDefs: profile_typeDefs_1.typeDefs,
        },
    ]),
});
server.listen({ port: 7003 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map