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
const profile = (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        console.error(err.message);
        throw new apollo_server_1.AuthenticationError(err.message);
    }
});
const profiles = (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        console.error(err.message);
        throw new apollo_server_1.AuthenticationError(err.message);
    }
});
const newProfile = (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        console.error(err.message);
        throw new apollo_server_1.AuthenticationError(err.message);
    }
});
const removeProfile = (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        console.error(err.message);
        throw new apollo_server_1.AuthenticationError(err.message);
    }
});
const updateProfile = (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        console.error(err.message);
        throw new apollo_server_1.AuthenticationError(err.message);
    }
});
exports.resolver = {
    Query: {
        profile,
        profiles,
    },
    Mutation: {
        newProfile,
        removeProfile,
        updateProfile,
    },
};
//# sourceMappingURL=profile.resolvers.js.map