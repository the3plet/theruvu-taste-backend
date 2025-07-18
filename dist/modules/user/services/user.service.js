"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repositories_1 = require("../repositories/user.repositories");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
exports.UserService = {
    register: async (name, email, password) => {
        const existingUser = await user_repositories_1.UserRepository.findByEmail(email);
        if (existingUser)
            throw new Error("User Already Exist");
        const hashedPassord = await bcryptjs_1.default.hash(password, 10);
        const user = await user_repositories_1.UserRepository.create({
            name,
            email,
            password: hashedPassord,
        });
        return { id: user.id, name: user.name, email: user.email };
    },
    login: async (email, password) => {
        const user = await user_repositories_1.UserRepository.findByEmail(email);
        if (!user)
            throw new Error("Invalid Credentials");
        const match = await bcryptjs_1.default.compare(password, user.password);
        if (!match)
            throw new Error("Invalid Credentials");
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, JWT_SECRET, {
            expiresIn: "7d",
        });
        return { token, user: { id: user.id, name: user.name, email: user.email } };
    },
};
