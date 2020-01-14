import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema: mongoose.Schema<any> = new Schema(
  {
    user: {
      ref: 'user',
      required: true,
      type: Schema.Types.ObjectId,
    },

    name: {
      required: true,
      type: String,
    },

    text: {
      required: true,
      type: String,
    },

    avatar: {
      type: String,
    },

    likes: [
      {
        user: {
          ref: 'user',
          type: Schema.Types.ObjectId,
        },
      },
    ],

    comments: [
      {
        user: {
          ref: 'user',
          type: Schema.Types.ObjectId,
        },

        name: {
          type: String,
        },

        text: {
          required: true,
          type: String,
        },

        avatar: {
          type: String,
        },

        date: {
          default: Date.now,
          type: Date,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Post: mongoose.Model<mongoose.Document> = mongoose.model('post', PostSchema);
