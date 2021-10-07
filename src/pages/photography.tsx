import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { GraphQLType } from "../@types/ql";
import Layout from "../components/Layout";
import { H1, H2 } from "../components/Typography";

const PHOTO_QL_ENDPOINT = "allFile" as const;

const IndexPage = () => {
	const photosGalleryQueryData = useStaticQuery<
		GraphQLType<typeof PHOTO_QL_ENDPOINT, Array<IGatsbyImageData>>
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
							gatsbyImageData(placeholder: BLURRED)
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
						// eslint-disable-next-line react/no-array-index-key
						<div key={index}>
							<GatsbyImage
								className="object-none h-40 w-full mb-1 border shadow-sm dark:border-gray-600"
								imgStyle={{
									objectFit: "cover",
									objectPosition: `${galleryPosition[index][0]}% ${galleryPosition[index][1]}% `,
								}}
								image={
									getImage(photoBookImage) as IGatsbyImageData
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
