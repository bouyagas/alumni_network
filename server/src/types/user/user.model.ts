import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';

export const roles = {
  member: 'member',
  admin: 'admin',
};

const userSchema: mongoose.Schema<any> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
    },

    role: {
      type: String,
      enum: Object.keys(roles),
      required: true,
      default: roles.member,
    },

    apiKey: {
      type: String,
      required: true,
      unique: true,
    },
  },

  { timestamps: true }
);

userSchema.pre('save', (next: any): any => {
  //@ts-ignore
  if (!this.isModified('password')) {
    return next();
  }
  //@ts-ignore
  bcrypt.hash(this.password, 8, (err: any, hash: string): any => {
    if (err) {
      return next(err);
    }
    //@ts-ignore
    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = (password: any): any => {
  //@ts-ignore
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err: any, same: any): any => {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};

export const User: mongoose.Model<mongoose.Document, {}> = mongoose.model('user', userSchema);
