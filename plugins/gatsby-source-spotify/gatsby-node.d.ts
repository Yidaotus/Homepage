import { TimeRange } from './spotify-api';
export interface PluginOptions {
    clientId: string;
    clientSecret: string;
    refreshToken: string;
    timeRanges?: TimeRange[];
    fetchPlaylists?: boolean;
    fetchRecent?: boolean;
}
export declare const sourceNodes: ({ actions, createNodeId, store, cache, createContentDigest }: {
    actions: any;
    createNodeId: any;
    store: any;
    cache: any;
    createContentDigest: any;
}, pluginOptions: PluginOptions) => Promise<void>;
