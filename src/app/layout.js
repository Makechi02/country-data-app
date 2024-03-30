import "@/styles/globals.css";
import {nunitoSans} from "@/app/fonts";
import Header from "@/app/(components)/Header";

export const metadata = {
	title: "Countries API app",
	description: "REST Countries API with color theme switcher",
};

export default function RootLayout({children}) {
	return (
		<html lang="en" className={`${nunitoSans}`}>
		<body className={`font-nunito_sans`}>
		<Header/>
		<main>
			{children}
		</main>
		</body>
		</html>
	);
}
