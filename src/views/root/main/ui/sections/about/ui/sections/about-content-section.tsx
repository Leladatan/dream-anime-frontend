import AnimatedTitle from "@/shared/ui/animated-title";

const AboutContentSection = () => {
	return (
		<div className={"relative mb-8 mt-36 flex flex-col items-center gap-5"}>
			<h2 className={"font-general text-sm uppercase"}>Welcome to Zentry</h2>
			<AnimatedTitle
				title={"Disc<b>o</b>ver the world&#39;s <br/> l<b>a</b>rgest shared adventure"}
				separator={"<br/>"}
				className={"mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]"}
			/>
			<div className={"about-subtext"}>
				<p>The Game of Games begins-your life, now an epic MMORPG</p>
				<p>Zentry unites every player from countless games and platforms</p>
			</div>
		</div>
	);
};

export default AboutContentSection;
