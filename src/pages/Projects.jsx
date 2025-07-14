import BaseLayout from "../layout/BaseLayout";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import Gallery from "../components/Gallery/Gallery";
import CTA from "../components/Home/CTA/CTA"
import Banner from "../components/Banner/Banner";


import { Helmet } from "react-helmet-async";

export default function Projects() {
    useScrollFadeIn();
    return (
       
        <BaseLayout>
            <Helmet>
                <title>TP | Gallery</title>
                <meta
                    name="description"
                    content="testing"
                />
            </Helmet>
            <Banner
                title="Projects"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Projects", href: "/projects" }
                ]}
            />
            <Gallery />
            <CTA />
        </BaseLayout>
        
        
    )
}