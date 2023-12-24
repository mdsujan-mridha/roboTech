const express = require("express");
const {
    createProduct,
    getAllProducts,
    getProductsDetails,
    updateProduct,
    deleteProduct,
    getAdminAllProducts,
    createProductReview,
    getProductReviews,
    deleteReview
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth")

const router = express.Router();

// create product --admin
router.route("/admin/product/new").post(createProduct);
// get all products 
router.route("/products").get(getAllProducts);
// get a single product 
router.route("/product/:id").get(getProductsDetails);
// update product --admin
router.route("/admin/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
// delete product -- admin 
router.route("/admin/product/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
// get all product by admin 
router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminAllProducts);

// product review 
// create new review 
router.route("/review").put(isAuthenticatedUser, createProductReview);
// delete and get product by admin 
router.route("/admin/review").get(isAuthenticatedUser, authorizeRoles("admin"), getProductReviews).delete(deleteReview);

module.exports = router;