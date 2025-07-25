import "./ServicesPreview.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

// ✅ Import icons
import paintRollerIcon from "../../../assets/home/paint-roller.svg";
import houseIcon from "../../../assets/home/house.svg";
import cabinetIcon from "../../../assets/home/cabinet.svg";
import wallIcon from "../../../assets/home/wall.svg";

export default function ServicesPreview() {
    useScrollFadeIn();

    return (
        <section id="services-1623">
            <div className="cs-container">
                <ul className="cs-card-group">
                    <li className="cs-item scroll-fade delay-2">
                        <a href="/services/interior" className="cs-link">
                            <img
                                className="cs-icon"
                                src={paintRollerIcon}
                                loading="lazy"
                                decoding="async"
                                alt="Paint Roller Icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h2 className="cs-h3 scroll-fade delay-4">Interior Painting</h2>
                            <p className="cs-item-text">
                                Transform your living spaces with clean lines, vibrant colors, and a flawless finish tailored to your home’s style.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item scroll-fade delay-2">
                        <a href="/services/exterior" className="cs-link">
                            <img
                                className="cs-icon"
                                src={houseIcon}
                                loading="lazy"
                                decoding="async"
                                alt="House Paint Icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h2 className="cs-h3 scroll-fade delay-4">Exterior Painting</h2>
                            <p className="cs-item-text">
                                Boost curb appeal and protect your home with long-lasting, weather-resistant paint applied by experienced pros.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item scroll-fade delay-2">
                        <a href="#" className="cs-link">
                            <img
                                className="cs-icon"
                                src={cabinetIcon}
                                loading="lazy"
                                decoding="async"
                                alt="Cabinet Icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h2 className="cs-h3 scroll-fade delay-4">Cabinet Refinishing</h2>
                            <p className="cs-item-text">
                                Give your kitchen or bathroom a fresh, modern look with cabinet painting or staining that’s cost-effective and beautiful.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item scroll-fade delay-2">
                        <a href="#" className="cs-link">
                            <img
                                className="cs-icon"
                                src={wallIcon}
                                loading="lazy"
                                decoding="async"
                                alt="Wall Icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h2 className="cs-h3 scroll-fade delay-4">Drywall Repair & Prep</h2>
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
