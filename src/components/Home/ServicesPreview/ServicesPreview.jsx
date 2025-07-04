import "./ServicesPreview.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

export default function ServicesPreview() {
    useScrollFadeIn();

    return (
        <section id="services-1623">
            <div className="cs-container">
                <ul className="cs-card-group">
                    <li className="cs-item scroll-fade delay-2">
                        <a href="#" className="cs-link">
                            <img
                                className="cs-icon"
                                src="/icons/paint-roller.svg"
                                loading="lazy"
                                decoding="async"
                                alt="Paint Roller Icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h3 className="cs-h3 cs-h3 scroll-fade delay-4">Interior Painting</h3>
                            <p className="cs-item-text">
                                Transform your living spaces with clean lines, vibrant colors, and a flawless finish tailored to your home’s style.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item scroll-fade delay-2">
                        <a href="#" className="cs-link">
                            <img
                                className="cs-icon"
                                src="/icons/house-paint.svg"
                                loading="lazy"
                                decoding="async"
                                alt="House Paint Icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h3 className="cs-h3 cs-h3 scroll-fade delay-4">Exterior Paiting</h3>
                            <p className="cs-item-text">
                                Boost curb appeal and protect your home with long-lasting, weather-resistant paint applied by experienced pros.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item scroll-fade delay-2">
                        <a href="#" className="cs-link">
                            <img
                                className="cs-icon"
                                src="/icons/cabinet.svg"
                                loading="lazy"
                                decoding="async"
                                alt="Cabinet Icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h3 className="cs-h3 scroll-fade delay-4"> Cabinet Refinishing</h3>
                            <p className="cs-item-text">
                                Give your kitchen or bathroom a fresh, modern look with cabinet painting or staining that’s cost-effective and beautiful.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item scroll-fade delay-2">
                        <a href="#" className="cs-link">
                            <img
                                className="cs-icon"
                                src="/icons/wall-repair.svg"
                                loading="lazy"
                                decoding="async"
                                alt="Wall Icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h3 className="cs-h3 cs-h3 scroll-fade delay-4">Drywall Repair & Prep</h3>
                            <p className="cs-item-text">
                                We fix cracks, dents, and holes to create a perfectly smooth surface before we ever pick up a brush.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
