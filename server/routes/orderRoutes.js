const express = require("express");
const {
    newOrder,
    getSingleOrder,
    getAllOrders,
    myOrder,
    deleteOrder,
    updateOrder
} = require("../controller/orderController");


const router = express.Router();

// create new order 
router.route("/order/new").post(newOrder);
// get order details --admin
router.route("/order/:id").get(getSingleOrder);
// get all orders --admin 
router.route("/admin/orders").get(getAllOrders);
// delete and update order -- admin 
router.route("/admin/order/:id")
    .delete(deleteOrder)
    .put(updateOrder);
// get logged user order 
router.route("/orders/me").get(myOrder);



module.exports = router;