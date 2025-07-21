import { Link } from "react-router-dom";
import "./Footer.css";

// ✅ Import logo
import logo from "../../assets/logos/logo2.svg";

export default function Footer() {
    return (
        <footer id="footer-2345">
            <div className="cs-container">
                {/* 
                <div className="cs-cta">
                    <h2 className="cs-title">
                        Ready to Transform Your Home?
                        Leave us a message and a team member will reach out shortly. We’re excited to bring your vision to life with a fresh coat of paint!
                    </h2>
                    <Link to="/contact" className="cs-button-solid">
                        Contact Us Today!
                    </Link>
                </div> 
                */}

                <div className="cs-wrapper">
                    <div className="cs-content">
                        <Link to="/" className="cs-logo">
                            <img
                                className="cs-logo-img"
                                src={logo}
                                alt="logo"
                                width="174"
                                height="28"
                                loading="lazy"
                                decoding="async"
                            />
                        </Link>

                        <p className="cs-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repudiandae nemo quo, ea animi libero facilis voluptates.
                        </p>

                        <ul className="cs-nav">
                            <li className="cs-nav-li">
                                <Link to="/" className="cs-nav-link">Home</Link>
                            </li>
                            <li className="cs-nav-li">
                                <Link to="/about" className="cs-nav-link">About</Link>
                            </li>
                            <li className="cs-nav-li">
                                <Link to="/services" className="cs-nav-link">Services</Link>
                            </li>
                            <li className="cs-nav-li">
                                <Link to="/projects" className="cs-nav-link">Projects</Link>
                            </li>
                            <li className="cs-nav-li">
                                <Link to="/contact" className="cs-nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <ul className="cs-ul">
                        <li className="cs-li">
                            <span className="cs-header">Phone Number</span>
                            <a href="tel:+15552866985" className="cs-contact">+1 555-555-5555</a>
                        </li>
                        <li className="cs-li">
                            <span className="cs-header">Email Address</span>
                            <a href="mailto:Template@gmail.com" className="cs-contact">Template@gmail.com</a>
                        </li>
                        <li className="cs-li">
                            <span className="cs-header">Office Hours</span>
                            <span className="cs-contact">Mon - Sat <br />9:00 am - 6:00 pm</span>
                        </li>
                        <li className="cs-li">
                            <span className="cs-header">Office Address</span>
                            <span className="cs-contact">
                                5555 Placeholder Rd, <br />
                                Somewhere, CA, 12345
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="cs-bottom">
                    <span className="cs-copyright">
                        © Copyright {new Date().getFullYear()} - <Link className="cs-copyright-link" to="/">Company Name</Link>
                    </span>
                    <div className="cs-terms">
                        <Link to="/terms" className="cs-copyright-link">Terms & Conditions</Link>
                        <span className="cs-divider">|</span>
                        <Link to="/privacy" className="cs-copyright-link">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
