import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';

const userSchema: mongoose.Schema<any> = new Schema(
  {
    username: {
      required: true,
      type: String,
    },

    email: {
      required: true,
      trim: true,
      type: String,
      unique: true,
    },

    password: {
      required: true,
      type: String,
    },

    avatar: {
      type: String,
    },
  },

  { timestamps: true }
);

userSchema.pre('save', (next: any): any => {
  // @ts-ignore
  if (!this.isModified('password')) {
    return next();
  }
  const salt = bcrypt.genSalt(10);
  // @ts-ignore
  bcrypt.hash(this.password, salt, (err: any, hash: string): any => {
    if (err) {
      return next(err);
    }
    // @ts-ignore
    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = (password: any): any => {
  // @ts-ignore
  const passwordHash: any = this.password;

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
