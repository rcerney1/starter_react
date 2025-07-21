import "./Stats.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

// ✅ Import all icons and background images
import iconPerson from "../../../assets/icons/person2-gold.svg";
import iconMop from "../../../assets/icons/mop-gold.svg";
import iconThumbs from "../../../assets/icons/thumbs-gold.svg";
import iconAward from "../../../assets/icons/award2-gold.svg";
import bannerMobile from "../../../assets/about/stats-banner-m.webp";
import bannerDesktop from "../../../assets/about/stats-banner-d.webp";

export default function Stats() {
    const stats = [
        {
            icon: iconPerson,
            number: 4,
            desc: "Painters"
        },
        {
            icon: iconMop,
            number: 3140,
            desc: "Projects Completed"
        },
        {
            icon: iconThumbs,
            number: 2260,
            desc: "Satisfied Clients"
        },
        {
            icon: iconAward,
            number: 2,
            desc: "Awards Won"
        }
    ];

    useScrollFadeIn();

    return (
        <div id="stats-340-1112">
            <ul className="cs-card-group">
                {stats.map((stat, index) => (
                    <li className={`cs-item scroll-fade delay-${index + 1}`} key={index}>
                        <picture className="cs-picture">
                            <img
                                className="cs-icon"
                                src={stat.icon}
                                alt=""
                                role="presentation"
                                width="40"
                                height="40"
                                loading="lazy"
                                decoding="async"
                                aria-hidden="true"
                            />
                        </picture>
                        <div className="cs-flex-group">
                            <span className="cs-number">{stat.number}</span>
                            <span className="cs-desc">{stat.desc}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <picture className="cs-background">
                <source media="(max-width: 600px)" srcSet={bannerMobile} />
                <source media="(min-width: 601px)" srcSet={bannerDesktop} />
                <img
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src={bannerDesktop}
                    alt="mechanic"
                    width="1920"
                    height="283"
                />
            </picture>
        </div>
    );
}
