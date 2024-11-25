import "./globals.scss";

import type { Metadata } from "next";
import { ReactNode } from "react";

import Header from "@/widgets/header";
import Footer from "@/widgets/footer";

export const metadata: Metadata = {
	title: "Dream Anime",
	description:
		"Dream Anime is your ideal resource for immersing yourself in the world of games and anime. We offer an extensive library of content, including reviews, news, and recommendations, all enhanced with stunning animations that make your interaction with the site engaging and enjoyable. Explore the world of anime and games with us!",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html lang={"en"}>
			<body>
				<Header />
				<main className={"relative min-h-screen w-screen overflow-x-hidden"}>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
