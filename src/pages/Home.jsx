import BaseLayout from "../layout/BaseLayout";
import Hero from "../components/Home/Hero/Hero";
import ServicesPreview from "../components/Home/ServicesPreview/ServicesPreview";
import AboutPreview from "../components/Home/AboutPreview/AboutPreview";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Home(){
    useScrollFadeIn();
    return(
        <BaseLayout>
            <Hero />
            <ServicesPreview />
            
            <section className="scroll-fade delay-3">
                <AboutPreview />
            </section>
        </BaseLayout>
    )
}