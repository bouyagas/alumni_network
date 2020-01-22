import { gql } from 'apollo-server';

export const profileTypeDefs = gql`
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

  type Profile {
    id: ID!
    user: User
    company: String
    website: String
    location: String
    status: Status!
    skills: [String!]!
    bio: String
    githubusername: String
    experience: [Experience]!
    education: [Education]!
    social: Social!
  }

  input CreateEducationInput {
    school: String!
    degree: String!
    fieldofstudy: String!
    from: Date!
    to: Date
    current: Boolean
    description: String!
  }

  input CreateExperienceInput {
    title: String!
    company: String!
    location: String
    from: Date!
    to: Date
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

  extend type Query {
    profile: Profile!
    profiles: [Profile]!
  }

  extend type Mutation {
    updateAndCreateProfile(input: UpdateAndCreateProfileInput!): Profile!
    createEducation(input: CreateEducationInput!): Education!
    createExperience(input: CreateExperienceInput): Experience!
  }
`;
