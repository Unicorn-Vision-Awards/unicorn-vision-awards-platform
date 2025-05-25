import clsx from "clsx";
import Marquee from "react-fast-marquee";

interface IMarqueeEffectProps {
	text?: string[];
	speed?: number;
	separator?: string;
	direction?: "left" | "right";
	gradientColor?: string;
}

export const MarqueeEffect = ({
	text,
	separator = " • ",
	speed = 50,
	direction = "right",
	gradientColor,
}: IMarqueeEffectProps) => {
	// const marqueeText = ` • ${text?.join(separator)} `;
	const marqueeText = text?.map((item) => ` • ${item} `).join("");

	return (
		<div
			className={clsx(
				"overflow-hidden whitespace-nowrap w-full",
				"flex gap-4",
				"bg-dark-cocoa",
				"font-bold",
				"leading-relaxed",
				"text-5xl sm:text-7xl md:text-9xl lg:text-[150px]",
				"text-white",
			)}
		>
			<Marquee
				direction={direction}
				speed={speed}
				gradient={true}
				gradientColor={gradientColor}
				gradientWidth={100}
			>
				{marqueeText}
			</Marquee>
		</div>
	);
};
