import HeroSection from "@/views/root/main/ui/sections/hero";
import AboutSection from "@/views/root/main/ui/sections/about";
import FeaturesSection from "@/views/root/main/ui/sections/features";
import StorySection from "@/views/root/main/ui/sections/story";

const MainPage = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<FeaturesSection />
			<StorySection />
		</>
	);
};

export default MainPage;
