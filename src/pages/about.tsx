import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { getImage } from "gatsby-plugin-image";
import ExperienceQL from "../components/Experience/ExperienceQL";
import Layout from "../components/Layout";
import SkillsQL from "../components/Skills/SkillsQL";
import { H1, H2 } from "../components/Typography";
import SpotifyRecentQL from "../components/Spotify/SpotifyRecentQL";
import ContentBlock, {
	IContentBlock,
} from "../components/ContentBlock/ContentBlock";
import Spacer from "../components/Spacer";

const IndexPage = () => {
	const aboutBlockQuery = useStaticQuery<{
		allContentBlocksJson: {
			nodes: Array<
				Omit<IContentBlock, "content"> & {
					content: { childMarkdownRemark: { html: string } };
				}
			>;
		};
	}>(graphql`
		{
			allContentBlocksJson(
				filter: { id: { in: ["about", "personal"] } }
			) {
				nodes {
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
		}
	`);
	const indexBlockData = aboutBlockQuery.allContentBlocksJson.nodes;

	const avatarImg = indexBlockData[0]?.image
		? getImage(indexBlockData[0].image)
		: undefined;
	const guitarImg = indexBlockData[1]?.image
		? getImage(indexBlockData[1].image)
		: undefined;

	return (
		<Layout>
			<div className="flex justify-center content-center flex-col relative">
				<ContentBlock
					content={indexBlockData[0].content.childMarkdownRemark.html}
					image={avatarImg}
					reversed={indexBlockData[0].reversed}
				/>
				<Spacer visible />
				<div className="mb-16">
					<H1>Experience</H1>
					<H2>My working experience</H2>
					<ExperienceQL />
				</div>
				<div className="mb-16">
					<H1>Skills</H1>
					<H2>Skills I have</H2>
					<SkillsQL />
				</div>
				<Spacer />
				<ContentBlock
					content={indexBlockData[1].content.childMarkdownRemark.html}
					image={guitarImg}
					reversed={indexBlockData[1].reversed}
				/>
				<Spacer visible />
				<div className="mb-16">
					<H1>Recent Hits</H1>
					<H2>
						Music is a key element of my life. Here is what
						I&apos;ve been listening to recently.
					</H2>
					<SpotifyRecentQL />
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
