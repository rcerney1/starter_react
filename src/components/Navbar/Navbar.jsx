import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

// ✅ Import icons and logo
import phoneIcon from "../../assets/icons/phone-grey.svg";
import clockIcon from "../../assets/icons/clock-grey.svg";
import facebookIcon from "../../assets/icons/face-grey.svg";
import twitterIcon from "../../assets/icons/twit-grey.svg";
import instagramIcon from "../../assets/icons/insta-grey.svg";
import dropdownIcon from "../../assets/icons/chev-down.svg";
import logo from "../../assets/logos/logo.svg";

export default function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [scrollActive, setScrollActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navRef = useRef(null);
    const ulRef = useRef(null);

    const handleToggle = () => {
        setMobileNavOpen((prev) => !prev);
        document.body.classList.toggle("cs-open");
    };

    const handleDropdownToggle = () => {
        setDropdownOpen((prev) => !prev);
    };

    useEffect(() => {
        const onScroll = () => {
            setScrollActive(window.scrollY >= 100);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("scroll", scrollActive);
    }, [scrollActive]);

    useEffect(() => {
        if (ulRef.current) {
            ulRef.current.setAttribute("aria-expanded", mobileNavOpen ? "true" : "false");
        }
    }, [mobileNavOpen]);

    return (
        <header id="cs-navigation" className={mobileNavOpen ? "cs-active" : ""} ref={navRef}>
            <div className="cs-top-bar">
                <div className="cs-top-container">
                    <div className="cs-top-contact">
                        <a href="#" className="cs-top-link">
                            <img className="cs-link-icon" src={phoneIcon} alt="phone icon" />
                            Call us: +84 1985 33 999
                        </a>
                        <a href="#" className="cs-top-link">
                            <img className="cs-link-icon" src={clockIcon} alt="clock icon" />
                            Opening hours: Mon - Sat: 8:00am To 9:00pm
                        </a>
                    </div>
                    <div className="cs-top-social">
                        <a href="#" className="cs-social-link">
                            <img className="cs-social-icon" src={facebookIcon} alt="facebook" />
                        </a>
                        <a href="#" className="cs-social-link">
                            <img className="cs-social-icon" src={twitterIcon} alt="twitter" />
                        </a>
                        <a href="#" className="cs-social-link">
                            <img className="cs-social-icon" src={instagramIcon} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="cs-container">
                <a href="/" className="cs-logo" aria-label="back to home">
                    <img src={logo} alt="logo" />
                </a>

                <nav className="cs-nav" role="navigation">
                    <button className={`cs-toggle ${mobileNavOpen ? "cs-active" : ""}`} onClick={handleToggle} aria-label="mobile menu toggle">
                        <div className="cs-box" aria-hidden="true">
                            <span className="cs-line cs-line1" aria-hidden="true"></span>
                            <span className="cs-line cs-line2" aria-hidden="true"></span>
                            <span className="cs-line cs-line3" aria-hidden="true"></span>
                        </div>
                    </button>

                    <div className="cs-ul-wrapper">
                        <ul id="cs-expanded" className="cs-ul" aria-expanded="false" ref={ulRef}>
                            <li className="cs-li">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? "cs-li-link cs-active" : "cs-li-link")}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="cs-li">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => (isActive ? "cs-li-link cs-active" : "cs-li-link")}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li
                                className={`cs-li cs-dropdown ${dropdownOpen ? "cs-active" : ""}`}
                                onClick={handleDropdownToggle}
                                tabIndex={0}
                            >
                                <span className="cs-li-link">
                                    Services
                                    <img className="cs-drop-icon" src={dropdownIcon} alt="dropdown icon" />
                                </span>
                                <ul className="cs-drop-ul">
                                    <li className="cs-drop-li">
                                        <NavLink
                                            to="/services/interior"
                                            className={({ isActive }) => (isActive ? "cs-li-link cs-drop-link cs-active" : "cs-li-link cs-drop-link")}
                                        >
                                            Service 1
                                        </NavLink>
                                    </li>
                                    <li className="cs-drop-li">
                                        <NavLink
                                            to="/services/exterior"
                                            className={({ isActive }) => (isActive ? "cs-li-link cs-drop-link cs-active" : "cs-li-link cs-drop-link")}
                                        >
                                            Service 2
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="cs-li">
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) => (isActive ? "cs-li-link cs-active" : "cs-li-link")}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            {/* 
                            <li className="cs-li">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => (isActive ? "cs-li-link cs-active" : "cs-li-link")}
                                >
                                    Contact
                                </NavLink>
                            </li> 
                            */}
                        </ul>
                    </div>
                </nav>

                <a href="/contact" className="cs-button-solid cs-nav-button">Contact Us</a>
            </div>
        </header>
    );
}
