"use client";

import Image from "next/image";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import {useEffect, useState} from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutBannerImageSection = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	const handleResize = () => {
		setIsMobile(window.innerWidth < 768);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useGSAP(() => {
		if (!isMobile) {
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
		} else {
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
			});
		}
	}, [isMobile]);

	return (
		<div
			id={"clip"}
			className={"h-dvh w-screen overflow-hidden"}>
			<div className={"mask-clip-path about-image"} style={{ borderRadius: isMobile ? "0" : "50px" }}>
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
