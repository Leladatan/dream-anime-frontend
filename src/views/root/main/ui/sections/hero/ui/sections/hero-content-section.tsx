import { ArrowBigUpDashIcon } from "lucide-react";

import Button from "@/shared/ui/button";

const HeroContentSection = () => {
	return (
		<>
			<h1 className={"special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75"}>
				G<b>a</b>ming
			</h1>

			<div className={"absolute left-0 top-0 z-40 size-full"}>
				<div className={"mt-24 px-5 sm:px-10"}>
					<h2 className={"special-font hero-heading text-blue-100"}>
						redefi<b>n</b>
						<b>e</b>
					</h2>
					<p className={"mb-5 max-w-64 font-robert-regular text-blue-100"}>
						Enter the Metagame Layer <br /> Unleash the Play Economy
					</p>
					<Button
						id={"watch-trailer"}
						icon={ArrowBigUpDashIcon}
						iconPosition={"left"}
						className={
							"!bg-yellow-300 flex-center gap-1 font-bold hover:!bg-yellow-100 transition-all duration-200 ease-in"
						}>
						Watch Trailer
					</Button>
				</div>
			</div>
		</>
	);
};

export default HeroContentSection;
