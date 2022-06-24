import FeaturesOne from "./FeaturesOne";
import FeaturesTwo from "./FeaturesTwo";
import Hero from "./Hero";

const LandingContent = () => {
    return(
        <>
            <section>
                <Hero />
            </section>
            <hr className="my-7" />
            <section>
                <FeaturesOne />
            </section>
            <hr className="my-7" />
            <section>
                <FeaturesTwo />
            </section>
        </>
    )
}

export default LandingContent;