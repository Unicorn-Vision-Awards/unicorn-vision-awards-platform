"use client";

import { HomepageHero } from "@/src/components/homepage/hero";
import { HomepageMarquee } from "@/src/components/homepage/marquee";
import { UVA2025eventDateFormatted } from "@/src/constants/event-2025";
import { siteTitle } from "@/src/constants/site";

export default function Home() {
	return (
		<main>
			<HomepageHero
				eventDate={UVA2025eventDateFormatted}
				btnText="Submit Your Vision"
				btnHref="/"
			>
				{siteTitle} 2025
			</HomepageHero>
			<HomepageMarquee />
		</main>
	);
}
