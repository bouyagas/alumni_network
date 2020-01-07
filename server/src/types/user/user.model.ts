import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';

const userSchema: mongoose.Schema<any> = new Schema(
  {
    username: {
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
  },

  { timestamps: true }
);

userSchema.pre('save', (next: any): any => {
  let user = this;
  //@ts-ignore
  if (!user.isModified('password')) {
    return next();
  }
  let salt = bcrypt.genSalt(10);
  //@ts-ignore
  bcrypt.hash(user.password, salt, (err: any, hash: string): any => {
    if (err) {
      return next(err);
    }
    //@ts-ignore
    user.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = (password: any): any => {
  //@ts-ignore
  let passwordHash: any = this.password;

  return new Promise((resolve, reject): void => {
    bcrypt.compare(password, passwordHash, (err: any, same: any): any => {
      if (err) {
        return reject(err);
      }
      resolve(same);
    });
  });
};

export const User: mongoose.Model<mongoose.Document, {}> = mongoose.model('user', userSchema);
