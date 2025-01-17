"use client";

import Image from "next/image";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AboutBannerImageSection = () => {
	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: "#clip",
				start: "center center",
				end: "+=800 center",
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
			},
		});

		clipAnimation.to(".mask-clip-path", {
			width: "100vw",
			height: "100vh",
			borderRadius: 0,
		});
	});

	return (
		<div
			id={"clip"}
			className={"h-dvh w-screen overflow-hidden"}>
			<div className={"mask-clip-path about-image"}>
				<div className={"relative size-full"}>
					<Image
						src={"/images/about.webp"}
						alt={"About banner image"}
						layout={"fill"}
						priority={true}
						className={"object-cover"}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutBannerImageSection;
