import "./MeetTeam.css";

export default function MeetTeam() {
    return (
        <section id="meet-team-1102-1112">
            <div className="cs-container">
                <div className="cs-content">
                    <h2 className="cs-title">Meet Our Team</h2>
                    <p className="cs-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur neque voluptatibus ipsam ratione,
                        doloribus harum error repudiandae dignissimos nemo est!
                    </p>
                </div>
                <ul className="cs-card-group">
                    {/* Repeat for each team member */}
                    {[20, 21, 22, 23].map((num, index) => (
                        <li className="cs-item" key={index}>
                            <picture className="cs-picture">
                                <source
                                    media="(max-width: 600px)"
                                    srcSet={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic${num}.jpg`}
                                />
                                <source
                                    media="(min-width: 601px)"
                                    srcSet={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic${num}.jpg`}
                                />
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic${num}.jpg`}
                                    alt="mechanic"
                                    width="305"
                                    height="338"
                                />
                            </picture>
                            <div className="cs-info">
                                <span className="cs-name">{['Esther Howard', 'Jenny Wilson', 'Leslie Alexander', 'Leslie Alexander'][index]}</span>
                                <span className="cs-job">Team Member {index + 1}</span>
                                <div className="cs-social-group">
                                    {["face", "twit", "insta"].map((platform) => (
                                        <a href="" className="cs-link" aria-label={`visit ${platform}`} key={platform}>
                                            <img
                                                className="cs-icon"
                                                loading="lazy"
                                                decoding="async"
                                                src={`/images/icons/${platform}-grey.svg`}
                                                alt={platform}
                                                width="12"
                                                height="12"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}