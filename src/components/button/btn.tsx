import clsx from "clsx";
import Link from "next/link";

interface IBtnProps {
	children: React.ReactNode;
	href: string;
}

export const Btn = ({ children, href }: IBtnProps) => {
	return (
		<Link
			href={href}
			className={clsx(
				"inline-flex",
				"px-4 md:px-8 lg:px-12",
				"py-3 md:py-4 lg:py-6",
				"leading-[20px]",
				"border-none",
				"rounded-sm",
				"overflow-hidden",
				"text-base lg:text-lg font-bold",
				"transition-all duration-200",
				"bg-white text-dark-cocoa",
				"hover:bg-dark-cocoa hover:text-white",
			)}
		>
			{children}
		</Link>
	);
};
