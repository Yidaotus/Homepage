import "./Header.css";
import React from "react";
import { Link } from "gatsby";
import menuItems from "./menu.json";
import MobileMenu from "./MobileMenu/MobileMenu";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";

interface NavItemProps {
	href: string;
	text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text }) => (
	<Link
		to={href}
		activeClassName="font-semibold text-gray-800 dark:text-gray-200"
		className="font-normal text-black dark:text-white rounded-lg hover:bg-brand-light dark:hover:bg-brand-dark transition-all p-1 sm:px-3 sm:py-2"
	>
		{text}
	</Link>
);

const Header: React.FC = () => (
	<header className="flex justify-between items-center mx-4 pt-1 sm:pt-4 md:pt-8 md:mx-0 sticky sm:relative top-0 sm:top-0 pb-1 sm:pb-0 bg-white dark:bg-black border-b-2 sm:border-b-0 z-20">
		<nav>
			<MobileMenu />
			<ul className="hidden md:flex space-x-2">
				{menuItems.map((menuItem) => (
					<li>
						<NavItem href={menuItem.link} text={menuItem.name} />
					</li>
				))}
			</ul>
		</nav>
		<DarkModeToggle />
	</header>
);

export default Header;
