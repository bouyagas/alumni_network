import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    profile: Profile!
    profiles: [Profile]!
    education: [Education]!
    experience: [Experience]!
  }

  type Mutation {
    updateAndCreateProfile(input: UpdateAndCreateProfileInput!): Profile!
    createEducation(input: CreateEducationInput!): Education!
    createExperience(input: CreateExperienceInput): Experience!
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    username: String! @external
    avatar: String @external
    profiles: [Profile]!
  }

  scalar Date

  enum Status {
    Junior_Developer
    Senior_Developer
    Student
    Instructor
    Manager
    Other
  }

  type Education {
    school: String!
    degree: String!
    fieldofstudy: String!
    from: String!
    to: String!
    current: Boolean!
    description: String!
  }

  type Experience {
    title: String!
    company: String!
    location: String!
    from: Date!
    to: Date!
    current: String!
    description: String!
  }

  type Social {
    instagram: String
    facebook: String
    linkedin: String
    twitter: String
    youtube: String
  }

  type Profile @key(fields: "id") {
    id: ID!
    user: User! @provides(fields: "username")
    company: String
    website: String
    location: String
    status: Status!
    skills: [String!]!
    bio: String
    githubusername: String
    experience: [Experience]!
    education: [Education]!
    social: [Social]!
  }

  input CreateEducationInput {
    school: String!
    degree: String!
    fieldofstudy: String!
    from: String!
    to: String
    current: Boolean
    description: String!
  }

  input CreateExperienceInput {
    title: String!
    company: String!
    location: String
    from: String!
    to: String
    current: Boolean
    description: String
  }

  input UpdateAndCreateSocialInput {
    instagram: String
    facebook: String
    linkedin: String
    twitter: String
    youtube: String
  }

  input UpdateAndCreateProfileInput {
    company: String!
    website: String!
    location: String!
    status: String!
    skills: [String]!
    bio: String!
    githubusername: String!
    social: UpdateAndCreateSocialInput
  }
`;
