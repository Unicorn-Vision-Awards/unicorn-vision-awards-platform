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
				"px-12 py-6 rounded-sm",
				"text-lg font-bold",
				"transition-all duration-200",
				"bg-white text-dark-cocoa",
				"hover:bg-dark-cocoa hover:text-white",
			)}
		>
			{children}
		</Link>
	);
};
