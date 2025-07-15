import "./MeetTeam.css";

export default function MeetTeam() {
    const team = [
        {
            name: "John Howard",
            role: "Team Member 1",
            photo: 1,
            socials: {
                face: "#",
                twit: "#",
                insta: "#"
            }
        },
        {
            name: "Jenny Wilson",
            role: "Team Member 2",
            photo: 2,
            socials: {
                face: "#",
                twit: "#",
                insta: "#"
            }
        },
        {
            name: "Ryan Alexander",
            role: "Team Member 3",
            photo: 3,
            socials: {
                face: "#",
                twit: "#",
                insta: "#"
            }
        },
        {
            name: "Kevin Alexander",
            role: "Team Member 4",
            photo: 4,
            socials: {
                face: "#",
                twit: "#",
                insta: "#"
            }
        }
    ];

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
                    {team.map((member, index) => (
                        <li className="cs-item" key={index}>
                            <picture className="cs-picture">
                                <source
                                    media="(max-width: 600px)"
                                    srcSet={`/src/assets/about/person${member.photo}-m.webp`}
                                />
                                <source
                                    media="(min-width: 601px)"
                                    srcSet={`/src/assets/about/person${member.photo}-d.webp`}
                                />
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src={`/src/assets/about/person${member.photo}-d.webp`}
                                    alt={member.name}
                                    width="305"
                                    height="338"
                                />
                            </picture>
                            <div className="cs-info">
                                <span className="cs-name">{member.name}</span>
                                <span className="cs-job">{member.role}</span>
                                <div className="cs-social-group">
                                    {Object.entries(member.socials).map(([platform, url]) => (
                                        <a
                                            href={url}
                                            className="cs-link"
                                            aria-label={`visit ${platform}`}
                                            key={platform}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="cs-icon"
                                                loading="lazy"
                                                decoding="async"
                                                src={`/src/assets/icons/${platform}-grey.svg`}
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
