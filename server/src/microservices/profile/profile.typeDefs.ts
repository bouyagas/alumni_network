import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    profile: Profile!
    profiles: [Profile]!
    education: Education
    experience: Experience
    social: Social
  }

  type Mutation {
    updateAndCreateProfile(input: UpdateAndCreateProfileInput!): Profile!
    updateAndCreateEducation(input: UpdateAndCreateEducationInput!): Education!
    updateAndCreateExperience(input: UpdateAndCreateExperienceInput): Experience!
    updateAndCreateSocial(input: UpdateAndCreateSocialInput): Social!
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
    youtube: String
    twitter: String
    facebook: String
    linkedin: String
    instagram: String
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
    experience: [Experience!]!
    education: [Education!]!
    social: [Social!]!
  }

  input UpdateAndCreateEducationInput {
    school: String!
    degree: String!
    fieldofstudy: String!
    from: String!
    to: String
    current: Boolean
    description: String!
  }

  input UpdateAndCreateExperienceInput {
    title: String!
    company: String!
    location: String
    from: String!
    to: String
    current: Boolean
    description: String
  }

  input UpdateAndCreateSocialInput {
    youtube: String
    twitter: String
    facebook: String
    linkedin: String
    instagram: String
  }

  input UpdateAndCreateProfileInput {
    company: String!
    website: String!
    location: String!
    status: String!
    skills: [String]!
    bio: String!
    githubusername: String!
  }
`;
