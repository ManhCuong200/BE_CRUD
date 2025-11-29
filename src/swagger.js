import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Student Management API",
    version: "1.0.0",
    description: "Swagger API documentation for Student CRUD using Node.js + Express + Mongoose",
  },
  servers: [
    {
      url: "http://localhost:3001/api",
      description: "Local Server",
    },
  ],
  components: {
    schemas: {
      Student: {
        type: "object",
        properties: {
          _id: { type: "string", example: "65ae1f6a4c0e5d12345ba123" },
          name: { type: "string", example: "Nguyen Van A" },
          email: { type: "string", example: "student@gmail.com" },
          age: { type: "number", example: 21 },
          phone: { type: "string", example: "0901234567" },
          skills: {
            type: "array",
            items: { type: "string" },
            example: ["Node.js", "React", "MongoDB"],
          },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },

      NewStudent: {
        type: "object",
        required: ["name", "email", "age", "phone"],
        properties: {
          name: { type: "string", example: "Nguyen Van A" },
          email: { type: "string", example: "student@gmail.com" },
          age: { type: "number", example: 21 },
          phone: { type: "string", example: "0901234567" },
          skills: {
            type: "array",
            items: { type: "string" },
            example: ["HTML", "CSS", "JS"],
          },
        },
      },

      UpdateStudent: {
        type: "object",
        properties: {
          name: { type: "string", example: "Updated Name" },
          email: { type: "string", example: "updated@gmail.com" },
          age: { type: "number", example: 22 },
          phone: { type: "string", example: "0987654321" },
          skills: {
            type: "array",
            items: { type: "string" },
            example: ["React", "Node.js"],
          },
        },
      },

      ErrorResponse: {
        type: "object",
        properties: {
          message: { type: "string", example: "Something went wrong" },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📘 Swagger ready at http://localhost:3001/api-docs");
};
