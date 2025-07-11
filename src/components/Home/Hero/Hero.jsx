import "./Hero.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

export default function Hero() {
  useScrollFadeIn(); // Initialize animation

  return (
    <section id="hero-1623" className="scroll-fade delay-1">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper scroll-fade delay-2">
            <svg className="cs-chevron" width="49" height="15" viewBox="0 0 49 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M0.621948 7.49889L6.40262 15L10.343 15L4.56231 7.49889L10.343 0L6.40262 0L0.621948 7.49889Z" fill="var(--chevronColor)" />
                <path d="M7.62195 7.49889L13.4026 15L17.343 15L11.5623 7.49889L17.343 0L13.4026 0L7.62195 7.49889Z" fill="var(--chevronColor)" />
                <path d="M14.7789 7.49889L20.5596 15L24.5 15L18.7193 7.49889L24.5 0L20.5596 0L14.7789 7.49889Z" fill="var(--chevronColor)" />
                <path d="M22.7789 7.49889L28.5596 15L32.5 15L26.7193 7.49889L32.5 0L28.5596 0L22.7789 7.49889Z" fill="var(--chevronColor)" />
                <path d="M30.7789 7.49889L36.5596 15L40.5 15L34.7193 7.49889L40.5 0L36.5596 0L30.7789 7.49889Z" fill="var(--chevronColor)" />
                <path d="M38.7789 7.49889L44.5596 15L48.5 15L42.7193 7.49889L48.5 0L44.5596 0L38.7789 7.49889Z" fill="var(--chevronColor)" />
              </g>
            </svg>
            Refresh Your Home's Look
            <svg className="cs-chevron" width="49" height="15" viewBox="0 0 49 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M48.3781 7.49889L42.5974 15L38.657 15L44.4377 7.49889L38.657 0L42.5974 0L48.3781 7.49889Z" fill="var(--chevronColor)" />
                <path d="M41.3781 7.49889L35.5974 15L31.657 15L37.4377 7.49889L31.657 0L35.5974 0L41.3781 7.49889Z" fill="var(--chevronColor)" />
                <path d="M34.2211 7.49889L28.4404 15L24.5 15L30.2807 7.49889L24.5 0L28.4404 0L34.2211 7.49889Z" fill="var(--chevronColor)" />
                <path d="M26.2211 7.49889L20.4404 15L16.5 15L22.2807 7.49889L16.5 0L20.4404 0L26.2211 7.49889Z" fill="var(--chevronColor)" />
                <path d="M18.2211 7.49889L12.4404 15L8.5 15L14.2807 7.49889L8.5 0L12.4404 0L18.2211 7.49889Z" fill="var(--chevronColor)" />
                <path d="M10.2211 7.49889L4.4404 15L0.5 15L6.28071 7.49889L0.5 0L4.4404 0L10.2211 7.49889Z" fill="var(--chevronColor)" />
              </g>
            </svg>
          </span>

          <h1 className="cs-title scroll-fade delay-3">
            Transform Your Home With Expert Painting & Finishing
          </h1>

          <a href="#" className="cs-button-solid scroll-fade delay-4">Get Started</a>

          <div className="cs-corners" aria-hidden="true"></div>
        </div>
      </div>

      <picture className="cs-background scroll-fade delay-5">
        <source media="(max-width: 600px)" srcSet="/images/home/house-painter.jpg" />
        <source media="(min-width: 601px)" srcSet="/images/home/house-painter.jpg" />
        <img
          loading="lazy"
          decoding="async"
          src="/images/home/house-painter.jpg"
          alt="meeting"
          width="1920"
          height="1200"
          aria-hidden="true"
        />
      </picture>
    </section>
  );
}
