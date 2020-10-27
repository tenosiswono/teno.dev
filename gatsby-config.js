module.exports = {
  siteMetadata: {
    title: `Teno Siswono a Developer`,
    name: `teno.dev`,
    siteUrl: `https://www.teno.dev`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Hello, I'm Teno Siswono`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/tenosiswono`,
      },
      {
        name: `github`,
        url: `https://github.com/tenosiswono`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/tenosiswono`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/tenosiswono/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Teno Siswono a Developer`,
        short_name: `teno.dev`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
