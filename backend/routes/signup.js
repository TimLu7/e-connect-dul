// Chun-Wei Tseng

import express from "express";
import UserDB from "../db/userDB.js";
import bcrypt from "bcryptjs";
const signuprouter = express.Router();

signuprouter.post("/signup", async (req, res) => {
  console.log("Sign up in progress");
  try {
    const user = req.body;
    const password = user.password;
    const hash = await bcrypt.hash(password, 10);
    const ret = await UserDB.createUser({
      username: user.username,
      email: user.email,
      password: hash,
    });
    if (ret) {
      console.log("User already exist");
      res.json({ isRegistered: true });
    } else {
      console.log("Register successful");
      res.json({ isRegistered: false });
    }
    // console.log("signup ret", ret);
    // res.json({ isRegistered: ret });
    // res.redirect("/login");
  } catch (e) {
    console.log(e);
  }
});

export default signuprouter;
