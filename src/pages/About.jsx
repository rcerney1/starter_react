import BaseLayout from "../layout/BaseLayout";
import AboutHero from "../components/About/AboutHero/AboutHero";
import MeetTeam from "../components/About/Team/MeetTeam";
import Pricing from "../components/About/Pricing/Pricing";
import SideBySide from "../components/About/SideBySide/SideBySide";
import SideBySideReverse from "../components/About/SideBySideReverse/SideBySideReverse";
import Stats from "../components/About/Stats/Stats";
import CTA from "../components/Home/CTA/CTA"
import { Helmet } from "react-helmet-async"

export default function About(){
    return(
        <BaseLayout>
        <Helmet>
            <title>About Us | Template Painters</title>
            <meta 
                name="description"
                content="Learn more about Template Painters, our experienced team, other seo words"
            />
        </Helmet>
            <AboutHero />
            <SideBySide/>
            <SideBySideReverse/>
            <Stats />
            <MeetTeam/>
            <Pricing />
            <CTA/>
        </BaseLayout>
    );
}