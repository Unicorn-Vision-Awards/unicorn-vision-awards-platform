"use client";

import { HomepageHero } from "@/src/components/homepage/hero";
import { TextMover } from "@/src/components/text-mover";
import { UVA2025eventDateFormatted } from "@/src/constants/event-2025";
import { siteTitle } from "@/src/constants/site";

export default function Home() {
	const marqueesCategories = [
		"AI",
		"Fintech",
		"EdTech",
		"HealthTech",
		"SaaS",
		"E-commerce",
		"Cybersecurity",
		"Biotech",
		"Marketplace",
	];

	const visionaryPowerWords = [
		"Innovate",
		"Disrupt",
		"Imagine",
		"Build",
		"Scale",
		"Dream",
		"Launch",
		"Grow",
		"Inspire",
		"Create",
	];

	return (
		<main>
			<HomepageHero
				eventDate={UVA2025eventDateFormatted}
				btnText="Submit Your Vision"
				btnHref="/"
			>
				{siteTitle} 2025
			</HomepageHero>
			<TextMover
				text={marqueesCategories}
				speed={200}
				direction="right"
				gradientColor="#321e18"
			/>
			<TextMover
				text={visionaryPowerWords}
				speed={100}
				direction="left"
				gradientColor="#321e18"
			/>
		</main>
	);
}
