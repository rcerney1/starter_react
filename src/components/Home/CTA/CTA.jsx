import { Link } from "react-router-dom";
import "./CTA.css";

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
                    srcSet="src/assets/home/paint2-m.webp"
                />
                <source
                    media="(min-width: 601px)"
                    srcSet="/src/assets/home/paint2-d.webp"
                />
                <img
                    loading="lazy"
                    decoding="async"
                    src="src/assets/home/paint2-d.webp"
                    alt="family"
                    width="1280"
                    height="568"
                />
            </picture>

            <picture className="cs-graphic cs-light">
                <source
                    media="(max-width: 600px)"
                    srcSet="src/assets/home/splash-m.webp"
                />
                <source
                    media="(max-width: 1023px)"
                    srcSet="src/assets/home/splash-t.webp"
                />
                <source
                    media="(min-width: 1024px)"
                    srcSet="src/assets/home/splash-d.webp"
                />
                <img
                    loading="lazy"
                    decoding="async"
                    src="src/assets/home/splash-d.webp"
                    alt="graphic"
                    width="1920"
                    height="108"
                    aria-hidden="true"
                />
            </picture>
        </section>
    );
}
