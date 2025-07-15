import "./InteriorServices.css";
import interiorImg from "/src/assets/home/house-painter-d.webp";
import paintIcon from "/images/icons/face-grey.svg";
import wallIcon from "/images/icons/face-grey.svg";
import trimIcon from "/images/icons/face-grey.svg";
import cabinetIcon from "/images/icons/face-grey.svg";
import wallpaperIcon from "/images/icons/face-grey.svg";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

export default function InteriorServices() {
    useScrollFadeIn();
    const services = [
        {
            icon: paintIcon,
            title: "Interior Painting",
            desc: "High-quality wall, ceiling, and trim painting for any room."
        },
        {
            icon: wallIcon,
            title: "Drywall Repair",
            desc: "Smooth out cracks, dents, or full panel replacements."
        },
        {
            icon: trimIcon,
            title: "Crown Molding & Trim",
            desc: "Professional trim installation and detailing."
        },
        {
            icon: cabinetIcon,
            title: "Cabinet Refinishing",
            desc: "Breathe new life into your existing kitchen cabinets."
        },
        {
            icon: wallpaperIcon,
            title: "Wallpaper Removal",
            desc: "Safe, clean removal of old wallpaper with surface prep."
        }
    ];

    return (
        <>
            <section id="content-page-1399">
                <div className="cs-container">
                    <div className="cs-image-group scroll-fade delay-2">
                        <picture className="cs-image stagger-1">
                            <img src={interiorImg} alt="Interior Work 1" loading="lazy" decoding="async" />
                        </picture>
                        <picture className="cs-image stagger-2">
                            <img src={interiorImg} alt="Interior Work 2" loading="lazy" decoding="async" />
                        </picture>
                    </div>


                    <div className="cs-content scroll-fade delay-2">
                        <h1 className="cs-title scroll-fade delay-3">
                            Interior <span className="cs-color">Painting Services</span>
                        </h1>
                        <div className="scroll-fade delay-4">
                            <h2>Heading</h2>
                            <h3>Sub heading</h3>
                            <p>
                                We provide complete interior painting and prep services for residential and commercial properties. Our attention to detail ensures clean edges, smooth finishes, and long-lasting results.
                            </p>
                            <p>
                                From patching drywall to trimming baseboards, our experienced team delivers consistent quality with minimal disruption to your space.
                            </p>
                            <h3>Sub heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quod rem itaque quisquam odio veritatis, ullam delectus. Rerum tempore nulla, modi quod vel id eos in enim explicabo aliquam expedita.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate pariatur iusto natus. Earum aperiam eius quo voluptas tenetur pariatur incidunt? Qui inventore in sed illo nulla deserunt fugiat perferendis vero!</p>
                            <h3>Sub heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quod rem itaque quisquam odio veritatis, ullam delectus. Rerum tempore nulla, modi quod vel id eos in enim explicabo aliquam expedita.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate pariatur iusto natus. Earum aperiam eius quo voluptas tenetur pariatur incidunt? Qui inventore in sed illo nulla deserunt fugiat perferendis vero!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="interior-services-grid">
                <div className="cs-grid-container scroll-fade delay-2">
                    <h2 className="cs-grid-title">Our Interior Services Include</h2>
                    <ul className="cs-service-card-grid">
                        {services.map((service, index) => (
                            <li key={index} className="cs-card">
                                <img src={service.icon} alt="" className="cs-card-icon" />
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
