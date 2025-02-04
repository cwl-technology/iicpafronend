import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <header className="main-header-two">
                <nav className="main-menu main-menu-two">
                    <div className="main-menu-two__wrapper">
                        <div className="container">
                            <div className="main-menu-two__wrapper-inner">
                                <div className="main-menu-two__left">
                                    <div className="main-menu-two__logo">
                                        <a href='#'><img src="/assets/images/resources/logo-2-new.webp" alt="" width={120}/></a>
                                    </div>
                                </div>
                                <div className="main-menu-two__main-menu-box">
                                    <a href='#' className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                    <ul className="main-menu__list">
                                        <li>
                                            <a href='/'>Home</a>
                                        </li>
                                        <li>
                                            <a href='#'>About</a>
                                        </li>
                                        {/* <li className="dropdown">
                                            <a href='#'>Pages</a>
                                            <ul className="shadow-box">
                                                <li><a href='#'>Instructors</a></li>
                                                <li><a href='#'>Instructor Carousel</a></li>
                                                <li><a href='#'>Instructor Details</a></li>
                                                <li><a href='#'>Events</a></li>
                                                <li><a href='#'>Event Carousel</a></li>
                                                <li><a href='#'>Event Details</a></li>
                                                <li><a href='#'>Become A Teacher</a></li>
                                                <li><a href='#'>Testimonials</a></li>
                                                <li><a href='#'>Testimonial Carousel</a></li>
                                                <li><a href='#'>Pricing</a></li>
                                                <li><a href='#'>Gallery</a></li>
                                                <li><a href='#'>FAQs</a></li>
                                                <li><a href='#'>404 Error</a></li>
                                            </ul>
                                        </li> */}
                                        <li className="">
                                            <a href='#'>Course</a>
                                            {/* <ul className="shadow-box">
                                                <li><a href='#'>Course</a></li>
                                                <li><a href='#'>Course Carousel</a></li>
                                                <li><a href='#'>Course List</a></li>
                                                <li><a href='#'>Course Details</a></li>
                                            </ul> */}
                                        </li>
                                        {/* <li className="dropdown">
                                            <a href='#'>Shop</a>
                                            <ul className="shadow-box">
                                                <li><a href='#'>Products</a></li>
                                                <li><a href='#'>Product Details</a></li>
                                                <li><a href='#'>Cart</a></li>
                                                <li><a href='#'>Checkout</a></li>
                                                <li><a href='#'>Wishlist</a></li>
                                                <li><a href='#'>Sign Up</a></li>
                                                <li><a href='#'>Login</a></li>
                                            </ul>
                                        </li> */}
                                        <li className="">
                                            <a href='#'>Blog</a>
                                            {/* <ul className="shadow-box">
                                                <li><a href='#'>Blog</a></li>
                                                <li><a href='#'>Blog Carousel</a></li>
                                                <li><a href='#'>Blog List</a></li>
                                                <li><a href='#'>Blog Details</a></li>
                                            </ul> */}
                                        </li>
                                        <li>
                                            <Link href='/jobs'>Jobs</Link>
                                        </li>
                                        <li>
                                            <Link href='/contact'>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="main-menu-two__right">
                                    <div className="main-menu-two__search-box">
                                        <a href='#' className="main-menu-two__search searcher-toggler-box icon-search"></a>
                                    </div>
                                    <div className="main-menu-two__signin-reg">
                                        <div className="main-menu-two__signin-reg-icon">
                                            <span className="icon-user-plus"></span>
                                        </div>
                                        <div className="main-menu-two__signin-reg-content">
                                            <a href='#' className="main-menu-two__signin">Sign in</a>
                                            <a href='#' className="main-menu-two__reg">Register</a>
                                        </div>
                                    </div>
                                    <div className="main-menu-two__support-box">
                                        <p className="main-menu-two__support-text"> <span className="icon-contact"></span> Support
                                        </p>
                                        <h5 className="main-menu-two__support-number"><a href="tel:1212345678900">+12 (123) 456
                                            78900</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header