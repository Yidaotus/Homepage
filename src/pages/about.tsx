import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import ExperienceQL from "../components/Experience/ExperienceQL";
import Layout from "../components/Layout";
import SkillsQL from "../components/Skills/SkillsQL";
import { H1, H2 } from "../components/Typography";
import SpotifyRecentQL from "../components/Spotify/SpotifyRecentQL";
import ContentBlock, {
	IContentBlock,
} from "../components/ContentBlock/ContentBlock";
import Spacer from "../components/Spacer";
import LikedTech from "../components/LikedTech/LikedTech";

type CardSides = "personal" | "professional";

const IndexPage = () => {
	const [visibleCardSide, setVisibleCardSide] =
		React.useState<CardSides>("personal");
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
				filter: { jsonId: { in: ["about", "personal"] } }
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
			<Helmet>
				<html lang="en" />
				<meta charSet="utf-8" />
				<title>About me</title>
				<meta
					name="description"
					content="About me personally and professionally"
				/>
			</Helmet>

			<div className="flex justify-center content-center flex-col relative">
				<ContentBlock
					content={indexBlockData[0].content.childMarkdownRemark.html}
					image={avatarImg}
					reversed={indexBlockData[0].reversed}
				/>
				<Spacer visible />
				<div className="flex sm:justify-center justify-between items-center">
					<button
						// activeClassName="font-semibold text-gray-800 dark:text-gray-200"
						className=" hover:bg-brand-light dark:hover:bg-brand-dark transition-all p-1 sm:px-3 sm:py-2 rounded"
						type="button"
						onClick={() => setVisibleCardSide("professional")}
					>
						<span
							className={`${
								visibleCardSide === "professional" &&
								"font-semibold text-gray-800 dark:text-gray-200 underline"
							} text-2xl sm:text-4xl text-black dark:text-white`}
						>
							Professional
						</span>
					</button>
					<span className="font-normal text-2xl sm:text-4xl text-black dark:text-white rounded-lg mx-4">
						|
					</span>
					<button
						// activeClassName="font-semibold text-gray-800 dark:text-gray-200"
						className=" hover:bg-brand-light dark:hover:bg-brand-dark transition-all p-1 sm:px-3 sm:py-2 rounded"
						type="button"
						onClick={() => setVisibleCardSide("personal")}
					>
						<span
							className={`${
								visibleCardSide === "personal" &&
								"font-semibold text-gray-800 dark:text-gray-200 underline"
							} text-2xl sm:text-4xl text-black dark:text-white`}
						>
							Personal
						</span>
					</button>
				</div>
				<Spacer visible />
				<div
					className={
						visibleCardSide === "professional"
							? "flip-in-ver-right block"
							: "hidden"
					}
				>
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
					<div>
						<H1>Tech I Like</H1>
						<H2>Tech I am currently using</H2>
						<LikedTech />
					</div>
				</div>
				<div
					className={
						visibleCardSide === "personal"
							? "flip-in-ver-right block"
							: "hidden"
					}
				>
					<ContentBlock
						content={
							indexBlockData[1].content.childMarkdownRemark.html
						}
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
			</div>
		</Layout>
	);
};

export default IndexPage;
