module.exports = {
  siteMetadata: {
    title: `Drop Kid`,
    author: `Luan Silva`,
    description: `Drop Kid é um App de transporte escolar que auxilia na redução de tempo em embarque e desembarque. Enviando mensagens de texto ou fazendo chamadas automáticas para os responsaveis das crianças`,
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
  ],
}
