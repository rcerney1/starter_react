import "./AboutPreview.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";


import diamondIcon from "../../../assets/home/diamond.svg";
import buildingIcon from "../../../assets/home/building-white.svg";
import trophyIcon from "../../../assets/home/trophy-white.svg";
import painterMobile from "../../../assets/home/painter-m.webp";
import painterDesktop from "../../../assets/home/painter-d.webp";
import paintBrush from "../../../assets/home/paint-brush.webp";

export default function AboutPreview() {
    useScrollFadeIn();

    return (
        <section id="sbs-2277">
            <div className="cs-container scroll-fade delay-2">
                <div className="cs-content">
                    <div className="cs-header scroll-fade delay-4">
                        <span className="cs-topper">Why Choose Us</span>
                        <h2 className="cs-title">Why Homeowners Trust Company Name </h2>
                    </div>
                    <div className="cs-wrapper">
                        <div className="cs-flex">
                            <p className="cs-text">
                                Choose Platinum Craft Exteriors for expert craftsmanship and personalized service. With 5 years of experience, we provide reliable, high-quality exterior solutions that exceed your expectations.
                            </p>
                            <ul className="cs-ul">
                                {[...Array(5)].map((_, i) => (
                                    <li className="cs-li" key={i}>
                                        <img className="cs-icon" src={diamondIcon} alt="diamond" />
                                        <p className="cs-item-text">
                                            <strong>Expert Craftsmanship:</strong> Decades of experience ensure every detail is perfect.
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <a href="/about" className="cs-button-solid">Read More</a>
                        </div>
                        <div className="cs-image-group">
                            <ul className="cs-card-group">
                                <li className="cs-item scroll-fade delay-4">
                                    <img className="cs-item-icon" src={buildingIcon} alt="building icon" />
                                    <span className="cs-number">
                                        50+<span className="cs-desc">Communities Served</span>
                                    </span>
                                </li>
                                <li className="cs-item black-variant scroll-fade delay-4">
                                    <img className="cs-item-icon" src={trophyIcon} alt="trophy icon" />
                                    <span className="cs-number">
                                        98%<span className="cs-desc">Customer Satisfaction Rate</span>
                                    </span>
                                </li>
                            </ul>
                            <picture className="cs-picture">
                                <source media="(max-width: 600px)" srcSet={painterMobile} />
                                <source media="(min-width: 601px)" srcSet={painterDesktop} />
                                <img src={painterDesktop} alt="construction site" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <img className="cs-floater scroll-fade delay-2" src={paintBrush} alt="paint brush" />
        </section>
    );
}
