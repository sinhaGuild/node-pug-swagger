/**
 * Setup for Swagger documentation
 * pass OPTIONS to SWAGGER-DOCS as an object with 2 parameters, definition and api.
 * swaggerDefinition: { info: {servers:[],},}, apis:[]
 * call in server-index as app.use(swui.serve, swui(exportedJSDocsObject, {customCss:''}))
 */

const swjs = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Node-Swagger",
      description:
        "Node Setup with Swagger Express. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, provident illum! Eum illo quisquam, tempora magnam exercitationem quaerat reprehenderit iste voluptatem optio incidunt rem!",
      version: 0.1,
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Sinhaguild",
        url: "https://jsonplaceholder.typicode.com",
      },
      servers: [
        {
          url: "http://localhost:4000",
          description: "Development server",
        },
      ],
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swjs(swaggerOptions);

module.exports = swaggerDocs;
