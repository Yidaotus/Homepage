import * as React from "react";
import TextTransition, { presets } from "react-text-transition";

const WELCOMES = [
	"Welcome",
	"ようこそ",
	"Bienvenue",
	"어서 오세요",
	"Välkommen",
	"欢迎",
	"Wilkommen",
	"歡迎光臨",
	"Tervetuloa",
	"歡迎",
	"Velkommen",
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
			Math.random() * 2000 + 3000
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div className="font-bold flex flex-row justify-end sm:justify-center items-center sm:truncate sm:pb-1 lg:pb-2">
			<TextTransition
				className=" text-brand text-3xl md:text-5xl lg:text-6xl sm:mr-4 sm:ml-2 m-auto"
				text={WELCOMES[index % WELCOMES.length]}
				springConfig={presets.stiff}
			/>
			<div className="font-semibold w-[130px] sm:w-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
				to my digital place
			</div>
		</div>
	);
};

export default WelcomeBanner;
