import { Link } from "react-router-dom";
import "./CTA.css";

// ✅ Import all background and graphic images
import paintMobile from "../../../assets/home/paint2-m.webp";
import paintDesktop from "../../../assets/home/paint2-d.webp";
import splashMobile from "../../../assets/home/splash-m.webp";
import splashTablet from "../../../assets/home/splash-t.webp";
import splashDesktop from "../../../assets/home/splash-d.webp";

export default function CTA() {
    return (
        <section id="cta-1132">
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper">Need a Fresh Coat?</span>
                    <h2 className="cs-title">
                        Let’s bring your vision to life with expert home painting
                    </h2>
                    <Link to="/contact" className="cs-button-solid">
                        Contact Us
                    </Link>
                </div>
            </div>

            <picture className="cs-background">
                <source
                    media="(max-width: 600px)"
                    srcSet={paintMobile}
                />
                <source
                    media="(min-width: 601px)"
                    srcSet={paintDesktop}
                />
                <img
                    loading="lazy"
                    decoding="async"
                    src={paintDesktop}
                    alt="family"
                    width="1280"
                    height="568"
                />
            </picture>

            <picture className="cs-graphic cs-light">
                <source
                    media="(max-width: 600px)"
                    srcSet={splashMobile}
                />
                <source
                    media="(max-width: 1023px)"
                    srcSet={splashTablet}
                />
                <source
                    media="(min-width: 1024px)"
                    srcSet={splashDesktop}
                />
                <img
                    loading="lazy"
                    decoding="async"
                    src={splashDesktop}
                    alt="graphic"
                    width="1920"
                    height="108"
                    aria-hidden="true"
                />
            </picture>
        </section>
    );
}
