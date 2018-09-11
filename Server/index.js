require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
// const ctrl = require("./Controller/Controller");
// makes server
const app = express();
//states my port is either in hidden file for live or at 3001
let port = process.env.port || 3001;
app.use(cors());
app.use(json());
//test endpoint


app.use(cors());
app.use(json());
app.use(require("body-parser").text());
const { getUser, strat, logout } = require(`${__dirname}/Controller/authCtrl`);


app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 100000
      }
    })
  );


massive(process.env.CONNECTION_STRING).then(dbinstance => {
    app.set("db", dbinstance);
  });
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(strat);
  
  passport.serializeUser((user, done) => {
    const db = app.get("db");
    db.getUserByAuthid([user.id])
      .then(response => {
        if (!response[0]) {
          db.addUserByAuthid([user.displayName, user.id, user.picture])
            .then(res => done(null, res[0]))
            .catch(console.log);
        } else return done(null, response[0]);
      })
      .catch(console.log);
  });
  
  passport.deserializeUser((user, done) => done(null, user));
  
  app.get("/me", getUser);
  
  app.get(
    "/login",
    passport.authenticate("auth0", {
      // successRedirect: "/",
      successRedirect: "http://localhost:3000/#/",
      // successRedirect: "/#/",
      failureRedirect: "/login"
    })
  );
app.get("/api/test", (req, res) => {
  res.sendStatus(200);
});

//checking on server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
