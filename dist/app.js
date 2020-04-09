"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var CreateTrack_1 = __importDefault(require("./services/CreateTrack"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.post("/", function (request, response) {
    var track = CreateTrack_1.default(request, response);
    response.json(track);
});
exports.default = app;
