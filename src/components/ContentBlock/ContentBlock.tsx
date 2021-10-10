import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { H1, H2 } from "../Typography";

export interface IContentBlock {
	title: string;
	subtitle: string;
	content: string;
	image?: IGatsbyImageData;
	reversed?: boolean;
}

const ContentBlock: React.FC<IContentBlock> = ({
	title,
	subtitle,
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
			<div className="w-1/2 mb-4 sm:mb-0 sm:w-1/3 md:w-5/12 m-auto">
				<GatsbyImage image={image} alt="Charicatur Waving" />
			</div>
		)}
		<div
			className={`${image && "sm:w-2/3"} ${
				image && !reversed && "sm:ml-8"
			} `}
		>
			<H1>{title}</H1>
			<H2>{subtitle}</H2>
			<p
				className="text-gray-600 dark:text-gray-400 list-inside list-disc"
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	</div>
);

export default ContentBlock;
