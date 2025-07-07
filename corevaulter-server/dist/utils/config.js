"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRONTEND_URL = exports.JWT_SECRET = exports.MONGO_URI = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT || 5000;
exports.MONGO_URI = process.env.MONGO_URI || "";
exports.JWT_SECRET = process.env.JWT_SECRET || "";
exports.FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
