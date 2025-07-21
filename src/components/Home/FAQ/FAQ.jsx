import { useState } from "react";
import "./FAQ.css";

// ✅ Import image assets
import arrowIcon from "/home/ryanc/2025/freelance/starters/my-starter/src/assets/home/angle-arrow.svg";
import faqGraphic from "/home/ryanc/2025/freelance/starters/my-starter/src/assets/home/faq.svg";

const faqData = [
    {
        question: "What types of painting services do you offer?",
        answer:
            "We offer interior and exterior residential painting, cabinet refinishing, trim and baseboard painting, drywall repair, and custom color consultations.",
    },
    {
        question: "Do you provide free estimates?",
        answer:
            "Yes, we offer free on-site estimates. Our team will visit your property, assess your needs, and provide a detailed quote.",
    },
    {
        question: "How long does a typical project take?",
        answer:
            "Most standard home painting projects take 2–5 days depending on size and scope. We’ll provide a timeline before we begin.",
    },
    {
        question: "What kind of prep work do you do before painting?",
        answer:
            "We handle all prep including sanding, patching holes, repairing drywall, priming surfaces, and protecting furniture and flooring.",
    },
    {
        question: "Is your team licensed and insured?",
        answer:
            "Absolutely. We are fully licensed, insured, and committed to following all safety protocols while working in your home.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section id="faq-2352">
            <div className="cs-container">
                <div className="cs-wrapper">
                    <div className="cs-content">
                        <span className="cs-topper">FAQ’s</span>
                        <h2 className="cs-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="cs-flex-group">
                        <ul className="cs-faq-group">
                            {faqData.map((item, index) => (
                                <li
                                    key={index}
                                    className={`cs-faq-item ${activeIndex === index ? "active" : ""}`}
                                >
                                    <button className="cs-button" onClick={() => toggleFAQ(index)}>
                                        <span className="cs-button-text">
                                            {item.question}
                                            <img
                                                className="cs-icon"
                                                src={arrowIcon}
                                                alt="toggle"
                                                width="24"
                                                height="24"
                                            />
                                        </span>
                                    </button>
                                    <p className="cs-item-p">{item.answer}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <picture className="cs-picture">
                    <source
                        media="(max-width: 600px)"
                        srcSet={faqGraphic}
                    />
                    <source
                        media="(min-width: 601px)"
                        srcSet={faqGraphic}
                    />
                    <img
                        src={faqGraphic}
                        alt="FAQ"
                        width="606"
                        height="473"
                    />
                </picture>
            </div>
        </section>
    );
}
