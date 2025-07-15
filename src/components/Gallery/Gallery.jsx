import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "./Gallery.css";

const categories = [
    { label: "All", value: "all" },
    { label: "Interior", value: "interior" },
    { label: "Exterior", value: "exterior" },
    { label: "Misc", value: "misc" },
];

// Dynamically import all .webp images from gallery folder
const galleryImports = import.meta.glob("/src/assets/gallery/*.webp", { eager: true });

// Convert import object to array of { src, title, category, tag }
const allImages = Object.entries(galleryImports).map(([path, mod]) => {
    const src = mod.default;
    const filename = path.split("/").pop().replace(/\.webp$/, "");

    let category = "misc";
    if (filename.startsWith("interior_")) category = "interior";
    else if (filename.startsWith("exterior_")) category = "exterior";

    const readableName = filename.replace(/^(interior_|exterior_)/, "").replace(/[-_]/g, " ");
    const title = readableName.replace(/\b\w/g, (c) => c.toUpperCase());

    return {
        src,
        title,
        category,
        tag: category.charAt(0).toUpperCase() + category.slice(1),
    };
});

export default function Gallery() {
    const [filter, setFilter] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredImages =
        filter === "all" ? allImages : allImages.filter((img) => img.category === filter);

    return (
        <section id="projects-gallery">
            <div className="cs-container">
                <div className="cs-header scroll-fade delay-1">
                    <span className="cs-topper">Our Work</span>
                    <h2 className="cs-title">Featured Projects</h2>
                    <div className="cs-filters">
                        {categories.map(({ label, value }) => (
                            <button
                                key={value}
                                onClick={() => setFilter(value)}
                                className={`cs-filter ${filter === value ? "active" : ""}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="cs-gallery-grid scroll-fade delay-2">
                    {filteredImages.map(({ src, title, tag }, i) => (
                        <div
                            key={i}
                            className="cs-gallery-item"
                            onClick={() => {
                                setLightboxIndex(i);
                                setLightboxOpen(true);
                            }}
                        >
                            <img
                                src={src}
                                alt={title}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="cs-overlay">
                                <span className="cs-tag">{tag}</span>
                                <span className="cs-title-text">{title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    index={lightboxIndex}
                    slides={filteredImages.map(({ src, title }) => ({ src, alt: title }))}
                />
            </div>
        </section>
    );
}
