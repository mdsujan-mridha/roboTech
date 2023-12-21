import { ExitToApp, ListAlt, Person, ShoppingCart } from '@mui/icons-material';
import { Backdrop, SpeedDial, SpeedDialAction } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImg from "../../images/profileImage.png";
import "./Header.css";
import { logout } from '../../actions/userAction';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';


const UserOption = ({ user }) => {

    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();





    const options = [
        { icon: <ListAlt />, name: "Orders", func: orders },
        { icon: <Person />, name: "Profile", func: account },
        {
            icon: (
                <ShoppingCart
                    style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
                />
            ),
            name: `Cart(${cartItems.length})`,
            func: cart,
        },
        { icon: <ExitToApp />, name: "Logout", func: logoutUser },
    ];
    // if(user.role === "admin"){
    //     options.unshift({
    //         icon:<Dashboard/>,
    //         name:"Dashboard",
    //         func:dashboard
    //     })
    // }
    function dashboard() {
        navigate("/admin/dashboard")
    }

    function account() {
        navigate("/account")
    }

    function orders() {
        navigate("/orders")
    }
    function logoutUser() {
        dispatch(logout());
        toast.success("Logout Successfully");

    }
    function cart() {
        navigate("/cart");
    }

    return (
        <Fragment>
            <Backdrop open={open} style={{ zIndex: "99" }} />
            <SpeedDial
                ariaLabel='SpeedDial tooltip example'
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                direction="down"
                className='speedDial'
                style={{ zIndex: "99" }}
                icon={
                    <img
                        className='speedDialIcon'
                        src={profileImg}
                        alt="Profile"
                    />
                }
            >
                {
                    options.map((item) => (
                        <SpeedDialAction
                            key={item?.name}
                            icon={item?.icon}
                            onClick={item?.func}
                            tooltipTitle={item?.name}
                            tooltipOpen={window.innerWidth <= 600 ? true : false}
                        />
                    ))
                }
            </SpeedDial>
        </Fragment>
    );
};

export default UserOption;