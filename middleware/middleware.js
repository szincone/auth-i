"use strict";
// dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
// routes
const userRoutes = require("../routes/userRoutes.js");

function errorHandler(err, req, res, next) {
  console.log(err);
  switch (err.code) {
    case 404:
      res.status(404).json({
        message: "The requested user does not exist.",
      });
      break;
    default:
      res.status(500).json({
        message: "There was an error performing the required operation",
      });
      break;
  }
}

module.exports = server => {
  // server.use(cors({ credentials: true, origin: "http://localhost:3000" }));
  server.use(helmet());
  server.use(express.json());
  server.use(morgan("dev"));
  server.use("/api", userRoutes);
  server.use(errorHandler);
};
