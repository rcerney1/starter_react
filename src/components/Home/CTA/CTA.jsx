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
                    srcSet="/images/home/paint2.jpg"
                />
                <source
                    media="(min-width: 601px)"
                    srcSet="/images/home/paint2.jpg"
                />
                <img
                    loading="lazy"
                    decoding="async"
                    src="/images/home/paint2.jpg"
                    alt="family"
                    width="1280"
                    height="568"
                />
            </picture>

            <picture className="cs-graphic cs-light">
                <source
                    media="(max-width: 600px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/splash-m.png"
                />
                <source
                    media="(max-width: 1023px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/splash-t.png"
                />
                <source
                    media="(min-width: 1024px)"
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/splash.png"
                />
                <img
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/splash.png"
                    alt="graphic"
                    width="1920"
                    height="108"
                    aria-hidden="true"
                />
            </picture>
        </section>
    );
}
