import "./SideBySideReverse.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

// ✅ Import all images
import painter2Mobile from "../../../assets/about/sbs-painter-2-m.webp";
import painter2Desktop from "../../../assets/about/sbs-painter-2-d.webp";
import painter3Mobile from "../../../assets/about/sbs-painter-3-m.webp";
import painter3Desktop from "../../../assets/about/sbs-painter-3-d.webp";
import stripes from "../../../assets/about/stripes-long.svg";

export default function SideBySideReverse() {
    useScrollFadeIn();

    return (
        <section id="sbsr-1100-1112">
            <div className="cs-container scroll-fade delay-2">
                <div className="cs-image-group scroll-fade delay-3">
                    <picture className="cs-picture cs-picture1">
                        <source media="(max-width: 600px)" srcSet={painter2Mobile} />
                        <source media="(min-width: 601px)" srcSet={painter2Desktop} />
                        <img
                            loading="lazy"
                            decoding="async"
                            src={painter2Desktop}
                            alt="man"
                            width="323"
                            height="447"
                        />
                    </picture>
                    <picture className="cs-picture cs-picture2">
                        <source media="(max-width: 600px)" srcSet={painter3Mobile} />
                        <source media="(min-width: 601px)" srcSet={painter3Desktop} />
                        <img
                            loading="lazy"
                            decoding="async"
                            src={painter3Desktop}
                            alt="appliance"
                            width="305"
                            height="441"
                        />
                    </picture>
                    <img
                        className="cs-stripes"
                        loading="lazy"
                        decoding="async"
                        src={stripes}
                        alt="stripes"
                        width="548"
                        height="487"
                        aria-hidden="true"
                    />
                </div>
                <div className="cs-content scroll-fade delay-4">
                    <span className="cs-topper">Mission & Vision</span>
                    <h2 className="cs-title">Template Painters Mission & Vision</h2>
                    <p className="cs-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim praesentium vero assumenda impedit. Fuga velit tenetur dolorum, delectus, inventore dignissimos sit ipsam facilis illum repudiandae quia nobis distinctio. Voluptates.
                    </p>
                    <ul className="cs-ul">
                        <li className="cs-li">
                            <h3 className="cs-h3">Mission Statement</h3>
                            <p className="cs-li-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugit, enim accusamus molestiae reiciendis eligendi maiores cumque perspiciatis distinctio inventore id, eum vero harum quasi adipisci amet ad illo deserunt!
                            </p>
                        </li>
                        <li className="cs-li">
                            <h3 className="cs-h3">Our Vision</h3>
                            <p className="cs-li-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ea sequi harum adipisci molestias laboriosam similique, sunt officiis laudantium quasi voluptate dolores vel tenetur excepturi sed eaque quam nesciunt itaque?
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
