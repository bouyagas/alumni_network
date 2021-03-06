import { AuthenticationError } from 'apollo-server';
import { authenticated } from '../../utils/auth';
import { Profile } from './profile.model';

export const resolvers = {
  Query: {
    profile: authenticated(
      async (_: any, __: any, { currentUser }: any): Promise<any> => {
        try {
          const profile: any = await Profile.findOne({
            user: currentUser.id,
          }).populate('user', ['username', 'avatar']);
          if (!profile) {
            throw new AuthenticationError('There is no profile for this user');
          }
          return profile.exec().lean();
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),

    profiles: authenticated(
      async (_: any, __: any, ___: any): Promise<any> => {
        try {
          const profiles: any = await Profile.findOne({})
            .populate('user', ['username', 'avatar'])
            .exec();
          return { profiles };
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),
  },

  Mutation: {
    updateAndCreateProfile: authenticated(
      async (
        _: any,
        {
          input: {
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
          },
        }: any,
        { models: { Profile }, user }: any
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
          let profile: any = await Profile.findOne({ user: user.id });
          if (profile) {
            profile = await Profile.findOneAndUpdate(
              { user: user.id },
              { $set: profileFields },
              { new: true }
            );

            return profile;
          }
          profile = Profile.create(profileFields);
          await profile;
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),

    createEducation: authenticated(
      async (
        _: any,
        { input: { current, degree, description, fieldofstudy, from, school, to } }: any,
        { currentUser }: any
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
          const profile: any = await Profile.findOne({ user: currentUser.id });
          profile.education.unshift(newEdu);
          return await profile.save();
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),

    createExperience: authenticated(
      async (
        _: any,
        { input: { company, current, description, from, location, title, to } }: any,
        { currentUser }: any
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
          const getprofile: any = await Profile.findOne({ user: currentUser.id });
          // @ts-ignore
          getprofile.experience.unshift(newExp);
          return await getprofile.save();
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),
  },

  User: {
    profile: async (user: any, __: any, ___: any): Promise<any> => {
      try {
        return user.find((profile: any) => profile.id === user.id);
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },

  Profile: {
    education: async (profile: any, __: any, { models: { Profile }, user }: any): Promise<any> => {
      try {
        const profiles: any = await Profile.findOne({ user: user.id });
        return profiles.education.filter((edu: any) => edu.id === profile.id);
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    experience: async (profile: any, __: any, { models: { Profile }, user }: any): Promise<any> => {
      try {
        const profiles: any = await Profile.find({ user: user.id });
        return profiles.experience.filter((exp: any) => exp.id === profile.id);
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
