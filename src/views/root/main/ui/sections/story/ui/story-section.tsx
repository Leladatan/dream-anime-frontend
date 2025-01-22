"use client";

import AnimatedTitle from "@/shared/ui/animated-title";

import { gsap } from "gsap";
import React, { useRef } from "react";
import RoundedCorners from "@/views/root/main/ui/sections/story/ui/components/rounded-corners";
import Button from "@/shared/ui/button";
import Image from "next/image";

const StorySection = () => {
	const imgRef = useRef<HTMLImageElement>(null);

	const handleMouseLeave = () => {
		const element = imgRef.current;

		if (!element) return;

		gsap.to(element, {
			duration: 0.3,
			rotateX: 0,
			rotateY: 0,
			ease: "power1.inOut",
		});
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
		const { clientX, clientY } = e;
		const element = imgRef.current;

		if (!element) return;

		const rect = element.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -10;
		const rotateY = ((x - centerX) / centerX) * 10;

		gsap.to(element, {
			duration: 0.3,
			rotateX,
			rotateY,
			transformPerspective: 500,
			ease: "power1.inOut",
		});
	};

	return (
		<section
			id={"story"}
			className={"min-h-dvh w-screen bg-black text-blue-50"}>
			<div className={"flex size-full flex-col items-center py-10 pb-24"}>
				<p className={"font-general text-sm uppercase md:text-[10px]"}>the multiversal ip world</p>
				<div className={"relative size-full"}>
					<AnimatedTitle
						title={"The st<b>o</b>ry of <br/> a hidden real<b>m</b>"}
						separator={"<br/>"}
						className={"mt-5 pointer-events-none mix-blend-difference relative z-10"}
					/>

					<div className={"story-img-container"}>
						<div className={"story-img-mask"}>
							<div className={"story-img-content"}>
								<Image
									ref={imgRef}
									onMouseLeave={handleMouseLeave}
									onMouseUp={handleMouseLeave}
									onMouseEnter={handleMouseLeave}
									onMouseMove={handleMouseMove}
									src={"/images/entrance.webp"}
									alt={"etrance"}
                                    layout={"fill"}
									className={"object-contain"}
								/>
							</div>
						</div>
						<RoundedCorners />
					</div>
				</div>
				<div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
					<div className="flex h-full w-fit flex-col items-center md:items-start">
						<p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
							Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate
							amidst infinite opportunities.
						</p>

						<Button
							id={"realm-btn"}
							className={"mt-5"}>
							discover prologue
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StorySection;
