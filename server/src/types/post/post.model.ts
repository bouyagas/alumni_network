import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema: mongoose.Schema<any> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },

    name: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
    },

    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
      },
    ],

    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },

        name: {
          type: String,
        },

        text: {
          type: String,
          required: true,
        },

        avatar: {
          type: String,
        },

        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Post: mongoose.Model<mongoose.Document> = mongoose.model('post', PostSchema);
