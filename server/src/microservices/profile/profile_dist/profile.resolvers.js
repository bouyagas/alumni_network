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
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const profile_model_1 = require("./profile.model");
exports.resolver = {
    Query: {
        profile: (_, { id }, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const profile = yield profile_model_1.Profile.findOne({ id });
                return profile
                    .exec()
                    .lean()
                    .toObject();
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
        profiles: (_, __, ____) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const profile = yield profile_model_1.Profile.findOne({});
                return profile
                    .exec()
                    .lean()
                    .toObject();
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
    },
    Mutation: {
        newProfile: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
        removeProfile: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
        updateProfile: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
    },
    User: {
        profile: (user) => __awaiter(void 0, void 0, void 0, function* () { }),
    },
    Profile: {
        user: (profile) => __awaiter(void 0, void 0, void 0, function* () { }),
    },
};
//# sourceMappingURL=profile.resolvers.js.map