"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
function CreateTrack(request, response) {
    var _a = request.body, title = _a.title, likes = _a.likes, category = _a.category;
    return {
        id: crypto_1.default.randomBytes(8).toString("HEX"),
        title: title,
        likes: likes,
        category: category,
    };
}
exports.default = CreateTrack;
