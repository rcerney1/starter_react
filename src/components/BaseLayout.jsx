import Header from './Header';
import Bottom from './Bottom';


export default function BaseLayout({children}) {
    return(
        <>
            <Header />
            <main>{children}</main>
            <div className="test">
                <p>lots and lots of space</p>
                <p>same</p>
            </div>
            <Bottom />
        </>
    );
}