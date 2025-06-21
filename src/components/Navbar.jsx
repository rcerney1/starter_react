import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import initNavbar from "../scripts/navbar";
import "../styles/navbar.css";
import "../styles/core.css";

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    useEffect(() => {
        initNavbar();
    }, []);


    return (
        <header id="cs-navigation">
            <div className="cs-top-bar">
                <div className="cs-top-container">
                    <div className="cs-top-contact">
                        <a href="" className="cs-top-link">
                            <img className="cs-link-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/phone-grey.svg" alt="logo" width="16" height="16" aria-hidden="true" decoding="async" />
                            Call us: +84 1985 33 999
                        </a>
                        <a href="" className="cs-top-link">
                            <img className="cs-link-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/clock-grey.svg" alt="logo" width="20" height="20" aria-hidden="true" decoding="async" />
                            Opening hours: Mon - Sat: 8:00am To 9:00pm
                        </a>
                    </div>
                    <div className="cs-top-social">
                        <a href="" className="cs-social-link">
                            <img className="cs-social-icon" src="src/assets/facebook.svg" alt="logo" width="12" height="12" aria-hidden="true" decoding="async" />
                        </a>
                        <a href="" className="cs-social-link">
                            <img className="cs-social-icon" src="src/assets/twitter.svg" alt="logo" width="12" height="12" aria-hidden="true" decoding="async" />
                        </a>
                        <a href="" className="cs-social-link">
                            <img className="cs-social-icon" src='src/assets/linkedin.svg' alt="logo" width="2000" height="200" aria-hidden="true" decoding="async" />
                        </a>
                        
                    </div>
                </div>
            </div>
            <div className="cs-container">
                <a href="" className="cs-logo" aria-label="back to home">
                    <img src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Logos/consulting-logo.svg" alt="logo" width="197" height="43" aria-hidden="true" decoding="async" />
                </a>
                <nav className="cs-nav" role="navigation">
                    <button className="cs-toggle" aria-label="mobile menu toggle">
                        <div className="cs-box" aria-hidden="true">
                            <span className="cs-line cs-line1" aria-hidden="true"></span>
                            <span className="cs-line cs-line2" aria-hidden="true"></span>
                            <span className="cs-line cs-line3" aria-hidden="true"></span>
                        </div>
                    </button>
                    <div className="cs-ul-wrapper">
                        <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
                            <li className="cs-li">
                                <a href="" className="cs-li-link cs-active">Home</a>
                            </li>
                            <li className="cs-li">
                                <a href="" className="cs-li-link">About</a>
                            </li>
                            <li className="cs-li cs-dropdown" tabIndex="0">
                                <span className="cs-li-link">
                                    Services
                                    <img className="cs-drop-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/chev-down.svg" alt="dropdown icon" width="15" height="15" decoding="async" aria-hidden="true" />
                                </span>
                                <ul className="cs-drop-ul">
                                    <li className="cs-drop-li">
                                        <a href="" className="cs-li-link cs-drop-link">Housing</a>
                                    </li>
                                    <li className="cs-drop-li">
                                        <a href="" className="cs-li-link cs-drop-link">Food Banks</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="cs-li">
                                <a href="" className="cs-li-link">Blog</a>
                            </li>
                            <li className="cs-li">
                                <a href="" className="cs-li-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <a href="" className="cs-button-solid cs-nav-button">Contact Us</a>
            </div>
        </header>
    );
}
