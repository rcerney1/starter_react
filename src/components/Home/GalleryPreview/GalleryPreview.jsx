import "./GalleryPreview.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

// ✅ Import gallery images
import gallery1Desktop from "../../../assets/home/gallery-1-d.webp";
import gallery1Mobile from "../../../assets/home/gallery-1-m.webp";
import gallery2Desktop from "../../../assets/home/gallery-2-d.webp";
import gallery2Mobile from "../../../assets/home/gallery-2-m.webp";
import gallery3Desktop from "../../../assets/home/gallery-3-d.webp";
import gallery3Mobile from "../../../assets/home/gallery-3-m.webp";

// ✅ Updated array with imported image objects
const galleryImages = [
    {
        src: gallery1Desktop,
        srcm: gallery1Mobile,
        tag: "Exterior",
        project: "Project Name"
    },
    {
        src: gallery2Desktop,
        srcm: gallery2Mobile,
        tag: "Hardscaping",
        project: "Dry Wall Repair"
    },
    {
        src: gallery3Desktop,
        srcm: gallery3Mobile,
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
                            <a className="cs-image" href="/projects" key={`gallery-${i}`}>
                                <picture className="cs-picture">
                                    <source media="(max-width: 600px)" srcSet={image.srcm} />
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
