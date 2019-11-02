require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Aura Studios`,
    siteHeadline: `Aura Studios | Virtual & Augmented Reality studio`,
    siteUrl: `https://aurastudios.xyz`,
    siteDescription: `Creating realities | Creative engineering studio focused on the next computing platform.`,
    siteTitleAlt: `Aura Studios`,
    siteLanguage: `en`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {

      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aura Studios`,
        short_name: `Aura`,
        description: `Creating realities | Creative engineering studio focused on the next computing platform.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js',
        onLoad: `() => window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us3.list-manage.com","uuid":"ea9b7c0cb1f4460e20e03ed6c","lid":"0be220cf33","uniqueMethods":true}) })`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}