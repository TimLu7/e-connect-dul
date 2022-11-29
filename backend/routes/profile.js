// Chun-Wei Tseng

import express from "express";
import UserDB from "../db/userDB.js";
const profilerouter = express.Router();

profilerouter.get("/getProfile", async (req, res) => {
  console.log("get Profile in progress - router");
  try {
    const ret = await UserDB.getUser(req.session.user);
    console.log("Get Profile Successfully", ret);
    res.json(ret);
  } catch (e) {
    console.log(e);
  }
});

profilerouter.post("/saveProfile", async (req, res) => {
  console.log("Update Profile in progress - router");
  try {
    const user = req.session.user;
    console.log("user1111 session", user);
    const ret = await UserDB.updateUser(user, req.body);
    console.log("Profile Update Successfully");
    res.json({ isUpdated: ret });
  } catch (e) {
    console.log(e);
  }
});

profilerouter.post("/deleteUser", async (req, res) => {
  console.log("Delete user in progress - router");
  try {
    const user = req.session.user;
    const ret = await UserDB.deleteUser(user);
    if (ret) {
      res.json({ isDeleted: true });
    } else {
      res.json({ isDeleted: false });
    }
  } catch (e) {
    console.log(e);
  }
});

export default profilerouter;
