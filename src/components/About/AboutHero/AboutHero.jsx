import "./AboutHero.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

function AboutHero() {
    useScrollFadeIn();

    return (
        <section id="int-hero" className="scroll-fade delay-2">
            <h1 id="home-h" className="scroll-fade delay-3">About Us</h1>
            <picture>
                <source
                    media="(max-width: 600px)"
                    srcSet="/images/about/aboutHero-m.webp"
                />
                <source
                    media="(min-width: 601px)"
                    srcSet="/images/about/aboutHero-d.webp"
                />
                <img
                    aria-hidden="true"
                    decoding="async"
                    src="/images/about/aboutHero-d.webp"
                    alt="company team"
                    loading="eager"
                    width="2500"
                    height="1667"
                />
            </picture>
        </section>
    );
}

export default AboutHero;
