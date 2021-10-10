require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yidaou.tech",
        title: "Yidaou.tech",
        description: "My personal site",
        author: {
            name: "Daniel Voigt",
            url: "https://yidaotus.medium.com/",
            email: "d.voigt1993@gmail.com",
        },
        social: {
            medium: "https://yidaotus.medium.com/",
            github: "https://github.com/yidaotus",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ["develop"],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        "gatsby-plugin-postcss",
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "profile",
                path: `./src/content/profile`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "photography_gallery",
                path: `./src/content/photography/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "content_blocks",
                path: `./src/content/contentBlocks`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "projects",
                path: `./src/content/projects`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `./src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-rss-feed`,
            options: {
                url: `https://yidaotus.medium.com/feed`,
                name: `MediumBlog`,
                // Optional
                // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
                parserOption: {
                    customFields: {
                        content: ["content"],
                    },
                },
            },
        },
        {
            resolve: `gatsby-source-spotify`,
            options: {
                clientId: process.env.SPOTIFY_CLIENT_ID,
                clientSecret: process.env.SPOTIFY_SECRET,
                refreshToken: process.env.SPOTIFY_TOKEN,

                fetchPlaylists: false, // optional. Set to false to disable fetching of your playlists
                fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
                timeRanges: ["short_term"], // optional. Set time ranges to be fetched
            },
        },
    ],
};
