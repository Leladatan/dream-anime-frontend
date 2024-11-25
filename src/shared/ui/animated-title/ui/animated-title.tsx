"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { clsx } from "clsx";

interface Props {
	title: string;
	separator?: string;
	className?: string;
}

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, separator = "", className }: Props) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const titleAnimation = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "100 bottom",
					end: "center bottom",
					toggleActions: "play none none reverse",
				},
			});

			titleAnimation.to(
				".animated-word",
				{
					opacity: 1,
					transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
					ease: "power2.inOut",
					stagger: 0.02,
				},
				0,
			);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={containerRef}
			className={clsx("animated-title", className)}>
			{title.split(separator).map((line, index) => (
				<div
					key={index}
					className={"flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"}>
					{line.split(" ").map((word, idx) => (
						<span
							key={idx}
							className={"animated-word"}
							dangerouslySetInnerHTML={{ __html: word }}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default AnimatedTitle;
