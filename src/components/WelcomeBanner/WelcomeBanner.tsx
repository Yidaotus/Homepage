import * as React from "react";
import TextTransition, { presets } from "react-text-transition";

const WELCOMES = [
	"Wilkommen",
	"Welcome",
	"ようこそ",
	"欢迎",
	"Welcom",
	"歡迎",
	"Välkommen",
	"환영",
	"Добро пожаловать",
];

const WelcomeBanner = () => {
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(
			() =>
				setIndex((oldIndex) => {
					let newIndex;
					do {
						newIndex = Math.floor(Math.random() * WELCOMES.length);
					} while (oldIndex === newIndex);
					return newIndex;
				}),
			Math.random() * 2000 + 5000
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div className="mt-3 sm:mt-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex justify-between items-center">
			<TextTransition
				className="w-2/3 m-auto text-brand"
				text={WELCOMES[index % WELCOMES.length]}
				springConfig={presets.gentle}
			/>
			<div className="w-1/3 font-semibold">to my digital place</div>
		</div>
	);
};

export default WelcomeBanner;
