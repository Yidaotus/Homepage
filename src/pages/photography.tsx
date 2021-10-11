import { graphql, useStaticQuery } from "gatsby";
import {
	GatsbyImage,
	getImage,
	IGatsbyImageData,
	ImageDataLike,
} from "gatsby-plugin-image";
import * as React from "react";
import ContentBlock, {
	IContentBlock,
} from "../components/ContentBlock/ContentBlock";
import Layout from "../components/Layout";

interface ImageProp {
	full: IGatsbyImageData;
	thumb: IGatsbyImageData;
}

const IndexPage = () => {
	const photoBlockQuery = useStaticQuery<{
		contentBlocksJson: IContentBlock & {
			content: {
				childMarkdownRemark: {
					id: string;
					html: string;
				};
			};
		};
		allFile: {
			nodes: Array<{
				childImageSharp: ImageProp;
			}>;
		};
	}>(graphql`
		{
			contentBlocksJson(id: { eq: "photography" }) {
				id
				reversed
				content {
					childMarkdownRemark {
						id
						html
					}
				}
				image {
					childImageSharp {
						gatsbyImageData(
							width: 305
							layout: CONSTRAINED
							placeholder: BLURRED
						)
					}
				}
			}
			allFile(
				sort: { fields: relativePath, order: ASC }
				filter: { sourceInstanceName: { eq: "photography_gallery" } }
			) {
				nodes {
					childImageSharp {
						thumb: gatsbyImageData(width: 780, placeholder: BLURRED)
						full: gatsbyImageData(layout: FULL_WIDTH, quality: 100)
					}
				}
			}
		}
	`);
	const photoBlockData = photoBlockQuery.contentBlocksJson;
	const photoImage = photoBlockData?.image
		? (getImage(photoBlockData.image) as IGatsbyImageData)
		: undefined;

	const [lightBoxImage, setLightBoxImage] =
		React.useState<ImageDataLike | null>(null);

	const photoGalleryData = photoBlockQuery.allFile.nodes;

	const galleryPosition = [
		[0, 20],
		[0, 48],
		[0, 30],
		[0, 55],
		[0, 30],
		[0, 25],
		[0, 50],
		[0, 18],
		[0, 45],
	];

	return (
		<Layout>
			<div className="flex flex-col">
				<div
					className={`fixed z-30 bg-black bg-opacity-80 w-full h-full top-0 left-0
								${lightBoxImage ? "block" : "hidden"}`}
					onClick={() => setLightBoxImage(null)}
					role="none"
				>
					<div className="flex items-center justify-center h-full w-full">
						{lightBoxImage && (
							<GatsbyImage
								image={
									getImage(lightBoxImage) as IGatsbyImageData
								}
								className="m-auto w-full max-h-[90%] max-w-[90%] dark:ring-white"
								imgStyle={{ objectFit: "contain" }}
								alt="lightbox imagec"
							/>
						)}
					</div>
				</div>
				<ContentBlock
					{...photoBlockData}
					content={photoBlockData.content.childMarkdownRemark.html}
					image={photoImage}
				/>
				<div className="flex flex-row flex-wrap mx-">
					{photoGalleryData.map((photoBookImage, index) => (
						<div
							// eslint-disable-next-line react/no-array-index-key
							key={index}
							className="transform hover:scale-[1.01] transition-all"
							role="none"
							onClick={() =>
								setLightBoxImage(
									photoBookImage.childImageSharp.full
								)
							}
						>
							<GatsbyImage
								className="object-none h-40 w-full mb-1 shadow-sm rounded dark:ring-1 dark:ring-white dark:ring-opacity-10"
								imgStyle={{
									objectFit: "cover",
									objectPosition: `${galleryPosition[index][0]}% ${galleryPosition[index][1]}% `,
								}}
								image={
									getImage(
										photoBookImage.childImageSharp.thumb
									) as IGatsbyImageData
								}
								alt="Charicatur Waving"
							/>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
