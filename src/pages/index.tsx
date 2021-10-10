import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { H1, H2 } from "../components/Typography";
import MediumFeedQL from "../components/MediumFeed/MediumFeedQL";
import ContentBlock, {
	IContentBlock,
} from "../components/ContentBlock/ContentBlock";
import { GraphQLDataType } from "../@types/ql";
import WelcomeBanner from "../components/WelcomeBanner/WelcomeBanner";
import Spacer from "../components/Spacer";

const INDEXBLOCK_QL_ENDPOINT = "contentBlocksJson" as const;
const IndexPage = () => {
	const indexBlockQuery = useStaticQuery<
		GraphQLDataType<typeof INDEXBLOCK_QL_ENDPOINT, IContentBlock>
	>(graphql`
		{
			contentBlocksJson(id: { eq: "index" }) {
				id
				reversed
				subtitle
				content
				title
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
		}
	`);
	const indexBlockData = indexBlockQuery[INDEXBLOCK_QL_ENDPOINT];
	const charicaturImage = indexBlockData?.image
		? getImage(indexBlockData.image)
		: undefined;

	return (
		<Layout>
			<div className="flex flex-col">
				<div className="absolute w-full left-0">
					<WelcomeBanner />
				</div>
				<div className="flex flex-col mt-24 sm:mt-8 md:mt-11 lg:mt-14">
					<Spacer visible />
					<ContentBlock {...indexBlockData} image={charicaturImage} />
					<Spacer />
					<div>
						<H1>Latest Posts</H1>
						<H2>Latest posts from my Medium Blog</H2>
						<MediumFeedQL />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
