import React from "react";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface ISpotifyTrack {
	order: number;
	track: {
		artistString: string;
		name: string;
		uri: string;
		image: {
			localFile: IGatsbyImageData;
		};
	};
}

const SpotifyRecent: React.FC<{ tracks: Array<ISpotifyTrack> }> = ({
	tracks,
}) => (
	<div>
		<ol className="divide-y divide-solid divide-black dark:divide-white divide-opacity-10 space-y-1 sm:space-y-2">
			{tracks.map(({ track }, index) => (
				<li className="flex flex-row items-center px-1 dark:border-opacity-20 pt-1 sm:pt-2">
					<p className="font-bold text-gray-400 text-lg lining-nums">
						{index + 1}
					</p>
					<p className="ml-4 flex flex-col">
						<a
							href={track.uri}
							className="hover:text-brand text-md font-semibold"
						>
							<span>{track.name}</span>
						</a>
						<span className="text">{track.artistString}</span>
					</p>
					<GatsbyImage
						className="w-14 h-14 ml-auto my-auto"
						image={
							getImage(track.image.localFile) as IGatsbyImageData
						}
						alt="Charicatur Waving"
					/>
				</li>
			))}
		</ol>
	</div>
);

export default SpotifyRecent;
