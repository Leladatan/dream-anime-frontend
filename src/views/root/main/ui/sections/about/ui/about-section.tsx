import AboutContentSection from "@/views/root/main/ui/sections/about/ui/sections/about-content-section";
import AboutBannerImageSection from "@/views/root/main/ui/sections/about/ui/sections/about-banner-image-section";

const AboutSection = () => {
	return (
		<section
			id={"about"}
			className={"min-h-screen w-screen"}>
			<AboutContentSection />
			<AboutBannerImageSection />
		</section>
	);
};

export default AboutSection;
