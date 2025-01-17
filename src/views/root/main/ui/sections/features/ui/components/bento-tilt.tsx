"use client";

import React, { ReactNode, useRef, useState } from "react";

interface Props {
	children: ReactNode;
	className?: string;
}

const BentoTilt = ({ children, className }: Props) => {
	const [transformStyle, setTransformStyle] = useState<string>("");

	const itemRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!itemRef.current) return;

		const { left, top, width, height } = itemRef.current.getBoundingClientRect();

		const relativeX = (e.clientX - left) / width;
		const relativeY = (e.clientY - top) / height;

		const tiltX = (relativeY - 0.5) * 10;
		const tiltY = (relativeX - 0.5) * -10;

		const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
		setTransformStyle(newTransform);
	};

	const handleMouseLeave = () => {
		setTransformStyle("");
	};

	return (
		<div
			ref={itemRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={className}
			style={{
				transform: transformStyle,
				transition: "transform 0.1s",
			}}>
			{children}
		</div>
	);
};

export default BentoTilt;
