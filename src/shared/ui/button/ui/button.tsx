import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface Props {
	id?: string;
	icon?: LucideIcon;
	iconPosition?: "left" | "right";
	className?: string;
	children: ReactNode;
}

const Button = ({ id = "", icon: Icon, iconPosition, className = "", children }: Props) => {
	return (
		<button
			id={id}
			className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${className}`}>
			{Icon && iconPosition === "left" && <Icon className="mr-2" />}
			<span className={"relative inline-flex overflow-hidden font-general text-xs uppercase"}>
				<div>{children}</div>
			</span>
			{Icon && iconPosition === "right" && <Icon className="ml-2" />}
		</button>
	);
};

export default Button;
