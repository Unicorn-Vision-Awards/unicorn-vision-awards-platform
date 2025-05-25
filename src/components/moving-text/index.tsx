import { siteTitle } from "@/src/constants/site";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface IMovingTextProps {
	children: React.ReactNode;
}

// https://codepen.io/sheixt/pen/gOrZEve
export const MovingText = ({ children }: IMovingTextProps) => {
	const titleRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		if (titleRef.current) {
			const tl = gsap.timeline({ repeat: -1 });
			tl.to(titleRef.current, {
				duration: 30,
				backgroundPosition: "-960px 0",
				ease: "none",
			});
		}
	}, []);

	return (
		<div
			ref={titleRef}
			className="moving-bg text-white text-9xl font-extrabold text-balance mb-8 leading-none"
		>
			{siteTitle} 2025
		</div>
	);
};
