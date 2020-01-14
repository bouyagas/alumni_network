"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new Schema({
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
}, { timestamps: true });
userSchema.pre('save', (next) => {
    // @ts-ignore
    if (!this.isModified('password')) {
        return next();
    }
    const salt = bcrypt_1.default.genSalt(10);
    // @ts-ignore
    bcrypt_1.default.hash(this.password, salt, (err, hash) => {
        if (err) {
            return next(err);
        }
        // @ts-ignore
        this.password = hash;
        next();
    });
});
userSchema.methods.checkPassword = (password) => {
    // @ts-ignore
    const passwordHash = this.password;
    return new Promise((resolve, reject) => {
        bcrypt_1.default.compare(password, passwordHash, (err, same) => {
            if (err) {
                return reject(err);
            }
            resolve(same);
        });
    });
};
exports.User = mongoose_1.default.model('user', userSchema);
//# sourceMappingURL=user.model.js.map