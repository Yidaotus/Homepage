import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import ExperienceQL from "../components/Experience/ExperienceQL";
import Layout from "../components/Layout";
import SkillsQL from "../components/Skills/SkillsQL";
import { H1, H2 } from "../components/Typography";
import SpotifyRecentQL from "../components/Spotify/SpotifyRecentQL";
import ContentBlock, {
	IContentBlock,
} from "../components/ContentBlock/ContentBlock";
import { GraphQLType } from "../@types/ql";
import Spacer from "../components/Spacer";

const ABOUTBLOCK_QL_ENDPOINT = "allContentBlocksJson" as const;
const IndexPage = () => {
	const aboutBlockQuery = useStaticQuery<
		GraphQLType<typeof ABOUTBLOCK_QL_ENDPOINT, Array<IContentBlock>>
	>(graphql`
		{
			allContentBlocksJson(
				filter: { id: { in: ["about", "personal"] } }
			) {
				nodes {
					id
					reversed
					subtitle
					content
					title
					image {
						childImageSharp {
							gatsbyImageData(
								width: 407
								layout: FULL_WIDTH
								placeholder: BLURRED
							)
						}
					}
				}
			}
		}
	`);
	const indexBlockData = aboutBlockQuery[ABOUTBLOCK_QL_ENDPOINT].nodes;

	const avatarImg = getImage(indexBlockData[0].image) as IGatsbyImageData;
	const guitarImg = getImage(indexBlockData[1].image) as IGatsbyImageData;

	return (
		<Layout>
			<div className="flex justify-center content-center flex-col relative">
				<ContentBlock {...indexBlockData[0]} image={avatarImg} />
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
				<ContentBlock {...indexBlockData[1]} image={guitarImg} />
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
