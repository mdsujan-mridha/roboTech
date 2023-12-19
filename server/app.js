const express = require("express");
const errorMiddleware = require("./middleware/error");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// default middleware 
const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// config with env 
dotenv.config({ path: "/config/config.env" });

// user api endpoint 
const user = require("./routes/userRoutes");
// product routes 
const product = require("./routes/productRoutes");
// import order routes 
const order = require("./routes/orderRoutes");
app.use("/api/v1", user);
// products
app.use("/api/v1", product);
// order routes 
app.use("/api/v1",order);

app.use(errorMiddleware);
module.exports = app;