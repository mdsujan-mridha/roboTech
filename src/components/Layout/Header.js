import { ReactNavbar } from 'overlay-navbar';
import React from 'react';
import { FaUserAlt } from "react-icons/fa"
import { FiSearch } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import logo from "../../images/logo.png";
const Header = () => {
    return (
        <ReactNavbar
            burgerColorHover="#eb4034"
            logo={logo}
            logoWidth="20vmax"
            navColor1="#222222"
            logoHoverSize="10px"
            logoHoverColor="#eb4034"
            burgerColor="white"
            link1Text="Home"
            link2Text="Products"
            link3Text="Contact"
            link4Text="About"
            link5Text="Blog"
            link1Url="/"
            link2Url="/products"
            link3Url="/contact"
            link4Url="/about"
            link5Url="/blog"
            link1Size="1.3vmax"
            // link1Color: "rgba(35, 35, 35,0.8)",
            link1Color="#FFFFFF"
            link5Color="#FFFFFF"
            nav1justifyContent="flex-end"
            nav2justifyContent="flex-end"
            nav3justifyContent="flex-start"
            nav4justifyContent="flex-start"
            link1ColorHover="#eb4034"
            link1Margin="1vmax"
            searchIconUrl="/search"
            profileIconUrl="/login"
            profileIconColor="white"
            searchIconColor="white"
            cartIconColor="white"
            profileIconColorHover="#eb4034"
            searchIconColorHover="#eb4034"
            cartIconColorHover="#eb4034"

            cartIconMargin="1vmax"
            cartIcon={true}
            CartIconElement={BsCartPlus}
            searchIcon={true}
            SearchIconElement={FiSearch}
            profileIcon={true}
            ProfileIconElement={FaUserAlt}
        />
    );
};


export default Header;