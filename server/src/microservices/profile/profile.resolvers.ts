import { AuthenticationError } from 'apollo-server';
import { Profile } from './profile.model';

export const resolver = {
  Query: {
    profile: async (_: any, __: any, { user }: any): Promise<any> => {
      try {
        const profile: any = await Profile.findOne({
          user: user.id,
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
  },

  Mutation: {
    updateAndCreateProfile: async (
      _: any,
      {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin,
      }: any,
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

      profileFields.social = {};
      if (youtube) {
        profileFields.social.youtube = youtube;
      }
      if (twitter) {
        profileFields.social.twitter = twitter;
      }
      if (facebook) {
        profileFields.social.facebook = facebook;
      }
      if (linkedin) {
        profileFields.social.linkedin = linkedin;
      }
      if (instagram) {
        profileFields.social.instagram = instagram;
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

    createEducation: async (
      _: any,
      { current, degree, description, fieldofstudy, from, school, to }: any,
      { user }: any
    ): Promise<any> => {
      const newEdu = {
        current,
        degree,
        description,
        fieldofstudy,
        from,
        school,
        to,
      };
      try {
        const profile = await Profile.findOne({ user: user.id });
        // @ts-ignore
        profile.education.unshift(newEdu);
        return await profile.save();
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    createExperience: async (
      _: any,
      { company, current, description, from, location, title, to }: any,
      { user }: any
    ): Promise<any> => {
      const newExp = {
        company,
        current,
        description,
        from,
        location,
        title,
        to,
      };
      try {
        const profile = await Profile.findOne({ user: user.id });
        // @ts-ignore
        profile.experience.unshift(newExp);
        return await profile.save();
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },

  User: {
    profiles: async (user: any, __: any, ___: any): Promise<any> => {
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
        const profiles = await Profile.find({});
        // @ts-ignore
        return profiles.education.filter((edu: any) => edu.id === profile.id);
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    experience: async (profile: any, __: any, ___: any): Promise<any> => {
      try {
        const profiles = await Profile.find({});
        return profiles.filter((exp: any) => exp.id === profile.id);
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
