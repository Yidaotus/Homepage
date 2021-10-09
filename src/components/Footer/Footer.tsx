import "./Footer.css";
import React from "react";
import { GitHubIcon, MediumIcon } from "../Icons";

const Footer: React.FC = () => (
	<footer className="border-t-2 inset-auto border-black flex justify-between pt-2 border-opacity-20 mx-4 items-center dark:border-white dark:border-opacity-20">
		<div className="opacity-40 text-sm">© 2021 Daniel Voigt</div>
		<div className="space-x-2 flex">
			<a
				href="https://github.com/Yidaotus/"
				target="_blank"
				rel="noreferrer"
			>
				<GitHubIcon size={8} opacity="0.8" />
			</a>
			<a
				href="https://medium.com/@yidaotus"
				target="_blank"
				rel="noreferrer"
			>
				<MediumIcon size={8} opacity="0.8" />
			</a>
		</div>
	</footer>
);

export default Footer;
