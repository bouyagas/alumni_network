import { gql } from 'apollo-server';

export const typeDefs = gql`
  extend type Query {
    profile: Profile!
    profiles: [Profile!]!
  }

  extend type Mutation {
    newProfile(input: NewProfileInput!): Profile!
    updateProfile(input: UpdateProfileInput!): Profile!
    removeProfile(id: ID!): Profile!
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    username: String! @external
    profile: Profile!
  }
  scalar Date

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
    youtube: String
    twitter: String
    facebook: String
    linkedin: String
    instagram: String
  }

  type Profile @key(fields: "id") {
    id: ID!
    user: User! @provides(fields: "username")
    company: String!
    website: String!
    location: String!
    status: String!
    skills: [String]!
    bio: String!
    githubusername: String!
    experience: [Experience!]!
    education: [Education!]!
    social: [Social!]!
  }

  input EducationInput {
    school: String!
    degree: String!
    fieldofstudy: String!
    from: String!
    to: String!
    current: Boolean!
    description: String!
  }

  input ExperienceInput {
    title: String!
    company: String!
    location: String!
    from: String!
    to: String!
    current: String!
    description: String!
  }

  input SocialInput {
    youtube: String
    twitter: String
    facebook: String
    linkedin: String
    instagram: String
  }

  input NewProfileInput {
    company: String!
    website: String!
    location: String!
    status: String!
    skills: [String]!
    bio: String!
    githubusername: String!
    experience: [EducationInput!]!
    education: [EducationInput!]!
    social: [SocialInput!]!
  }

  input UpdateProfileInput {
    company: String!
    website: String!
    location: String!
    status: String!
    skills: [String]!
    bio: String!
    githubusername: String!
    experience: [EducationInput!]!
    education: [EducationInput!]!
    social: [SocialInput!]!
  }
`;
