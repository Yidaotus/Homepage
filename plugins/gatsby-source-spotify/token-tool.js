#!/usr/bin/env node
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
const commander_1 = __importDefault(require("commander"));
const http_1 = __importDefault(require("http"));
const open_1 = __importDefault(require("open"));
commander_1.default.description('Spotify Refresh Token Tool');
const spotify_api_1 = require("./spotify-api");
commander_1.default
    .command('token <clientId> <clientSecret>')
    .alias('t')
    .description('Start Spotify OAuth Flow')
    .action((clientId, clientSecret) => {
    console.log('Starting HTTP server to receive OAuth data from Spotify...');
    http_1.default
        .createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const url = new URL(`http://localhost${req.url}`);
        const code = url.searchParams.get('code');
        if (!code) {
            return;
        }
        console.log('Got the code. Getting the refresh token now...');
        const tokens = yield (0, spotify_api_1.getTokens)(clientId, clientSecret, code, 'authorization_code');
        console.log(`Here's your refresh token:`);
        console.log(tokens.refresh_token);
        res.write(`Your refresh token is:\n${tokens.refresh_token}`);
        res.end();
        setTimeout(() => process.exit(0), 1000);
    }))
        .listen(5071);
    const authUrl = (0, spotify_api_1.generateAuthUrl)(clientId);
    console.log('I will open a browser window for you.', 'Please log in using your Spotify credentials.');
    console.log();
    console.log("In case your browser doesn't open, here's the link:", authUrl);
    try {
        (0, open_1.default)(authUrl);
    }
    catch (e) { }
});
commander_1.default.parse(process.argv);
