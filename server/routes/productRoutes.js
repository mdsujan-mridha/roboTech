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


const router = express.Router();

// create product --admin
router.route("/admin/product/new").post(createProduct);
// get all products 
router.route("/products").get(getAllProducts);
// get a single product 
router.route("/product/:id").get(getProductsDetails);
// update product --admin
router.route("/admin/product/:id").put(updateProduct);
// delete product -- admin 
router.route("/admin/product/:id").delete(deleteProduct);
// get all product by admin 
router.route("/admin/products").get(getAdminAllProducts);

// product review 
// create new review 
router.route("/review").put(createProductReview);
// delete and get product by admin 
router.route("/admin/review").get(getProductReviews).delete(deleteReview);

module.exports = router;