import "./MeetTeam.css";


import person1Mobile from "../../../assets/about/person1-m.webp";
import person1Desktop from "../../../assets/about/person1-d.webp";
import person2Mobile from "../../../assets/about/person2-m.webp";
import person2Desktop from "../../../assets/about/person2-d.webp";
import person3Mobile from "../../../assets/about/person3-m.webp";
import person3Desktop from "../../../assets/about/person3-d.webp";
import person4Mobile from "../../../assets/about/person4-m.webp";
import person4Desktop from "../../../assets/about/person4-d.webp";

import facebookIcon from "../../../assets/icons/face-grey.svg";
import twitterIcon from "../../../assets/icons/twit-grey.svg";
import instagramIcon from "../../../assets/icons/insta-grey.svg";


const photos = {
    1: { m: person1Mobile, d: person1Desktop },
    2: { m: person2Mobile, d: person2Desktop },
    3: { m: person3Mobile, d: person3Desktop },
    4: { m: person4Mobile, d: person4Desktop },
};

const socialIcons = {
    face: facebookIcon,
    twit: twitterIcon,
    insta: instagramIcon,
};

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
                                    srcSet={photos[member.photo].m}
                                />
                                <source
                                    media="(min-width: 601px)"
                                    srcSet={photos[member.photo].d}
                                />
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src={photos[member.photo].d}
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
                                                src={socialIcons[platform]}
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
