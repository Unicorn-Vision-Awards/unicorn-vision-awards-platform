import clsx from "clsx";

interface ITextMoverProps {
	text: string;
	direction?: "left" | "right";
}

export const TextMover = ({
	text = "* See You For 2025",
	direction = "right",
}: ITextMoverProps) => {
	const keyframeName = `scroll-${direction}`;
	const textLength = text.length;
	const duration = textLength * 2;

	return (
		<div className="overflow-hidden whitespace-nowrap w-full">
			<div
				className={clsx(
					"flex",
					"gap-8",
					"font-bold",
					"text-[150px]",
					"text-white",
				)}
			>
				<span
					style={{
						animation: `${keyframeName} ${duration}s linear infinite`,
					}}
				>
					{text}
				</span>
				<span
					style={{
						animation: `${keyframeName} ${duration}s linear infinite`,
					}}
				>
					{text}
				</span>
				<span
					style={{
						animation: `${keyframeName} ${duration}s linear infinite`,
					}}
				>
					{text}
				</span>
			</div>
		</div>
	);
};
