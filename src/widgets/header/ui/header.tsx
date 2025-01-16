"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";

import { navItems } from "@/widgets/header/const";
import { clsx } from "clsx";
import { gsap } from "gsap";

import { ArrowBigUpIcon } from "lucide-react";

import Button from "@/shared/ui/button";
import Image from "next/image";

const Header = () => {
	const [lastScrollY, setLastScrollY] = useState<number>(0);
	const [isHeaderVisible, setIsHeaderVivible] = useState<boolean>(true);

	const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
	const [isIndicatorActive, setIsIndicatorActive] = useState<boolean>(false);

	const headerRef = useRef<HTMLDivElement>(null);
	const audioElementRef = useRef<HTMLAudioElement>(null);

	const { y: currentScrollY } = useWindowScroll();

	const handlerAudioIndicator = () => {
		setIsAudioPlaying(prev => !prev);
		setIsIndicatorActive(prev => !prev);
	};

	useEffect(() => {
		if (audioElementRef.current) {
			if (isAudioPlaying) {
				audioElementRef.current.play();
			} else {
				audioElementRef.current.pause();
			}
		}
	}, [isAudioPlaying]);

	useEffect(() => {
		if (headerRef.current) {
			if (currentScrollY === 0) {
				setIsHeaderVivible(true);
				headerRef.current.classList.remove("floating-nav");
			} else if (currentScrollY > lastScrollY) {
				setIsHeaderVivible(false);
				headerRef.current.classList.add("floating-nav");
			} else if (currentScrollY < lastScrollY) {
				setIsHeaderVivible(true);
				headerRef.current.classList.add("floating-nav");
			}
			setLastScrollY(currentScrollY);
		}
	}, [currentScrollY, lastScrollY]);

	useEffect(() => {
		gsap.to(headerRef.current, {
			y: isHeaderVisible ? 0 : -100,
			opacity: isHeaderVisible ? 1 : 0,
			duration: 0.2,
		});
	}, [isHeaderVisible]);

	return (
		<header
			ref={headerRef}
			className={"fixed inset-x-0 z-50 h-16 border-none mt-4 transition-all duration-700 sm:inset-x-6"}>
			<div className={"absolute top-1/2 w-full -translate-y-1/2"}>
				<nav className={"flex size-full items-center justify-between p-4"}>
					<div className={"flex items-center gap-7"}>
						<Image
							src="/images/logo.png"
							alt="Logo"
							width={50}
							height={50}
						/>
						<Button
							id={"product-button"}
							icon={ArrowBigUpIcon}
							iconPosition={"right"}
							className={"bg-blue-50 hidden md:flex items-center gap-1"}>
							Products
						</Button>
					</div>

					<div className={"flex items-center justify-between gap-4"}>
						<div className={"hidden md:block"}>
							{navItems.map((item, i) => (
								<a
									key={i}
									href={`#${item.toLowerCase()}`}
									className={"nav-hover-btn font-medium"}>
									{item}
								</a>
							))}
						</div>

						<button
							className={"ml-10 flex items-center space-x-0.5"}
							onClick={handlerAudioIndicator}>
							<audio
								ref={audioElementRef}
								src={"/audio/loop.mp3"}
								loop={true}
								className={"hidden"}
							/>
							{[1, 2, 3, 4].map(bar => (
								<div
									key={bar}
									className={clsx("indicator-line", isIndicatorActive && "active")}
									style={{
										animationDelay: `${bar * 0.1}s`,
									}}
								/>
							))}
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
