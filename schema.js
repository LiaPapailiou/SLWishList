const { gql } = require('apollo-server');

const typeDefs = gql`

enum ItemType {
  HEAD
  NECK
  CLOAK
  CHEST
  GLOVES
  BRACERS
  LEGS
  BOOTS
  RING_ONE
  RING_TWO
  TRINKET_ONE
  TRINKET_TWO
}

enum FactionType {
  HORDE
  ALLIANCE
}
enum ClassType {
  WARRIOR
  PALADIN
  HUNTER
  ROGUE
  PRIEST
  SHAMAN
  MAGE
  WARLOCK
  MONK
  DRUID
  DEMON
  HUNTER
  DEATH KNIGHT
}

type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  characters: [Character]!
}

type Character {
  id: ID!
  name: String!
  level: Int
  class: ClassType
  image: String
  faction: FactionType
  itemList: [Item]
}

type Item {
  id: ID!
  name: String!
  type: ItemType!
  bis: Boolean
}

input NewCharInput {
  id: ID
  name: String!
  level: Int
  class: String
  image: String
}

input NewUserInput {
  username: String!
  email: String!
  password: String!
}

input UpdateUserInput {
  email: String
  password: String
}

input UpdateCharInput {
  name: String!
}

input NewItemInput {
  name: String!
  type: ItemType!
  bis: Boolean
}

input UpdateItemInput {
  name: String
  type: ItemType
  bis: Boolean
}

type Query {
  user(username:String!): User!
  character(name: String!): Character!
  item(name: String!): Item!
}

type Mutation {
addUser(input: NewUserInput!): User!
updateUser(input: UpdateUserInput!): User!
deleteUser(id: ID!): User
addCharacter(input: NewCharInput!): Character!
updateCharacter(input: UpdateCharInput!): Character!
deleteCharacter(id: ID!): Character
addItem(input: NewItemInput!): Item!
updateItem(input: UpdateItemInput!): Item!
deleteItem(id: ID!): Item
}
`;

module.exports = typeDefs;