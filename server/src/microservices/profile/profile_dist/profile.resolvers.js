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
        profile: (_, ___, { user }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const profile = yield profile_model_1.Profile.findOne({ user: user.id }).populate('user', [
                    'username',
                    'avatar',
                ]);
                if (!profile) {
                    throw new apollo_server_1.AuthenticationError('There is no profile for this user');
                }
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
                const profile = yield profile_model_1.Profile.findOne({}).populate('user', ['username', 'avatar']);
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
        education: (_, __, ____) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
        experience: (_, __, ____) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
        social: (_, __, ____) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
    },
    Mutation: {
        updateAndCreateProfile: (_, { company, website, location, bio, status, githubusername, skills }, { user }) => __awaiter(void 0, void 0, void 0, function* () {
            const profileFields = {};
            profileFields.user = user.id;
            if (company) {
                profileFields.company = company;
            }
            if (website) {
                profileFields.website = website;
            }
            if (location) {
                profileFields.location = location;
            }
            if (bio) {
                profileFields.bio = bio;
            }
            if (status) {
                profileFields.status = status;
            }
            if (githubusername) {
                profileFields.githubusername = githubusername;
            }
            if (skills) {
                profileFields.skills = skills.split(',').map((skill) => skill.trim());
            }
            try {
                let profile = yield profile_model_1.Profile.findOne({ user: user.id });
                if (profile) {
                    profile = yield profile_model_1.Profile.findOneAndUpdate({ user: user.id }, { $set: profileFields }, { new: true });
                    return profile;
                }
                profile = new profile_model_1.Profile(profileFields);
                yield profile.save();
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
        updateAndCreateEducation: (_, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
        updateAndCreateEexperience: (_, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
        updateAndCreateSocial: (profile, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
    },
    User: {
        profile: (user, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
    },
    Profile: {
        education: (profile, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
        experience: (profile, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
        social: (profile, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
        user: (profile, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (err) {
                console.error(err.message);
                throw new apollo_server_1.AuthenticationError(err.message);
            }
        }),
    },
};
//# sourceMappingURL=profile.resolvers.js.map