import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { H1, H2 } from "../components/Typography";
import MediumFeedQL from "../components/MediumFeed/MediumFeedQL";
import ContentBlock, {
	IContentBlock,
} from "../components/ContentBlock/ContentBlock";
import WelcomeBanner from "../components/WelcomeBanner/WelcomeBanner";
import Spacer from "../components/Spacer";
import LikedTech from "../components/LikedTech/LikedTech";

const IndexPage = () => {
	const indexBlockQuery = useStaticQuery<{
		contentBlocksJson: Omit<IContentBlock, "content"> & {
			content: { childMarkdownRemark: { html: string } };
		};
	}>(graphql`
		{
			contentBlocksJson(jsonId: { eq: "index" }) {
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
			<Helmet>
				<meta charSet="utf-8" />
				<html lang="en" />
				<title>Yidaou.tech</title>
				<meta
					name="description"
					content="Homepage and development experience for me as a full stack developer"
				/>
			</Helmet>
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
					<Spacer />
					<div>
						<H1>Tech I Like</H1>
						<LikedTech />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
