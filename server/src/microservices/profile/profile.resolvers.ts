import { AuthenticationError } from 'apollo-server';
import { Education } from './profile.model';
import { Experience } from './profile.model';
import { Social } from './profile.model';
import { Profile } from './profile.model';

export const resolver = {
  Query: {
    profile: async (_: any, __: any, ctx: any): Promise<any> => {
      try {
        const profile: any = await Profile.findOne({
          user: ctx.user.id,
        }).populate('user', ['username', 'avatar']);
        if (!profile) {
          throw new AuthenticationError('There is no profile for this user');
        }
        return profile
          .exec()
          .lean()
          .toObject();
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    profiles: async (_: any, __: any, ___: any): Promise<any> => {
      try {
        const profile: any = await Profile.findOne({}).populate('user', ['username', 'avatar']);
        return profile
          .exec()
          .lean()
          .toObject();
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    education: async (_: any, __: any, ___: any): Promise<any> => {
      try {
        const education: any = await Education.find({});
        if (!education) {
          throw new AuthenticationError('There is no profile for this user');
        }
        return education
          .exec()
          .lean()
          .toObject();
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    experience: async (_: any, __: any, ___: any): Promise<any> => {
      try {
        const experience: any = await Experience.find({});
        if (!experience) {
          throw new AuthenticationError('There is no profile for this user');
        }
        return experience
          .exec()
          .lean()
          .toObject();
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    social: async (_: any, __: any, { ctx }: any): Promise<any> => {
      try {
        const social: any = await Social.find({});
        if (!social) {
          throw new AuthenticationError('There is no profile for this user');
        }
        return social
          .exec()
          .lean()
          .toObject();
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },

  Mutation: {
    updateAndCreateProfile: async (
      _: any,
      { company, website, location, bio, status, githubusername, skills }: any,
      { user }: any
    ): Promise<any> => {
      const profileFields: any = {};
      profileFields.user = user.id;

      if (company) {
        profileFields.company = company;
      }

      if (website) {
        profileFields.website = website;
      }

      if (location) {
        profileFields.location = location;
      }

      if (bio) {
        profileFields.bio = bio;
      }

      if (status) {
        profileFields.status = status;
      }

      if (githubusername) {
        profileFields.githubusername = githubusername;
      }

      if (skills) {
        profileFields.skills = skills.split(',').map((skill: any) => skill.trim());
      }
      try {
        let profile = await Profile.findOne({ user: user.id });
        if (profile) {
          profile = await Profile.findOneAndUpdate(
            { user: user.id },
            { $set: profileFields },
            { new: true }
          );

          return profile;
        }
        profile = new Profile(profileFields);
        await profile.save();
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    updateAndCreateEducation: async (_: any, __: any, ___: any): Promise<void> => {
      try {
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    updateAndCreateEexperience: async (_: any, __: any, ___: any): Promise<void> => {
      try {
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    updateAndCreateSocial: async (profile: any, __: any, ___: any): Promise<void> => {
      try {
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },

  User: {
    profiles: async (user: any, __: any, ctx: any): Promise<any> => {
      try {
        const profiles = await Profile.find({});
        return profiles.filter((profile: any) => profile.user.id === user.id);
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },

  Profile: {
    education: async (profile: any, __: any, ___: any): Promise<any> => {
      try {
        const educations = await Education.find({});
        return educations.filter((education: any) => education.id === profile.id);
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    experience: async (profile: any, __: any, ___: any): Promise<any> => {
      try {
        const experiences = await Experience.find({});
        return experiences.filter((experience: any) => experience.id === profile.id);
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    social: async (profile: any, __: any, ___: any): Promise<any> => {
      try {
        const socials = await Social.find({});
        return socials.filter((social: any) => social.id === profile.id);
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
    user: async (profile: any, __: any, ___: any): Promise<any> => {
      try {
        return { __typename: 'User', id: profile.user.id };
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },
};
