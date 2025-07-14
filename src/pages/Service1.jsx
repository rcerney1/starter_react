import BaseLayout from "../layout/BaseLayout";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import InteriorServices from "../components/Services/InteriorServices/InteriorServices";
import CTA from "../components/Home/CTA/CTA"
import Banner from "../components/Banner/Banner";

import { Helmet } from "react-helmet-async";

export default function Service1() {
    useScrollFadeIn();
    return (
        <BaseLayout>
            <Helmet>
                <title>TP | Template Painters</title>
                <meta
                    name="description"
                    content="testing"
                />
            </Helmet>
            <Banner
                title="Interior Services"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Interior", href: "/services/interior" }
                ]}
            />
            <InteriorServices />
            <CTA />
        </BaseLayout>
    )
}