import "./SideBySide.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

// ✅ Image imports
import painterMobile from "../../../assets/about/sbs-painter-1-m.webp";
import painterDesktop from "../../../assets/about/sbs-painter-1-d.webp";
import stripes from "../../../assets/about/stripes-long.svg";
import profile from "../../../assets/about/profile-2.webp";

export default function SideBySide() {
    useScrollFadeIn();
    return (
        <section id="sbs-1095-1112">
            <div className="cs-container scroll-fade delay-2">
                <div className="cs-image-group scroll-fade delay-3">
                    <picture className="cs-picture">
                        <source media="(max-width: 600px)" srcSet={painterMobile} />
                        <source media="(min-width: 601px)" srcSet={painterDesktop} />
                        <img
                            loading="lazy"
                            decoding="async"
                            src={painterDesktop}
                            alt="painter"
                            width="542"
                            height="608"
                        />
                    </picture>
                    <img
                        className="cs-stripes"
                        loading="lazy"
                        decoding="async"
                        src={stripes}
                        alt="stripes"
                        width="522"
                        height="608"
                        aria-hidden="true"
                    />
                </div>
                <div className="cs-content scroll-fade delay-3">
                    <span className="cs-topper scroll-fade delay-4">Painting since 1984</span>
                    <h2 className="cs-title scroll-fade delay-4">We paint homes</h2>
                    <p className="cs-text scroll-fade delay-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus accusantium quod voluptatum mollitia unde pariatur nam ipsum provident blanditiis.
                    </p>
                    <ul className="cs-list scroll-fade delay-4">
                        <li className="cs-li">Interior and exterior painting for all home types</li>
                        <li className="cs-li">Fully licensed and insured professionals</li>
                        <li className="cs-li">High-quality materials and clean finishes</li>
                        <li className="cs-li">Attention to detail and prep work done right</li>
                        <li className="cs-li">Flexible scheduling and on-time project completion</li>
                    </ul>
                    <div className="cs-info scroll-fade delay-4">
                        <img
                            className="cs-icon"
                            loading="lazy"
                            decoding="async"
                            src={profile}
                            alt="profile"
                            width="52"
                            height="52"
                        />
                        <div className="cs-flex">
                            <span className="cs-name">Justin James</span>
                            <span className="cs-desc">CEO-Founder of STITCH Car Mechanics</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
