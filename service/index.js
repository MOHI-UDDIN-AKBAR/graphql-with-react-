const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./Schema.js");
const { Query } = require("./resolver/Query.js");
const { Teacher } = require("./resolver/Teacher.js");
const { Subject } = require("./resolver/Subject.js");

const resolvers = {
  Query,
  Teacher,
  Subject,
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen().then(({ url }) => {
  console.log("server is listening to port " + url);
});
