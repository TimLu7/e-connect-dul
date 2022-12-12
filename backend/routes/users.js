// Chun-Wei Tseng

import express from "express";
import UserDB from "../db/userDB.js";
const loginrouter = express.Router();

loginrouter.post("/login", async (req, res) => {
    try {
        const user = req.body;
        console.log(user);
        // password -> encrypt the password in here -> store all the thing to mongodb
        const ret = await UserDB.authenticate(user);
        if (ret) {
            req.session.user = user.username;
        }
        res.json({ user: user.username, isLoggedIn: ret });
    } catch (e) {
        console.log(e);
    }
});

loginrouter.get("/getusers", function (req, res) {
    console.log("getusers session user", req.session.user);
    if (req.session.user !== undefined) {
        res.json({ user: req.session.user });
    } else {
        res.json({});
    }
});

loginrouter.get("/logout", function (req, res) {
    req.session.user = undefined;
    console.log("logout session user", req.session.user);
    if (req.session.user === undefined) {
        res.json({ isLoggedOut: true });
    } else {
        res.json({ isLoggedOut: false });
    }
});

export default loginrouter;
