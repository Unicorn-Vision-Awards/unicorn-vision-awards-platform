import {
	siteDescription,
	siteSlogan,
	siteTitle,
	siteUrl,
} from "@/constants/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: `%s - ${siteTitle}`,
		default: `${siteTitle} - ${siteSlogan}`,
	},
	description: siteDescription,
	metadataBase: new URL(siteUrl),
	openGraph: {
		type: "website",
		title: siteTitle,
		siteName: siteTitle,
		description: siteDescription,
		url: siteUrl,
		locale: "en_US",
	},
};
