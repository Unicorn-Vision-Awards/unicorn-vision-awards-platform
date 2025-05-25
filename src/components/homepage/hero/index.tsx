import { UVA2025eventDateFormatted } from "@/src/constants/event-2025";
import { siteTitle } from "@/src/constants/site";

export const HomepageHero = () => {
	return (
		<section className="bg-vision-red">
			<div className="container mx-auto py-48 text-center">
				<h1 className="text-white text-9xl font-extrabold text-balance mb-8 leading-none">
					{siteTitle} 2025
				</h1>
				<h2 className="text-white text-4xl font-bold mb-12">
					{UVA2025eventDateFormatted}
				</h2>
			</div>
		</section>
	);
};
