import HeroSection from "@/views/root/main/ui/sections/hero";
import AboutSection from "@/views/root/main/ui/sections/about";
import FeaturesSection from "@/views/root/main/ui/sections/features";
import StorySection from "@/views/root/main/ui/sections/story";
import ContactSection from "@/views/root/main/ui/sections/contact";

const MainPage = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<FeaturesSection />
			<StorySection />
			<ContactSection />
		</>
	);
};

export default MainPage;
