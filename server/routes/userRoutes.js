const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,
    getAllUsers,
    getAllUser,
    updateUserRole,
    deleteUser
} = require("../controller/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// register user 
router.route("/register").post(registerUser);
// login user 
router.route("/login").post(loginUser);
// logout user 
router.route("/logout").get(logout);
// forgot password --user or admin 
router.route("/forgot/password").post(forgotPassword);
// reset password 
router.route("/reset/password/:token").put(resetPassword);
// get user details --logged user 
router.route("/me").get(isAuthenticatedUser, getUserDetails);
// update password 
router.route("/update/password").put(updatePassword);
// update user or admin  profile 
router.route("/update/profile").put(updateProfile);
// get all  users -- admin 
router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);
// get a single user by admin 
router.route("/admin/user/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);




module.exports = router;
