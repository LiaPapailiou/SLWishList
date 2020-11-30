const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = requore('./resolvers');
const { User, Characters, ItemList, ItemWishlist } = require('./models');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    User,
    Characters,
    ItemList,
    ItemWishlist,
  });
});


server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});