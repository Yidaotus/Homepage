import "./SpotifyCurrentlyPlaying.css";
import React from "react";
import useCurrentlyPlaying from "../../api/useCurrentlyPlaying";

const SpotifyCurrentlyPlaying: React.FC = () => {
	const [playingItem, fetching] = useCurrentlyPlaying();

	const isPlaying = playingItem && playingItem.isPlaying;
	return isPlaying ? (
		<div className="fixed bottom-4 right-4 bg-white rounded p-2 drop-shadow-md flex justify-start items-center dark:bg-brand-dark min-w-[250px]">
			<div className="relative">
				<div className="pr-2">
					<a href={playingItem.item.uri}>
						<img
							className="rounded h-16 border border-brand-light"
							src={
								playingItem.item.album.images.sort(
									(image1, image2) =>
										image1.height - image2.height
								)[0].url
							}
							alt={playingItem.item.album.name}
						/>
					</a>
				</div>
				<div className="absolute bottom-0 left-0 eq-container">
					<span className="bar b1" />
					<span className="bar b2" />
					<span className="bar b3" />
					<span className="bar b4" />
					<span className="bar b5" />
				</div>
			</div>
			<div>
				<div className="font-bold">{playingItem.item.name}</div>
				<div className="text-sm">
					{playingItem.item.artists
						.map((artist) => artist.name)
						.join(", ")}
				</div>
			</div>
		</div>
	) : (
		<></>
	);
};

export default SpotifyCurrentlyPlaying;
