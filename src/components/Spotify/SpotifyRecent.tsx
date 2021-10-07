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
	<div className="space-y-4">
		<ol>
			{tracks.map(({ track }, index) => (
				<li className="flex flex-row items-center mb-2 pb-2 px-1 border-b border-black dark:border-white border-opacity-20 dark:border-opacity-20">
					<p className="font-bold text-gray-400 text-lg">
						{index + 1}
					</p>
					<p className="ml-4 flex flex-col">
						<a
							href={track.uri}
							className="hover:text-green text-md font-semibold"
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
