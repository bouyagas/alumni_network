import * as mongoose from 'mongoose';
const ProfileSchema: mongoose.Schema<any> = new mongoose.Schema(
  {
    user: {
      ref: 'user',
      required: true,
      type: mongoose.Schema.Types.ObjectId,
    },

    company: {
      type: String,
    },

    website: {
      type: String,
    },

    location: {
      type: String,
    },

    status: {
      default: 'Junior_Developer',
      enum: ['Junior_Developer', 'Senior_Developer', 'Student', 'Instructor', 'Manager', 'Other'],
      required: true,
      type: String,
    },

    skills: {
      required: true,
      type: [String],
    },

    bio: {
      type: String,
    },

    githubusername: {
      type: String,
    },

    education: [
      {
        ref: 'education',
        required: true,
        type: mongoose.Schema.Types.ObjectId,
      },
    ],

    experience: [
      {
        ref: 'experience',
        required: true,
        type: mongoose.Schema.Types.ObjectId,
      },
    ],

    social: {
      ref: 'social',
      required: true,
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const EducationSchema: mongoose.Schema<any> = new mongoose.Schema(
  {
    school: {
      required: true,
      type: String,
    },

    degree: {
      required: true,
      type: String,
    },

    fieldofstudy: {
      required: true,
      type: String,
    },

    from: {
      required: true,
      type: Date,
    },

    to: {
      type: Date,
    },

    current: {
      default: false,
      type: Boolean,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);
const ExperienceSchema: mongoose.Schema<any> = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },

    company: {
      required: true,
      type: String,
    },

    location: {
      type: String,
    },

    from: {
      required: true,
      type: Date,
    },

    to: {
      type: Date,
    },

    current: {
      default: false,
      type: Boolean,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const SocialSchema: mongoose.Schema<any> = new mongoose.Schema(
  {
    youtube: {
      type: String,
    },

    twitter: {
      type: String,
    },

    facebook: {
      type: String,
    },

    linkedin: {
      type: String,
    },

    instagram: {
      type: String,
    },
  },
  { timestamps: true }
);

EducationSchema.set('toObject', { getters: true, virtuals: true });
export const Education: mongoose.Model<mongoose.Document> = mongoose.model(
  'education',
  EducationSchema
);

ExperienceSchema.set('toObject', { getters: true, virtuals: true });
export const Experience: mongoose.Model<mongoose.Document> = mongoose.model(
  'experience',
  ExperienceSchema
);
SocialSchema.set('toObject', { getters: true, virtuals: true });
export const Social: mongoose.Model<mongoose.Document> = mongoose.model('social', SocialSchema);

ProfileSchema.set('toObject', { getters: true, virtuals: true });
export const Profile: mongoose.Model<mongoose.Document> = mongoose.model('profile', ProfileSchema);
