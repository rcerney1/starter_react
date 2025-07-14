import "./AboutPreview.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";


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
                                <li className="cs-li">
                                    <img className="cs-icon" src="src/assets/home/diamond.svg" alt="diamond" />
                                    <p className="cs-item-text"><strong>Expert Craftsmanship:</strong> Decades of experience ensure every detail is perfect.</p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src="src/assets/home/diamond.svg" alt="diamond" />
                                    <p className="cs-item-text"><strong>Premium Materials:</strong> We use only the highest-quality products for lasting results.</p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src="src/assets/home/diamond.svg" alt="diamond" />
                                    <p className="cs-item-text"><strong>Expert Craftsmanship:</strong> Decades of experience ensure every detail is perfect.</p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src="src/assets/home/diamond.svg" alt="diamond" />
                                    <p className="cs-item-text"><strong>Expert Craftsmanship:</strong> Decades of experience ensure every detail is perfect.</p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src="src/assets/home/diamond.svg" alt="diamond" />
                                    <p className="cs-item-text"><strong>Expert Craftsmanship:</strong> Decades of experience ensure every detail is perfect.</p>
                                </li>
                            </ul>
                            <a href="" className="cs-button-solid">Read More</a>
                        </div>
                        <div className="cs-image-group">
                            <ul className="cs-card-group">
                                <li className="cs-item scroll-fade delay-4">
                                    <img className="cs-item-icon" src="src/assets/home/building-white.svg" alt="building icon" />
                                    <span className="cs-number">
                                        50+<span className="cs-desc">Communities Served</span>
                                    </span>
                                </li>
                                <li className="cs-item black-variant scroll-fade delay-4">
                                    <img className="cs-item-icon" src="src/assets/home/trophy-white.svg" alt="trophy icon" />
                                    <span className="cs-number">
                                        98%<span className="cs-desc">Customer Satisfaction Rate</span>
                                    </span>   
                                </li>
                            </ul>
                            <picture className="cs-picture">
                                <source media="(max-width: 600px)" srcSet="src/assets/home/painter-m.webp" />
                                <source media="(min-width: 601px)" srcSet="src/assets/home/painter-d.webp" />
                                <img src="src/assets/home/painter-d.webp" alt="construction site" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <img className="cs-floater scroll-fade delay-2" src="src/assets/home/paint-brush.webp" alt="paint brush" />
        </section>
    );
}
