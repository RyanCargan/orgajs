module.exports = {
  siteMetadata: {
    title: 'Coding Hermit Blog',
    description: 'A website for notes and portfolio work.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-orga',
      options: {
        defaultLayout: require.resolve('./src/components/layout.tsx'),
        components: {
          // override `a` inorder to have better internal navigation
          a: require.resolve('./src/components/link.tsx'),
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
