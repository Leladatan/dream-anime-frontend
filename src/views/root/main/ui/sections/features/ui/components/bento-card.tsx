import { ReactNode } from "react";

interface Props {
	src: string;
	title: ReactNode;
	description?: string;
}

const BentoCard = ({ src, title, description }: Props) => {
	return (
		<div className={"relative size-full"}>
			<video
				src={src}
				loop={true}
				muted={true}
				autoPlay={true}
				className={"absolute left-0 top-0 size-full object-cover object-center"}
			/>
			<div className={"relative z-10 flex size-full flex-col justify-between p-5 text-blue-50"}>
				<div>
					<h2 className={"bento-title special-font"}>{title}</h2>
					{description && <p className={"mt-3 max-w-64 text-xs md:text-base"}>{description}</p>}
				</div>
			</div>
		</div>
	);
};

export default BentoCard;
