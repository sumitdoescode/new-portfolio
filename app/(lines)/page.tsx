import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Buildory from "@/components/Buildory";
import About from "@/components/About";
import TechStrip from "@/components/TechStrip";
import Contact from "@/components/Contact";

const page = () => {
    return (
        <>
            <Hero />
            <TechStrip />
            <Projects />
            <About />
            <Buildory />
            <Contact />
        </>
    );
};

export default page;
