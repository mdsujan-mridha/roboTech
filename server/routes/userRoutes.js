const express = require("express");
const {
    registerUser,
    loginUser,
    logout
} = require("../controller/userController");

const router = express.Router();

// register user 
router.route("/register").post(registerUser);
// login user 
router.route("/login").post(loginUser);
// logout user 
router.route("/logout").get(logout);


module.exports = router;
