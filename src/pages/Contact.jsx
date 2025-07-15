import BaseLayout from "../layout/BaseLayout";
import Banner from "../components/Banner/Banner";
import ContactPage from "../components/Contact/ContactPage";
import { Helmet } from "react-helmet-async"

export default function Contact() {
    return (
        <BaseLayout>
            <Helmet>
                <title>About Us | Template Painters</title>
                <meta
                    name="description"
                    content="Learn more about Template Painters, our experienced team, other seo words"
                />
            </Helmet>
            <ContactPage />
        </BaseLayout>
    );
}