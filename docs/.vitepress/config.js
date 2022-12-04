export default {
    title: 'VS docs',
    description: 'docs built by VS Leitan',
    themeConfig: {
        logo: "/logo.svg",
        siteTitle: "VS Notes",
        nav: [
            { text: "About", link: "/about" },
            { text: "Contact", link: "/contact" },
            // { text: "Guide", link: "/guide" },
            // { text: "Configs", link: "/configs" },
            // { text: "Changelog", link: "https://github.com/..." },
            {
                text: "Notes",
                items: [
                    { text: "DBMS", link: "/DBMS" },
                    { text: "JS", link: "/js" },
                    { text: "Git & Github", link: "/git_github" },
                ],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/vishal-a-savaliya" },
            { icon: "twitter", link: "https://twitter.com/vsleitan" },
            { icon: "linkedin", link: "..." },
            { icon: "instagram", link: "..." },
            { icon: "discord", link: "..." },
        ],
        footer: {
            message: "Build With ❤ and 🥤",
            copyright: "@vsleitan",
        },
        sidebar: [
            {
                text: "DMBS",
                collapsible: true,
                items: [
                    { text: "Introduction", link: "/dbms" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
            {
                text: "JS",
                collapsible: true,
                items: [
                    { text: "Introduction", link: "/js" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
            {
                text: "Git & Github",
                collapsible: true,
                items: [
                    { text: "Introduction", link: "/git_github" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
        ],
    },



}