import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutLanding = (props) => {
    return(
        <>
        <Navbar />
        <div className="content px-10">
            {props.children}
        </div>
        <Footer />
        </>
    )
}

export default LayoutLanding;