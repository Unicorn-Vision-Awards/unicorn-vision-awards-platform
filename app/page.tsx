"use client";

import { HomepageHero } from "@/src/components/homepage/hero";
import { TextMover } from "@/src/components/text-mover";
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
			<TextMover
				text="* See Your For 2024"
				// text="AI & Machine Learning * Fintech * HealthTech * EdTech * ClimateTech * SaaS * E-commerce * Social Impact * Gaming * PropTech * AgriTech * LegalTech * Cybersecurity * Mobility & Transportation * Robotics * Creator Economy * DevTools * HRTech * MarTech * Media & Entertainment * Blockchain & Web3 * Biotech * IoT & Hardware * SpaceTech * Productivity Tools * Travel & Hospitality * Clean Energy * AR/VR & Metaverse * FashionTech * Food & Beverage * SportsTech * Marketplace * GovTech * InsurTech * Child & Parenting * Elder Care & Longevity"
			/>
		</main>
	);
}
