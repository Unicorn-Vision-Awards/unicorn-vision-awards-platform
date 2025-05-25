import { siteTitle } from "@/src/constants/site";

export const Header = () => {
	return (
		<header
			className="bg-dark-cocoa h-20 flex items-center"
			data-testid="header"
		>
			<div className="container mx-auto px-4 py-4">{siteTitle}</div>
		</header>
	);
};
