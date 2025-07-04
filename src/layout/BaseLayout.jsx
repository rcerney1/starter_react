import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';



export default function BaseLayout({children}) {
    return(
        <>
            <Navbar />
            <main className="main-offset">{children}</main>
            <Footer />
        </>
    );
}