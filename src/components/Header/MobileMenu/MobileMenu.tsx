import "./MobileMenu.css";
import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import menuItems from "../menu.json";
import useDelayedRender from "../../../helper/useDelayedRenderer";

const MenuIcon = (props: JSX.IntrinsicElements["svg"]) => (
	<svg
		className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		{...props}
	>
		<path
			d="M2.5 7.5H17.5"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M2.5 12.5H17.5"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const CrossIcon = (props: JSX.IntrinsicElements["svg"]) => (
	<svg
		className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
		viewBox="0 0 24 24"
		width="24"
		height="24"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		fill="none"
		shapeRendering="geometricPrecision"
		{...props}
	>
		<path d="M18 6L6 18" />
		<path d="M6 6l12 12" />
	</svg>
);

export default function MobileMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { mounted: isMenuMounted, rendered: isMenuRendered } =
		useDelayedRender(isMenuOpen, {
			enterDelay: 10,
			exitDelay: 300,
		});

	const toggleMenu = () => {
		if (isMenuOpen) {
			setIsMenuOpen(false);
			document.body.style.overflow = "";
		} else {
			setIsMenuOpen(true);
			document.body.style.overflow = "hidden";
		}
	};

	useEffect(
		() =>
			function cleanup() {
				document.body.style.overflow = "";
			},
		[]
	);

	return (
		<>
			<button
				className="visible md:hidden burger"
				aria-label="Toggle menu"
				type="button"
				onClick={toggleMenu}
			>
				<MenuIcon data-hide={isMenuOpen} />
				<CrossIcon data-hide={!isMenuOpen} />
			</button>
			{isMenuMounted && (
				<ul
					className={`menu flex flex-col absolute bg-white dark:bg-black ${
						isMenuRendered && "menuRendered"
					}`}
				>
					{menuItems.map((menuItem, index) => {
						const transitionDelay = 150 + index * 75;
						return (
							<li
								className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold hover:text-brand dark:hover:text-brand-light"
								style={{
									transitionDelay: `${transitionDelay}ms`,
								}}
							>
								<Link to={menuItem.link}>
									<a
										className="flex w-auto pb-4"
										onClick={() => {
											toggleMenu();
										}}
										role="link"
										tabIndex={0}
										onKeyPress={() => {
											toggleMenu();
										}}
									>
										{menuItem.name}
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
}
