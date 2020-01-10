import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProfileSchema: mongoose.Schema<any> = new Schema(
  {
    user: {
      ref: 'user',
      type: Schema.Types.ObjectId,
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
    ],

    experience: [
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
    ],

    social: {
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
  },
  { timestamps: true }
);

export const Profile: mongoose.Model<mongoose.Document> = mongoose.model('profile', ProfileSchema);
