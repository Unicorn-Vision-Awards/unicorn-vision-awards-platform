import clsx from "clsx";
import { Btn } from "../../button/btn";

interface IHomepageHeroProps {
	children: React.ReactNode;
	eventDate: string;
	btnText: string;
	btnHref: string;
}

export const HomepageHero = ({
	children,
	eventDate,
	btnText,
	btnHref,
}: IHomepageHeroProps) => {
	return (
		<section className="bg-vision-red">
			<div
				className={clsx(
					"container mx-auto py-40 lg:py-48 text-center",
					"max-w-xs sm:max-w-xl lg:max-w-5xl",
					"flex flex-col items-center",
					"gap-6 lg:gap-8",
				)}
			>
				<h1
					className={clsx(
						"text-white font-extrabold text-balance leading-none",
						"text-4xl sm:text-7xl lg:text-9xl",
					)}
				>
					{children}
				</h1>
				<h2 className={clsx("text-white text-2xl lg:text-4xl font-medium")}>
					{eventDate}
				</h2>
				<div>
					<Btn href={btnHref}>{btnText}</Btn>
				</div>
			</div>
		</section>
	);
};
