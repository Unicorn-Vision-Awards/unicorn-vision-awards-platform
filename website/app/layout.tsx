import { Header } from "@/src/components/header";
import "@/src/styles/globals.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
	variable: "--font-bricolage-grotesque",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Unicorn Vision Awards – Honoring the Future of Innovation",
	description:
		"A global awards platform recognizing bold founders and breakthrough ideas before they become the next unicorns. Backed by an international panel of industry leaders.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" dir="ltr" className={bricolageGrotesque.className}>
			<body className="antialiased">
				<Header />
				{children}
			</body>
		</html>
	);
}
