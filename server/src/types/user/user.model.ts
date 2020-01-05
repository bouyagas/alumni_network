import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export const roles = {
  member: 'member',
  admin: 'admin',
};

const userSchema: mongoose.Schema<any> = new mongoose.Schema(
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

userSchema.pre('save', function(next: any): any {
  if (!this.isModified('password')) {
    return next();
  }
  //@ts-ignore
  bcrypt.hash(this.password, 8, function(err: any, hash: string): any {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function(password: any) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err: any, same: any) => {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};

export const User: mongoose.Model<mongoose.Document, {}> = mongoose.model('user', userSchema);
