import "./AboutPreview.css";

export default function AboutPreview() {
    return (
        <section id="sbs-2277">
            <div className="cs-container">
                <div className="cs-content">
                    <div className="cs-header">
                        <span className="cs-topper">Why Choose Us</span>
                        <h2 className="cs-title">Why Homeowners Trust Company Name </h2>
                    </div>
                    <div className="cs-wrapper">
                        <div className="cs-flex">
                            <p className="cs-text">
                                Choose Platinum Craft Exteriors for expert craftsmanship and personalized service. With 5 years of experience, we provide reliable, high-quality exterior solutions that exceed your expectations.
                            </p>
                            <ul className="cs-ul">
                                <li className="cs-li">
                                    <img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/diamond.svg" alt="diamond" />
                                    <p className="cs-item-text"><strong>Expert Craftsmanship:</strong> Decades of experience ensure every detail is perfect.</p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/diamond.svg" alt="diamond" />
                                    <p className="cs-item-text"><strong>Premium Materials:</strong> We use only the highest-quality products for lasting results.</p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/diamond.svg" alt="diamond" />
                                    <p className="cs-item-text"><strong>Expert Craftsmanship:</strong> Decades of experience ensure every detail is perfect.</p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/diamond.svg" alt="diamond" />
                                    <p className="cs-item-text"><strong>Expert Craftsmanship:</strong> Decades of experience ensure every detail is perfect.</p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/diamond.svg" alt="diamond" />
                                    <p className="cs-item-text"><strong>Expert Craftsmanship:</strong> Decades of experience ensure every detail is perfect.</p>
                                </li>
                            </ul>
                            <a href="" className="cs-button-solid">Read More</a>
                        </div>
                        <div className="cs-image-group">
                            <ul className="cs-card-group">
                                <li className="cs-item">
                                    <img className="cs-item-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/building-white.svg" alt="building icon" />
                                    <span className="cs-number">
                                        50+<span className="cs-desc">Communities Served</span>
                                    </span>
                                </li>
                                <li className="cs-item black-variant">
                                    <img className="cs-item-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/trophy-white.svg" alt="trophy icon" />
                                    <span className="cs-number">
                                        98%<span className="cs-desc">Customer Satisfaction Rate</span>
                                    </span>   
                                </li>
                            </ul>
                            <picture className="cs-picture">
                                <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/construction6.jpg" />
                                <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/construction6.jpg" />
                                <img src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/construction6.jpg" alt="construction site" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <img className="cs-floater" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/paint-brush.png" alt="paint brush" />
        </section>
    );
}
