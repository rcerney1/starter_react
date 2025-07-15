// Component: Pricing.jsx
import "./Pricing.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

export default function Pricing() {
    useScrollFadeIn();
    const plans = [
        {
            title: "Pricing Option 1",
            price: "$49.99",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "etc",
                "etc",
                "etc"
            ],
            disabled: [4, 5]
        },
        {
            title: "Pricing Option 2",
            price: "$99.99",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "etc",
                "etc",
                "etc"
            ],
            disabled: [] // only the last one is disabled
        }
    ];

    return (
        <section id="pricing-1103-1112">
            <div className="cs-container scroll-fade delay-2">
                <div className="cs-content">
                    <span className="cs-topper">Pricing</span>
                    <h2 className="cs-title">Affordable Pricing Plans</h2>
                    <p className="cs-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ea animi totam exercitationem dignissimos veniam, dolorem quam doloribus tempora soluta similique
                    </p>
                    <a href="/contact" className="cs-button-solid">Book Appointment</a>
                </div>
                <ul className="cs-card-group">
                    {plans.map((plan, idx) => (
                        <li className="cs-item" key={idx}>
                            <span className="cs-package">{plan.title}</span>
                            <span className="cs-price">{plan.price}</span>
                            <ul className="cs-ul">
                                {plan.features.map((feature, i) => (
                                    <li
                                        className={`cs-li${plan.disabled.includes(i) ? " cs-disabled" : ""}`}
                                        key={i}
                                    >
                                        {feature}
                                        <img
                                            className="cs-icon"
                                            aria-hidden="true"
                                            loading="lazy"
                                            decoding="async"
                                            src="/src/assets/icons/mech-check.svg"
                                            alt="checkmark"
                                            width="18"
                                            height="18"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
