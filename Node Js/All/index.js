import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import passport from "passport";
import session from "express-session";
import passportLocalMongoose from "passport-local-mongoose";
import LocalStrategy from "passport-local";

dotenv.config();

const curPath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(curPath);
const pubPath = path.join(__dirname, "public");
const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(pubPath));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://0.0.0.0/userDB");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose); // for hash and salt and save into database

const User = new mongoose.model("users", userSchema);

passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


let isUserExist;

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/secrets",(req,res)=>{
  if(req.isAuthenticated())
  {
    res.render("secrets")
  }
  else {
    res.redirect("/login")
  }
})

app.post("/register",(req, res) => {
  User.register(
    { username: req.body.email },
    req.body.password,
    (err, user) => {
      if (err) {
        let userExistError = { error: "user already exists with this email" };
        res.render("register",{userExistError});
      } else {
        passport.authenticate('local', { failureRedirect: '/login' },(req,res)=>{
          res.redirect("/secrets")
        })

      }
    }
  );


});

app.post("/login", async (req, res) => {
  let userLoginError;
  //   isUserExist = await user.findOne({email:req.body.email})
  //   if(isUserExist) {
  //     if(isUserExist.password == req.body.password)
  //      res.render("secrets")
  //     else
  //       {
  //         userLoginError = {"error":"Incorrect password"}
  //     res.render("login",{userLoginError})
  //       }
  // } else {
  //   userLoginError = {"error":"Account not registered with this email"}
  //     res.render("login",{userLoginError})
  //   }
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
