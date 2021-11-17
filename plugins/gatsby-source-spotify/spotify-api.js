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
exports.getUserData = exports.getRecentTracks = exports.getPlaylists = exports.getTokens = exports.generateAuthUrl = exports.REDIRECT_URL = exports.SPOTIFY_API_URL = exports.SPOTIFY_ACCOUNT_URL = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.SPOTIFY_ACCOUNT_URL = 'https://accounts.spotify.com';
exports.SPOTIFY_API_URL = 'https://api.spotify.com/v1';
exports.REDIRECT_URL = 'http://localhost:5071/spotify';
const generateAuthUrl = (clientId, scopes = ['user-top-read', 'user-read-recently-played']) => {
    const base = new URL(`${exports.SPOTIFY_ACCOUNT_URL}/authorize`);
    base.searchParams.append('response_type', 'code');
    base.searchParams.append('redirect_uri', exports.REDIRECT_URL);
    base.searchParams.append('client_id', clientId);
    base.searchParams.append('scope', scopes.join(' '));
    return String(base);
};
exports.generateAuthUrl = generateAuthUrl;
const getTokens = (clientId, clientSecret, code, grantType) => __awaiter(void 0, void 0, void 0, function* () {
    const body = new URLSearchParams();
    body.append('grant_type', grantType);
    body.append('redirect_uri', exports.REDIRECT_URL);
    body.append(grantType === 'refresh_token' ? 'refresh_token' : 'code', code);
    body.append('client_id', clientId);
    body.append('client_secret', clientSecret);
    const response = yield (0, node_fetch_1.default)(`${exports.SPOTIFY_ACCOUNT_URL}/api/token`, {
        method: 'POST',
        body: body, // Typing seems to be off here
    });
    if (!response.ok) {
        throw new Error(`${response.statusText}: ${yield response.text()}`);
    }
    return (yield response.json());
});
exports.getTokens = getTokens;
const getTop = (accessToken, type, timeRange = 'medium_term', limit = 20) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`${exports.SPOTIFY_API_URL}/me/top/${type}`);
    url.searchParams.append('time_range', timeRange);
    url.searchParams.append('limit', String(Math.min(limit, 50)));
    const response = yield (0, node_fetch_1.default)(String(url), {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (!response.ok) {
        throw new Error(`[${url} / ${accessToken}] ${response.statusText}: ${yield response.text()}`);
    }
    const result = yield response.json();
    return result.items;
});
const getPlaylists = (accessToken, limit = 50) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`${exports.SPOTIFY_API_URL}/me/playlists`);
    url.searchParams.append('limit', String(Math.min(limit, 50)));
    const response = yield (0, node_fetch_1.default)(String(url), {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (!response.ok) {
        throw new Error(`${response.statusText}: ${yield response.text()}`);
    }
    const result = yield response.json();
    return result.items;
});
exports.getPlaylists = getPlaylists;
const getRecentTracks = (accessToken, limit = 50) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`${exports.SPOTIFY_API_URL}/me/player/recently-played`);
    url.searchParams.append('limit', String(Math.min(limit, 50)));
    const response = yield (0, node_fetch_1.default)(String(url), {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (!response.ok) {
        throw new Error(`${response.statusText}: ${yield response.text()}`);
    }
    const result = yield response.json();
    return result.items;
});
exports.getRecentTracks = getRecentTracks;
const getUserData = ({ clientId, clientSecret, refreshToken, timeRanges = ['short_term', 'medium_term', 'long_term'], fetchPlaylists = true, fetchRecent = true, }) => __awaiter(void 0, void 0, void 0, function* () {
    const { access_token } = yield (0, exports.getTokens)(clientId, clientSecret, refreshToken, 'refresh_token');
    const playlists = fetchPlaylists ? yield (0, exports.getPlaylists)(access_token) : [];
    const recentTracks = fetchRecent ? yield (0, exports.getRecentTracks)(access_token) : [];
    const artists = yield Promise.all(timeRanges.map((t) => __awaiter(void 0, void 0, void 0, function* () {
        const artists = (yield getTop(access_token, 'artists', t));
        return artists.map(artist => (Object.assign(Object.assign({}, artist), { time_range: t })));
    })));
    const tracks = yield Promise.all(timeRanges.map((t) => __awaiter(void 0, void 0, void 0, function* () {
        const tracks = (yield getTop(access_token, 'tracks', t));
        return tracks.map(track => (Object.assign(Object.assign({}, track), { time_range: t })));
    })));
    return {
        playlists,
        recentTracks,
        artists: [].concat(...artists),
        tracks: [].concat(...tracks),
    };
});
exports.getUserData = getUserData;
