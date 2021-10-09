import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { GraphQLType } from "../@types/ql";
import Layout from "../components/Layout";
import { H1, H2 } from "../components/Typography";

const PHOTO_QL_ENDPOINT = "allFile" as const;

interface ImageProp {
	full: IGatsbyImageData;
	thumb: IGatsbyImageData;
}

const IndexPage = () => {
	const [lightBoxImage, setLightBoxImage] =
		React.useState<IGatsbyImageData | null>(null);

	const photosGalleryQueryData = useStaticQuery<
		GraphQLType<
			typeof PHOTO_QL_ENDPOINT,
			Array<{ childImageSharp: ImageProp }>
		>
	>(
		graphql`
			{
				allFile(
					sort: { fields: relativePath, order: ASC }
					filter: {
						sourceInstanceName: { eq: "photography_gallery" }
					}
				) {
					nodes {
						childImageSharp {
							thumb: gatsbyImageData(
								width: 780
								placeholder: BLURRED
							)
							full: gatsbyImageData(layout: FULL_WIDTH)
						}
					}
				}
			}
		`
	);
	const photoGalleryData = photosGalleryQueryData[PHOTO_QL_ENDPOINT].nodes;

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
			<div className="flex flex-col space-y-16">
				{lightBoxImage && (
					<div
						className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-30 bg-black bg-opacity-80 overflow-hidden"
						onClick={() => setLightBoxImage(null)}
						role="none"
					>
						<img
							src={getImage(lightBoxImage)?.images.fallback?.src}
							className="m-auto h-[90%] w-auto object-contain ring-black ring-2 dark:ring-white"
							alt="lightbox imagec"
						/>
					</div>
				)}
				<div className="sm:w-2/3">
					<H1>Photography</H1>
					<H2>A small gallery of recent photographs</H2>
					<p className="text-gray-600 dark:text-gray-400">
						My Equipment:
					</p>
					<ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-1 mt-2 space-y-2">
						<li>Sony Alpha 6400</li>
						<li>Sony 18-134mm f/3.5-5.6</li>
						<li>Cullmann Alpha 2800</li>
					</ul>
				</div>
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
