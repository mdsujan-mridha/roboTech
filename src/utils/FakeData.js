
import categoryImg01 from "../images/category/Mask group (1).png"
import categoryImg02 from "../images/category/Mask group (2).png"
import categoryImg03 from "../images/category/Mask group (3).png"
import categoryImg04 from "../images/category/Mask group (4).png"
import categoryImg05 from "../images/category/Mask group (5).png"
import categoryImg06 from "../images/category/Mask group (6).png"
import categoryImg07 from "../images/category/Mask group (7).png"
import categoryImg00 from "../images/category/Mask group.png";

import productImg01 from "../images/product/product-01.png";
import productImg02 from "../images/product/product-2.png";
import productImg03 from "../images/product/product-4.png";
import productImg04 from "../images/product/product-03.png";
import productImg05 from "../images/product/product-5.png";

export const categoryList = [
    {
        _id: 1,
        category: "Robotic Arms",
        image: categoryImg00
    },
    {
        _id: 2,
        category: "Robotic Arms",
        image: categoryImg01
    },
    {
        _id: 3,
        category: "Robotic Arms",
        image: categoryImg02
    },
    {
        _id: 4,
        category: "Robotic Arms",
        image: categoryImg03
    },
    {
        _id: 5,
        category: "Robotic Arms",
        image: categoryImg04
    },
    {
        _id: 6,
        category: "Robotic Arms",
        image: categoryImg05
    },
    {
        _id: 7,
        category: "Robotic Arms",
        image: categoryImg06
    },
    {
        _id: 8,
        category: "Robotic Arms",
        image: categoryImg07
    },
    {
        _id: 9,
        category: "Robotic Arms",
        image: categoryImg02
    },
]



export const products = [
    {
        _id: 1,
        name: "Arduino Uno R3 (Original)",
        price: '2230',
        rating: '3.5',
        image: productImg01,
        specifications: [
            { "Model Number": "MK2K3HN/A" },
            { "Model Name": "DEV-00008" },
            { "Connectivity": "WIFI Only" },
            { "Additional Features": "RESET Circuitry, 8 LEDs Interfacing, Buzzer Interfacing, Infrared Interfacing,1-WireCommunication Interfacing,Power Switch,Vcc-GND power pin." },
        ]
    },
    {
        _id: 2,
        name: "Arduino Uno R3 (Original)",
        price: '1600',
        rating: '3.5',
        image: productImg02,
        specifications: [
            { "Model Number": "MK2K3HN/A" },
            { "Model Name": "DEV-00008" },
            { "Connectivity": "WIFI Only" },
            { "Additional Features": "RESET Circuitry, 8 LEDs Interfacing, Buzzer Interfacing, Infrared Interfacing,1-WireCommunication Interfacing,Power Switch,Vcc-GND power pin." },
        ],
        description: [
            "ZIF Socket for PIC16F877A and PIC18F452, with accessible I/O, grouped by PORT.",
            "On board Programmer.",
            "USB connector, connection with PC.",
            "Crystal Oscillator (Default 16MHz). It’s replaceable.",
            "External Supply Socket (5V).",
            "SPI Pinout.",
            "USART Pinout.",
            "Seven Segment Display Interfacing.",
            "LCD Interfacing Connector.",
            "LCD Contrast.",
            "ADC Interfacing.",
            "Push Button Interfacing.",
            "I/O Expander."
        ]
    },
    {
        _id: 3,
        name: "Arduino Uno R3 (Original)",
        price: '2230',
        rating: '5.0',
        image: productImg03,
        specifications: [
            { "Model Number": "MK2K3HN/A" },
            { "Model Name": "DEV-00008" },
            { "Connectivity": "WIFI Only" },
            { "Additional Features": "RESET Circuitry, 8 LEDs Interfacing, Buzzer Interfacing, Infrared Interfacing,1-WireCommunication Interfacing,Power Switch,Vcc-GND power pin." },
        ]
    },
    {
        _id: 4,
        name: "Arduino Uno R3 (Original)",
        price: '2000',
        rating: '4.5',
        image: productImg04,
        specifications: [
            { "Model Number": "MK2K3HN/A" },
            { "Model Name": "DEV-00008" },
            { "Connectivity": "WIFI Only" },
            { "Additional Features": "RESET Circuitry, 8 LEDs Interfacing, Buzzer Interfacing, Infrared Interfacing,1-WireCommunication Interfacing,Power Switch,Vcc-GND power pin." },
        ]
    },
    {
        _id: 5,
        name: "Arduino Uno R3 (Original)",
        price: '2030',
        rating: '4.5',
        image: productImg05,
        specifications: [
            { "Model Number": "MK2K3HN/A" },
            { "Model Name": "DEV-00008" },
            { "Connectivity": "WIFI Only" },
            { "Additional Features": "RESET Circuitry, 8 LEDs Interfacing, Buzzer Interfacing, Infrared Interfacing,1-WireCommunication Interfacing,Power Switch,Vcc-GND power pin." },
        ]
    },
]