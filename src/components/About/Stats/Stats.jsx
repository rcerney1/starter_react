import "./Stats.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

export default function Stats() {
    const stats = [
        {
            icon: "person2-gold.svg",
            number: 4,
            desc: "Painters"
        },
        {
            icon: "mop-gold.svg",
            number: 3140,
            desc: "Projects Completed"
        },
        {
            icon: "thumbs-gold.svg",
            number: 2260,
            desc: "Satisfied Clients"
        },
        {
            icon: "award2-gold.svg",
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
                                src={`https://csimg.nyc3.digitaloceanspaces.com/Stats/${stat.icon}`}
                                alt="icon"
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
                <source media="(max-width: 600px)" srcSet="/images/about/stats-banner.webp" />
                <source media="(min-width: 601px)" srcSet="/images/about/stats-banner.webp" />
                <img
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="/images/about/stats-banner.webp"
                    alt="mechanic"
                    width="1920"
                    height="283"
                />
            </picture>
        </div>
    );
}
