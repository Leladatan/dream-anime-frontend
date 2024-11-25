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
			className={"h-dvh w-screen "}>
			<div className={"mask-clip-path about-image"}>
				<div className="relative h-full w-full">
					<Image
						src={"/images/about.webp"}
						alt={"About banner image"}
						layout={"fill"}
						sizes={"(max-width: 768px) 100vw, (min-width: 769px) 50vw"}
						priority={true}
						className={"absolute left-0 top-0 size-full object-cover"}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutBannerImageSection;
