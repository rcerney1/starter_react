import "./GalleryPreview.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

const galleryImages = [
    {
        src: "https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign.jpeg",
        tag: "Hardscaping",
        project: "Stonemere Patio Retreat"
    },
    {
        src: "https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign.jpeg",
        tag: "Exterior",
        project: "Modern Brick Facade"
    },
    {
        src: "https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign.jpeg",
        tag: "Interior",
        project: "Cozy Living Room Revamp"
    }
];

export default function GalleryPreview() {
    useScrollFadeIn();

    return (
        <section id="gallery-2297">
            <div className="cs-container">
                <div className="cs-content">
                    <div className="cs-flex">
                        <h2 className="cs-title scroll-fade delay-3">Featured Projects</h2>
                    </div>
                </div>
                <div className="cs-gallery-wrapper">
                    <div className="cs-gallery scroll-fade delay-1">
                        {galleryImages.map((image, i) => (
                            <a className={`cs-image`} href="#" key={`gallery-${i}`}>
                                <picture className='cs-picture'>
                                    <source media="(max-width: 600px)" srcSet={image.src} />
                                    <source media="(min-width: 601px)" srcSet={image.src} />
                                    <img
                                        loading="lazy"
                                        decoding="async"
                                        src={image.src}
                                        alt={image.project}
                                        width="305"
                                        height="400"
                                    />
                                </picture>
                                <div className="cs-info">
                                    <span className="cs-tag">{image.tag}</span>
                                    <span className="cs-project">{image.project}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="cs-button-group scroll-fade delay-5">
                <a href="/projects" className="cs-button-solid">
                    Check Out All Projects
                </a>
            </div>



            <div className="cs-stats">
                <div className="cs-stat scroll-fade delay-2">
                    <span className="cs-number">15+</span>
                    <span className="cs-desc">Years of Experience</span>
                </div>
                <div className="cs-stat scroll-fade delay-3">
                    <span className="cs-number">98%</span>
                    <span className="cs-desc">Client Satisfaction Rate</span>
                </div>
                <div className="cs-stat scroll-fade delay-4">
                    <span className="cs-number">10+</span>
                    <span className="cs-desc">Expert Team Members</span>
                </div>
                <div className="cs-stat scroll-fade delay-5">
                    <span className="cs-number">80%</span>
                    <span className="cs-desc">Clients Return for More Services</span>
                </div>
            </div>
        </section>
    );
}
