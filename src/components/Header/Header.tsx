import "./Header.css";
import React from "react";
import { Link } from "gatsby";
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
		className="font-normal text-black dark:text-white rounded-lg hover:bg-green-light dark:hover:bg-green-dark transition-all p-1 sm:px-3 sm:py-2"
	>
		{text}
	</Link>
);

const Header: React.FC = () => (
	<header className="flex justify-between items-center mx-4 pt-1 sm:pt-4 md:pt-8 md:mx-0 sticky sm:relative top-0 sm:top-0 bg-white dark:bg-black border-b-2 sm:border-b-0 z-50">
		<nav>
			<MobileMenu />
			<ul className="hidden md:flex space-x-2">
				<li>
					<NavItem href="/" text="Home" />
				</li>
				<li>
					<NavItem href="/projects" text="Projects" />
				</li>
				<li>
					<NavItem href="/about" text="About" />
				</li>
				<li>
					<NavItem href="/photography" text="Photography" />
				</li>
				<li>Contact</li>
			</ul>
		</nav>
		<DarkModeToggle />
	</header>
);

export default Header;
