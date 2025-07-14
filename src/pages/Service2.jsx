import BaseLayout from "../layout/BaseLayout";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import ExteriorServices from "../components/Services/ExteriorServices/ExteriorServices";
import Banner from "../components/Banner/Banner";
import CTA from "../components/Home/CTA/CTA"

import { Helmet } from "react-helmet-async";

export default function Service2() {
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
                title="Exterior Services"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "exterior", href: "/services/exterior" }
                ]}
            />
            <ExteriorServices />
            <CTA />
        </BaseLayout>
    )
}