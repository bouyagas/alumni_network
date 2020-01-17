import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

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

userSchema.set('toObject', { getters: true, virtuals: true });

userSchema.pre('save', async function(this: any, next: () => {}) {
  if (!this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
      // @ts-ignore
      next(err);
    }
  }
  next();
});

userSchema.methods.checkPassword = function(this: any, password: string) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};

export const User: mongoose.Model<mongoose.Document, {}> = mongoose.model('user', userSchema);
