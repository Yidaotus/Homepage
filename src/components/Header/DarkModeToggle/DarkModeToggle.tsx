import React, { useEffect, useState } from "react";

type ThemeValues = "dark" | "light";
const DARK_MODE_CLASS = "dark";

const DarkModeToggle: React.FC = () => {
	const [currentTheme, setCurrentTheme] = useState<ThemeValues>("light");

	useEffect(() => {
		const lsTheme = localStorage.getItem("theme") as ThemeValues;
		if (lsTheme) {
			setCurrentTheme(lsTheme);
		} else if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			setCurrentTheme("dark");
		}
	}, []);

	useEffect(() => {
		if (currentTheme === "dark") {
			document.body.classList.add(DARK_MODE_CLASS);
			localStorage.setItem("theme", currentTheme);
		} else {
			document.body.classList.remove(DARK_MODE_CLASS);
			localStorage.setItem("theme", currentTheme);
		}
	}, [currentTheme]);

	const toggleDarkMode = () => {
		if (currentTheme === "dark") {
			setCurrentTheme("light");
		} else {
			setCurrentTheme("dark");
		}
	};

	return (
		<button
			aria-label="Toggle Dark Mode"
			type="button"
			className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-600 dark:ring-gray-400 transition-all mr-2"
			onClick={() => toggleDarkMode()}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-5 h-5 text-gray-800 dark:text-gray-200"
			>
				{currentTheme === "dark" ? (
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				) : (
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				)}
			</svg>
		</button>
	);
};

export default DarkModeToggle;
