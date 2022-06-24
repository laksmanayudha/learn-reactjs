import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutLanding = (props) => {
    return(
        <>
        <Navbar />
        <div className="content px-10">
            {props.children}
        </div>
        <hr className="my-7" />
        <Footer />
        </>
    )
}

export default LayoutLanding;