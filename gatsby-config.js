module.exports = {
  siteMetadata: {
    title: 'Conner Parker Photos',
    description:
      'Conner Parker is a photographer based in Raleigh, NC',
    url: 'https://gatsby-starter-amsterdam.netlify.com',
    author: 'Conner Parker',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'Conner Parker is a photographer based in Raleigh, NC',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'Another Page',
        slug: '/example/',
      },
    ],
    footerLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
