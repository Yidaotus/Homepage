import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { H1, H2 } from "../components/Typography";
import MediumFeedQL from "../components/MediumFeed/MediumFeedQL";
import ContentBlock, {
	IContentBlock,
} from "../components/ContentBlock/ContentBlock";
import WelcomeBanner from "../components/WelcomeBanner/WelcomeBanner";
import Spacer from "../components/Spacer";

const IndexPage = () => {
	const indexBlockQuery = useStaticQuery<{
		contentBlocksJson: Omit<IContentBlock, "content"> & {
			content: { childMarkdownRemark: { html: string } };
		};
	}>(graphql`
		{
			contentBlocksJson(id: { eq: "index" }) {
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
		}
	`);
	const indexBlockData = indexBlockQuery.contentBlocksJson;
	const charicaturImage = indexBlockData.image
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
					<ContentBlock
						content={
							indexBlockData.content.childMarkdownRemark.html
						}
						image={charicaturImage}
						reversed={indexBlockData.reversed}
					/>
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
