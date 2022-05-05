const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    teachers: [Teacher!]
    subjects: [Subject!]
  }
  type Teacher {
    id: ID!
    name: String!
    age: Int!
    sex: String!
    email: String!
    subject: [Subject]
  }
  type Subject {
    id: ID
    name: String
    teacherId: String
    teacher: [Teacher]
  }
`;
module.exports = typeDefs;
