import { MarqueeEffect } from "../../marquee-effect";

export const HomepageMarquee = () => {
	const categories = [
		"AI",
		"Fintech",
		"EdTech",
		"HealthTech",
		"Biotech",
		"E-commerce",
		"Cybersecurity",
		"SaaS",
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
	];

	return (
		<section>
			<MarqueeEffect
				text={categories}
				// speed={200}
				direction="right"
				gradientColor="#321e18"
			/>
			<MarqueeEffect
				text={visionaryPowerWords}
				speed={100}
				direction="left"
				gradientColor="#321e18"
			/>
		</section>
	);
};
