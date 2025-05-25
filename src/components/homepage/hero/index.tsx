import { UVA2025eventDateFormatted } from "@/src/constants/event-2025";
import { siteTitle } from "@/src/constants/site";
import { Btn } from "../../button/btn";

export const HomepageHero = () => {
	return (
		<section className="bg-vision-red">
			<div className="container mx-auto py-48 text-center">
				<div>
					<h1 className="text-white text-9xl font-extrabold text-balance mb-8 leading-none">
						{siteTitle} 2025
					</h1>
					<h2 className="text-white text-4xl font-bold mb-16">
						{UVA2025eventDateFormatted}
					</h2>
					<Btn href="/">Submit Your Vision</Btn>
				</div>
			</div>
		</section>
	);
};
