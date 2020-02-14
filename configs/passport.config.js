const session = require("express-session");
const flash = require("connect-flash");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");



module.exports = app => {

  app.use(session({
    secret: "irongenerator",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  }));
  app.use(flash());
  require("./passport")(app);

}