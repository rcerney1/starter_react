import "./ExteriorServices.css";
import interiorImg from "/src/assets/home/house-painter-d.webp";
import exterior1 from "/src/assets/services/exterior1.webp"
import exterior2 from "/src/assets/services/exterior2.webp"
import paintIcon from "/src/assets/home/paint-roller.svg";
import hoseIcon from "/src/assets/icons/hose.svg";
import wallIcon from "/src/assets/home/wall.svg";
import fenceIcon from "/src/assets/icons/fence.svg";
import windowIcon from "/src/assets/icons/window.svg";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

export default function ExteriorServices() {
    useScrollFadeIn();
    const services = [
        {
            icon: paintIcon,
            title: "Exterior Painting",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quo nulla, quidem consequatur"
        },
        {
            icon: hoseIcon,
            title: "Power Washing",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quo nulla, quidem consequatur"
        },
        {
            icon: wallIcon,
            title: "Stucco & Siding Repair",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quo nulla, quidem consequatur"
        },
        {
            icon: fenceIcon,
            title: "Deck & Fence Painting",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quo nulla, quidem consequatur"
        },
        {
            icon: windowIcon,
            title: "Exterior Trim & Fascia",
            desc: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quo nulla, quidem consequatur"
        }
        
    ];

    return (
        <>
            <section id="content-page-1399">
                <div className="cs-container">
                    <div className="cs-image-group scroll-fade delay-2">
                        <picture className="cs-image stagger-1">
                            <img src={exterior2} alt="Interior Work 1" loading="lazy" decoding="async" />
                        </picture>
                        <picture className="cs-image stagger-2">
                            <img src={exterior1} alt="Interior Work 2" loading="lazy" decoding="async" />
                        </picture>
                    </div>


                    <div className="cs-content scroll-fade delay-2">
                        <h1 className="cs-title scroll-fade delay-3">
                            Exterior <span className="cs-color">Painting Services</span>
                        </h1>
                        <div className="scroll-fade delay-4">
                            <h2>Heading</h2>
                            <h3>Sub heading</h3>
                            <p>
                                We provide complete exterior painting and prep services for residential and commercial properties. Our attention to detail ensures clean edges, smooth finishes, and long-lasting results.
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
