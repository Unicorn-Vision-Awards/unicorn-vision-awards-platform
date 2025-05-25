import clsx from "clsx";
import Marquee from "react-fast-marquee";

interface ITextMoverProps {
	text?: string[];
	speed?: number;
	separator?: string;
	direction?: "left" | "right";
	gradientColor?: string;
}

export const TextMover = ({
	text,
	separator = " • ",
	speed = 50,
	direction = "right",
	gradientColor,
}: ITextMoverProps) => {
	const marqueeText = text?.join(separator);

	return (
		<div
			className={clsx(
				"overflow-hidden whitespace-nowrap w-full",
				"flex",
				"gap-8",
				"font-bold",
				"text-[150px]",
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
