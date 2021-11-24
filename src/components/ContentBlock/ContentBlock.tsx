import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

export interface IContentBlock {
	content: string;
	image?: IGatsbyImageData;
	reversed?: boolean;
}

const ContentBlock: React.FC<IContentBlock> = ({
	content,
	image,
	reversed = false,
}) => (
	<div
		className={`flex flex-col ${
			reversed ? "sm:flex-row-reverse justify-items-start" : "sm:flex-row"
		} items-start`}
	>
		{image && (
			<div className="w-1/2 mb-4 sm:mb-0 sm:w-1/3 md:w-5/12 m-auto sm:m-0">
				<GatsbyImage image={image} alt="Caricature Waving" />
			</div>
		)}
		<div
			className={`${image && "sm:w-2/3"} ${
				image && !reversed && "sm:ml-8"
			} `}
		>
			<div
				className="markdown"
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	</div>
);

export default ContentBlock;
