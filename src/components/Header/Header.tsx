import "./Header.css";
import React from "react";

const Header: React.FC = () => (
	<header className="header-container">
		<div className="logo-container">
			<span className="text-green">Y</span>
			<span className="text-black">idaou.</span>
			<span className="text-green">t</span>
			<span className="text-black">ech</span>
		</div>
		<ul className="menu-container">
			<li>Home</li>
			<li>Projects</li>
			<li className="menu-active">About</li>
			<li>Contact</li>
		</ul>
	</header>
);

export default Header;
