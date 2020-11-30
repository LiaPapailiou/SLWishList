const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const User = require('./models/User');
const Characters = require('./models/Characters');
const Items = require('./models/Items');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    User,
    Characters,
    Items,
  })
});


server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});