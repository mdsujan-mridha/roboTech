import React, { Fragment } from 'react';
import whatsappIcon from "../../images/social/icons8-whatsapp-48.png";
import facebookIcon from "../../images/social/icons8-facebook-48.png";
import instagramIcon from "../../images/social/icons8-instagram-48.png";
import linkedinIcon from "../../images/social/icons8-linkedin-48.png";
import youtubeIcon from "../../images/social/icons8-youtube-48.png";
import printrestIcon from "../../images/social/icons8-pinterest-48.png";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Footer = () => {
    const date = new Date().getFullYear();
    const location = useLocation();

    const socialIconData = [
        { _id: 1, img: whatsappIcon, name: "whatsapp" },
        { _id: 2, img: facebookIcon, name: "facebook" },
        { _id: 3, img: instagramIcon, name: "instagram" },
        { _id: 4, img: linkedinIcon, name: "linkedin" },
        { _id: 5, img: youtubeIcon, name: "youtube" },
        { _id: 6, img: printrestIcon, name: "pinterest" },
    ]

    const renderFooter = () => {
        if (location.pathname === "/products") {
            return (
                <>
                    <footer className="" style={{ backgroundColor: "var(--primary)"}}>
                        <div className='flex flex-wrap justify-between items-center py-10 px-12 w-full'>
                            <div className='w-full lg:w-1/3'>
                                <h1 className='text-white font-bold text-2xl'> About us </h1>
                                <p className='text-sm font-semibold opacity-70 py-5'> Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. </p>
                                <div className='flex gap-4'>
                                    {
                                        socialIconData &&
                                        socialIconData?.map((item) => (
                                            <img src={item?.img} key={item?._id} alt={item?.name} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='w-full lg:w-1/3 justify-center lg:pl-10 items-center'>
                                <h1 className='text-white font-bold text-xl'> Quick Link </h1>
                                <div className='flex flex-col justify-center'>
                                    <Link> Home </Link>
                                    <Link> Products </Link>
                                    <Link> Contact us </Link>
                                    <Link> Blog </Link>
                                    <Link> Privacy & Policy </Link>
                                    <Link> About </Link>
                                    <Link> Terms & condition </Link>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/3'>
                                <h1 className='text-white font-bold text-xl lg:text-right'> Our Location </h1>
                                <div>
                                    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.879261859928!2d90.38311007526873!3d23.751684578669536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8afc5d28667%3A0x7e461056d052d494!2sPanthapath%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1702826389376!5m2!1sen!2sbd" style={{ border: 0, width: "100%", height: '200px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='py-10 flex flex-col justify-center items-center'>
                            <h1> All right reserved by @ RobotTech </h1>
                            copyright - {date}
                        </div>
                    </footer>
                </>
            )
        } else {
            return (
                <>
                    <footer className="" style={{ backgroundColor: "var(--secondary)" }}>
                        <div className='flex flex-wrap justify-between items-center py-10 px-12 w-full'>
                            <div className='w-full lg:w-1/3'>
                                <h1 className='text-white font-bold text-2xl'> About us </h1>
                                <p className='text-sm font-semibold opacity-70 py-5'> Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. </p>
                                <div className='flex gap-4'>
                                    {
                                        socialIconData &&
                                        socialIconData?.map((item) => (
                                            <img src={item?.img} key={item?._id} alt={item?.name} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='w-full lg:w-1/3 justify-center lg:pl-10 items-center'>
                                <h1 className='text-white font-bold text-xl'> Quick Link </h1>
                                <div className='flex flex-col justify-center'>
                                    <Link> Home </Link>
                                    <Link> Products </Link>
                                    <Link> Contact us </Link>
                                    <Link> Blog </Link>
                                    <Link> Privacy & Policy </Link>
                                    <Link> About </Link>
                                    <Link> Terms & condition </Link>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/3'>
                                <h1 className='text-white font-bold text-xl lg:text-right'> Our Location </h1>
                                <div>
                                    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.879261859928!2d90.38311007526873!3d23.751684578669536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8afc5d28667%3A0x7e461056d052d494!2sPanthapath%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1702826389376!5m2!1sen!2sbd" style={{ border: 0, width: "100%", height: '200px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='py-10 flex flex-col justify-center items-center'>
                            <h1> All right reserved by @ RobotTech </h1>
                            copyright - {date}
                        </div>
                    </footer>
                </>
            )
        }
    }
    return renderFooter();

};

export default Footer;