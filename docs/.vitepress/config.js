export default {
    title: 'VS docs',
    description: 'docs built by VS Leitan',
    themeConfig: {
        logo: "/logo.svg",
        siteTitle: "VS docs",
        nav: [
            { text: "About", link: "/about" },
            { text: "Contact", link: "/contact" },
            { text: "Guide", link: "/guide" },
            { text: "Configs", link: "/configs" },
            { text: "Changelog", link: "https://github.com/..." },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/Evavic44/adocs" },
            { icon: "twitter", link: "https://twitter.com/victorekea" },
            { icon: "discord", link: "..." },
        ],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2022-present Adocs",
        },
        sidebar: [
            {
                text: "Section A",
                collapsible: true,
                items: [
                    { text: "Introduction", link: "/introduction" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
            {
                text: "Section B",
                collapsible: false,
                items: [
                    { text: "Introduction", link: "/introduction" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
            {
                text: "Section C",
                collapsible: true,
                items: [
                    { text: "Introduction", link: "/introduction" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
        ],
    },



}