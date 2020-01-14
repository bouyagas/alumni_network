"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const config_1 = __importDefault(require("config"));
const gravatar_1 = __importDefault(require("gravatar"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("./user.model");
const me = (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!ctx.user) {
            throw new apollo_server_1.AuthenticationError('Invalid Credentials');
        }
        return yield ctx.user;
    }
    catch (err) {
        console.error(err.message);
        throw new apollo_server_1.AuthenticationError(err.message);
    }
});
const signin = (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = args;
        ctx.user = yield user_model_1.User.findOne({ where: { email } });
        if (!ctx.user) {
            throw new apollo_server_1.AuthenticationError('No user with that email');
        }
        const payload = {
            user: {
                id: ctx.user.id,
            },
        };
        jsonwebtoken_1.default.sign(payload, config_1.default.get('jwtSecret.jwt'), { expiresIn: 360000 }, (err, token) => {
            if (err) {
                throw err;
            }
            return token;
        });
    }
    catch (err) {
        console.error(err.message);
        throw new apollo_server_1.AuthenticationError(err.message);
    }
});
const signup = (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = args;
        ctx.user = yield user_model_1.User.findOne({ where: { email } });
        if (ctx.user) {
            throw new apollo_server_1.AuthenticationError('User already exists');
        }
        args.avatar = gravatar_1.default.url(email, {
            d: 'mm',
            r: 'pg',
            s: '200',
        });
        ctx.user = yield user_model_1.User.create(Object.assign({}, args.input));
        const payload = {
            user: {
                id: ctx.user.id,
            },
        };
        jsonwebtoken_1.default.sign(payload, config_1.default.get('jwtSecret.jwt'), { expiresIn: 360000 }, (err, token) => {
            if (err) {
                throw err;
            }
            return token;
        });
    }
    catch (err) {
        console.error(err.message);
        throw new apollo_server_1.AuthenticationError(err.message);
    }
});
const updateMe = (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!ctx.user) {
            throw new apollo_server_1.AuthenticationError('Invalid Credentials');
        }
        return yield user_model_1.User.findByIdAndUpdate(ctx.user._id, args.input, { new: true })
            .select('-password')
            .lean()
            .exec();
    }
    catch (err) {
        console.error(err.message);
        throw new apollo_server_1.AuthenticationError(err.message);
    }
});
exports.resolver = {
    Query: {
        me,
    },
    Mutation: {
        signin,
        signup,
        updateMe,
    },
};
//# sourceMappingURL=user.resolvers.js.map