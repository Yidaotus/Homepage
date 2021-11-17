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
exports.sourceNodes = void 0;
const gatsby_source_filesystem_1 = require("gatsby-source-filesystem");
const gatsby_node_helpers_1 = require("gatsby-node-helpers");
const node_fetch_1 = __importDefault(require("node-fetch"));
const artist_list_1 = require("./artist-list");
const spotify_api_1 = require("./spotify-api");
const referenceRemoteFile = (id, url, { cache, createNode, createNodeId, touchNode, store }) => __awaiter(void 0, void 0, void 0, function* () {
    const cachedResult = yield cache.get(url);
    if (cachedResult) {
        touchNode({ nodeId: cachedResult });
        return { localFile___NODE: cachedResult };
    }
    const testRes = yield (0, node_fetch_1.default)(url);
    if (!testRes.ok) {
        console.warn(`[${id}] Image could not be loaded. Skipping...`);
        return null;
    }
    const fileNode = yield (0, gatsby_source_filesystem_1.createFileNodeFromBuffer)({
        buffer: yield testRes.buffer(),
        store,
        cache,
        createNode,
        createNodeId,
        name: id.replace(/[^a-z0-9]+/gi, '-'),
        ext: '.jpg',
    });
    if (fileNode) {
        cache.set(url, fileNode.id);
        return { localFile___NODE: fileNode.id };
    }
    return null;
});
const sourceNodes = ({ actions, createNodeId, store, cache, createContentDigest }, pluginOptions) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Running local version!");
    const { createNodeFactory } = (0, gatsby_node_helpers_1.createNodeHelpers)({
        typePrefix: 'Spotify',
        createContentDigest,
        createNodeId,
    });
    const TopArtistNode = createNodeFactory('TopArtist');
    const TopTrackNode = createNodeFactory('TopTrack');
    const PlaylistNode = createNodeFactory('Playlist');
    const RecentTrackNode = createNodeFactory('RecentTrack');
    const { createNode, touchNode } = actions;
    const helpers = { cache, createNode, createNodeId, store, touchNode };
    const { tracks, artists, playlists, recentTracks } = yield (0, spotify_api_1.getUserData)(pluginOptions);
    yield Promise.all([
        ...tracks.map((track, index) => __awaiter(void 0, void 0, void 0, function* () {
            createNode(TopTrackNode(Object.assign(Object.assign({}, track), { id: `${track.time_range}__${track.id}`, order: index, testString: 'lul123', artistString: (0, artist_list_1.generateArtistString)(track.artists), image: track.album && track.album.images && track.album.images.length
                    ? yield referenceRemoteFile(track.album.uri, track.album.images[0].url, helpers)
                    : null })));
        })),
        ...artists.map((artist, index) => __awaiter(void 0, void 0, void 0, function* () {
            createNode(TopArtistNode(Object.assign(Object.assign({}, artist), { id: `${artist.time_range}__${artist.id}`, order: index, image: artist.images && artist.images.length
                    ? yield referenceRemoteFile(artist.uri, artist.images[0].url, helpers)
                    : null })));
        })),
        ...playlists.map((playlist, index) => __awaiter(void 0, void 0, void 0, function* () {
            createNode(PlaylistNode(Object.assign(Object.assign({}, playlist), { order: index, image: playlist.images && playlist.images.length
                    ? yield referenceRemoteFile(playlist.uri, playlist.images[0].url, helpers)
                    : null })));
        })),
        ...recentTracks.map((track, index) => __awaiter(void 0, void 0, void 0, function* () {
            createNode(RecentTrackNode(Object.assign(Object.assign({}, track), { id: String(track.played_at), order: index, track: Object.assign(Object.assign({}, track.track), { artistString: (0, artist_list_1.generateArtistString)(track.track.artists), image: track.track.album &&
                        track.track.album.images &&
                        track.track.album.images.length
                        ? yield referenceRemoteFile(track.track.uri, track.track.album.images[0].url, helpers)
                        : null }) })));
        })),
    ]);
    return;
});
exports.sourceNodes = sourceNodes;
