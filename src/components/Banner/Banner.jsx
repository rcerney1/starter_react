import "./Banner.css";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

export default function Banner({ title, breadcrumbs = [] }) {
    return (
        <div id="banner-1106">
            <div className="cs-container scroll-fade delay-2">
                <span className="cs-int-title">{title}</span>
                {breadcrumbs.length > 0 && (
                    <div className="cs-breadcrumbs">
                        {breadcrumbs.map((crumb, index) => (
                            <a
                                key={index}
                                href={crumb.href}
                                className={`cs-link${index === breadcrumbs.length - 1 ? " cs-active" : ""}`}
                            >
                                {crumb.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <picture className="cs-background scroll-fade delay-2">
                <source
                    media="(max-width: 600px)"
                    srcSet="/src/assets/about/aboutHero-m.webp"
                />
                <source
                    media="(min-width: 601px)"
                    srcSet="/src/assets/about/aboutHero-d.webp"
                />
                <img
                    decoding="async"
                    src="/src/assets/about/aboutHero-d.webp"
                    alt="Freshly painted interior wall"
                    width="1280"
                    height="568"
                    aria-hidden="true"
                />
            </picture>
        </div>
    );
}
