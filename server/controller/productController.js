const Product = require("../models/productModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const ApiFeatures = require("../utils/apiFeatures");


// create product 
exports.createProduct = catchAsyncError(async (req, res, next) => {
    try {
        let specs = [];
        if (Array.isArray(req.body.specifications)) {
            specs = req.body.specifications.map((s) => {
                return JSON.parse(s);
            });
        }
        req.body.specifications = specs;

        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        });
    } catch (error) {
        // Handle any errors that occurred during Cloudinary uploads, parsing, or Product creation
        res.status(500).json({
            success: false,
            message: 'Product creation failed'
        });
    }
});

// get all products 
exports.getAllProducts = catchAsyncError(async (req, res, next) => {

    const resultPerPage = 6;
    const productsCount = await Product.countDocuments();
    // console.log(req.query);

    const searchFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter();

    let products = await searchFeature.query;
    let filteredProductsCount = products.length;

    searchFeature.pagination(resultPerPage);

    products = await searchFeature.query.clone();

    res.status(200).json({
        success: true,
        products,
        productsCount,
        resultPerPage,
        filteredProductsCount,
    });
});

// get a single products 
exports.getProductsDetails = catchAsyncError(async (req, res, next) => {
    // find a product on database using product id 
    const product = await Product.findById(req.params.id);
    // if product not found 
    if (!product) {
        return next(new ErrorHandler("Product Not found", 404));
    }
    res.status(200).json({
        success: true,
        product,
    });
});


// update product 
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    // find product by admin 
    let product = await Product.findById(req.params.id);
    // if product not found with this id then send a error message with satus code 
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    // add coudinary for product image update 

    // update product specification 
    let specs = [];
    req.body.specifications.forEach((s) => {
        specs.push(JSON.parse(s))
    });
    req.body.specifications = specs;
    req.body.user = req.user.id;
    // get update from body and update product 
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(201).json({
        success: true,
        product
    })

});

// delete product --admin 
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    // find product by id
    const product = await Product.findById(req.params.id);
    // if product not found then send a error message 
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    // if product found then delete from database and send success message 
    await product.deleteOne();
    // send success message 
    res.status(201).json({
        success: true,
        message: "Product Delete successfully"
    })
})

// get all product admin 
exports.getAdminAllProducts = catchAsyncError(async (req, res, next) => {
    // find product on database 
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    });
});


// create new review or update review 
exports.createProductReview = catchAsyncError(async (req, res, next) => {
    const { rating, comment, productId } = req.body;
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    };

    // find product by id
    const product = await Product.findById(productId);
    // find review 
    const isReviewed = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );
    //  if have a review then  
    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (req.rating = rating); (rev.comment = comment);
        });
        // if no review then push a review 
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }
    let avg = 0;
    product.reviews.forEach((rev) => {
        avg += rev.rating;
    });
    // calculate avg review 
    product.ratings = avg / product.reviews.length;
    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    })
});

// get all reviews 
exports.getProductReviews = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.id);
    //   here i use query bcz I need to find review from product object 
    if (!product) {
        return next(new ErrorHandler(`Product not found`, 404));
    }
    res.status(200).json({
        success: true,
        reviews: product.reviews,
    })

})
// delete review --admin
exports.deleteReview = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
    if (!product) {
        return next(new ErrorHandler(`product not found`, 404));
    }
    const reviews = product.reviews.filter(
        (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;
    reviews.forEach((rev) => {
        avg += rev.rating;
    });
    let ratings = 0;
    if (reviews.length === 0) {
        ratings = 0;
    } else {
        ratings = avg / reviews.length;

    }

    const numOfReviews = reviews.length;
    await Product.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false
        }

    );
    res.status(200).json({
        success: true,
    });
});

