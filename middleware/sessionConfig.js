"use strict";
// setting store, db required
const db = require("../database/dbConfig.js");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
// randomizes the secrets a little more
const arrayOfSecrets = ["Dr. Pepper", "Mr. Pibb", "Penguins", "Avocados"];

const sessionConfig = {
  name: "definitely not connect.sid", // default is connect.sid
  // secret: "nobody tosses a dwarf!",
  secret: arrayOfSecrets,
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000, // a day
    secure: false, // only set cookies over https. Server will not send back a cookie over http.
  },
  httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    tablename: "sessions",
    sidfieldname: "sid",
    knex: db,
    createtable: true,
    clearInterval: 1000 * 60 * 60,
  }),
};

module.exports = {
  sessionConfig,
};
