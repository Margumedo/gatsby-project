/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [// Otros plugins...
    {
      resolve: 'gatsby-plugin-pdf',
      options: {
        paths: ['/', '/page1', '/page2'], // Rutas de las páginas que deseas exportar a PDF
        outputPath: '/public/exports', // Carpeta donde se guardarán los PDF generados
      },
    },
  ],
}



