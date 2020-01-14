"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const federation_1 = require("@apollo/federation");
const apollo_server_1 = require("apollo-server");
const user_resolvers_1 = require("./user.resolvers");
const user_typeDefs_1 = require("./user.typeDefs");
const server = new apollo_server_1.ApolloServer({
    schema: federation_1.buildFederatedSchema([
        {
            // @ts-ignore
            resolver: user_resolvers_1.resolver,
            typeDefs: user_typeDefs_1.typeDefs,
        },
    ]),
});
server.listen({ port: 7001 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map