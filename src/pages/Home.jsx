import BaseLayout from "../layout/BaseLayout";
import Hero from "../components/Home/Hero/Hero";
import ServicesPreview from "../components/Home/ServicesPreview/ServicesPreview";
import AboutPreview from "../components/Home/AboutPreview/AboutPreview";
import GalleryPreview from "../components/Home/GalleryPreview/GalleryPreview";
import Testimonials from "../components/Home/TestimonialPreview/TestimonialPreview";
import CTA from "../components/Home/CTA/CTA";
import FAQ from "../components/Home/FAQ/FAQ";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import { Helmet } from "react-helmet-async";

export default function Home(){
    useScrollFadeIn();
    return(
        <BaseLayout>
            <Helmet>
                <title>TP | Template Painters</title>
                <meta 
                    name="description"
                    content="testing"
                />
                <meta name="google-site-verification" content="Z6BdZojcu6kjTw2AxT4dGPad3Ajf2TA0ao49f8g9poQ" />
            </Helmet>
            <Hero />
            <ServicesPreview />
            <AboutPreview />
            <Testimonials />
            <GalleryPreview /> 
            <FAQ />
            <CTA />
            
        </BaseLayout>
    )
}