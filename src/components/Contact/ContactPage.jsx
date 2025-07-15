import "./ContactPage.css";
import mailIcon from "/src/assets/icons/phone-grey.svg";
import phoneIcon from "/src/assets/icons/phone-grey.svg";
import pinIcon from "/src/assets/icons/phone-grey.svg";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

export default function ContactPage() {
    useScrollFadeIn();
    return (
        <section id="cs-contact-240">
            <div className="cs-container scroll-fade delay-2">
                <div className="cs-left-section">
                    <div className="cs-content">
                        <span className="cs-topper  scroll-fade delay-3">Contact</span>
                        <h2 className="cs-title scroll-fade delay-3">Get in Touch</h2>
                        <p className="cs-text scroll-fade delay-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ridiculus elementum ullamcorper ipsum porttitor aliquam. Id magna urna ultrices odio pulvinar. Sed ut.
                        </p>
                    </div>
                    <form
                        id="cs-form-240"
                        name="Contact Form"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        action="/"
                        className="scroll-fade delay-5"
                    >
                        <input type="hidden" name="form-name" value="Contact Form" />
                        <p hidden>
                            <label>
                                Don’t fill this out if you're human: <input name="bot-field" />
                            </label>
                        </p>

                        <label className="cs-label">
                            Name
                            <input className="cs-input" required type="text" id="name-240" name="name" placeholder="Name" />
                        </label>
                        <label className="cs-label">
                            Email
                            <input className="cs-input" required type="email" id="email-240" name="email" placeholder="Email" />
                        </label>
                        <label className="cs-label">
                            Phone
                            <input className="cs-input" required type="text" id="phone-240" name="phone" placeholder="Phone" />
                        </label>
                        <label className="cs-label">
                            How Did You Find Us
                            <input className="cs-input" type="text" id="find-240" name="find-us" placeholder="How did you find us?" />
                        </label>
                        <label className="cs-label cs-label-message">
                            Message
                            <textarea className="cs-input cs-textarea" required name="message" id="message-240" placeholder="Write message..."></textarea>
                        </label>
                        <button className="cs-button-solid cs-submit" type="submit">
                            Submit Message Now
                        </button>
                    </form>
                </div>
                <div className="cs-right-section">
                    <ul className="cs-ul scroll-fade delay-3">
                        <li className="cs-li">
                            <picture className="cs-icon-wrapper">
                                <img src={mailIcon} alt="mail icon" className="cs-icon" />
                            </picture>
                            <div className="cs-flex-group">
                                <span className="cs-header">Email</span>
                                <a href="mailto:ryanccerney@gmail.com" className="cs-link">ryanccerney@gmail.com</a>
                            </div>
                        </li>
                        <li className="cs-li">
                            <picture className="cs-icon-wrapper">
                                <img src={phoneIcon} alt="phone icon" className="cs-icon" />
                            </picture>
                            <div className="cs-flex-group">
                                <span className="cs-header">Phone</span>
                                <a href="tel:9256832180" className="cs-link">(925) 683-2180</a>
                            </div>
                        </li>
                        <li className="cs-li">
                            <picture className="cs-icon-wrapper">
                                <img src={pinIcon} alt="address icon" className="cs-icon" />
                            </picture>
                            <div className="cs-flex-group">
                                <span className="cs-header">Address</span>
                                <a href="#" className="cs-link">4025 Rhoda Way, Concord, CA</a>
                            </div>
                        </li>
                    </ul>
                    <div className="cs-picture scroll-fade delay-4">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.98441410718!2d-122.04425292368931!3d37.95414990180646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085612629b66153%3A0x135f374f37d3e12f!2sTaco%20Bell!5e0!3m2!1sen!2sus!4v1752612029499!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: "1rem" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
