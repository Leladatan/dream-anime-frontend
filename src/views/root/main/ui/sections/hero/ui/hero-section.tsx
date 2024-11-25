import HeroVideosSection from "@/views/root/main/ui/sections/hero/ui/sections/hero-videos-section";
import HeroContentSection from "@/views/root/main/ui/sections/hero/ui/sections/hero-content-section";

const HeroSection = () => {
    return (
        <section className={"relative h-dvh w-screen overflow-x-hidden"}>
            <div id={"video-frame"} className={"relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"}>
                <HeroVideosSection/>
                <HeroContentSection/>
            </div>
            <h2 className={"special-font hero-heading absolute bottom-5 right-5 text-black"}>
                G<b>a</b>ming
            </h2>
        </section>
    );
};

export default HeroSection;