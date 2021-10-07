import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import {
	GatsbyImage,
	getImage,
	IGatsbyImageData,
	ImageDataLike,
} from "gatsby-plugin-image";
import ExperienceQL from "../components/Experience/ExperienceQL";
import Layout from "../components/Layout";
import SkillsQL from "../components/Skills/SkillsQL";
import { H1, H2 } from "../components/Typography";
import SpotifyRecentQL from "../components/Spotify/SpotifyRecentQL";

interface AboutImages {
	avatar: ImageDataLike;
	guitar: ImageDataLike;
}

const IndexPage = () => {
	const imageData = useStaticQuery<AboutImages>(graphql`
		query {
			avatar: file(relativePath: { eq: "charicatur_hi.png" }) {
				childImageSharp {
					gatsbyImageData(width: 362, placeholder: BLURRED)
				}
			}
			guitar: file(relativePath: { eq: "guitar_pose.png" }) {
				childImageSharp {
					gatsbyImageData(width: 362, placeholder: BLURRED)
				}
			}
		}
	`);
	const avatarImg = getImage(imageData.avatar) as IGatsbyImageData;
	const guitarImg = getImage(imageData.guitar) as IGatsbyImageData;

	return (
		<Layout>
			<div className="flex justify-center content-center flex-col">
				<div className="flex flex-col sm:flex-row items-start mb-16">
					<div className="w-1/3 sm:w-1/5 md:1/4 m-auto">
						<GatsbyImage
							image={avatarImg}
							alt="Charicatur Waving"
						/>
					</div>
					<div className="sm:w-2/3 sm:ml-8 self-center">
						<H1>About me</H1>
						<H2>
							Software Developer / Musician / Language Enthusiast
						</H2>
						<p className="text-gray-600 dark:text-gray-400">
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum.
						</p>
					</div>
				</div>
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
				<div className="flex flex-col-reverse sm:flex-row items-start mb-16">
					<div className="sm:w-3/4 self-center">
						<H1>Personal</H1>
						<H2>About me personal</H2>
						<p className="text-gray-600 dark:text-gray-400">
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum.
						</p>
					</div>
					<div className="w-2/5 sm:w-1/4 m-auto">
						<GatsbyImage
							image={guitarImg}
							alt="Charicatur Waving"
						/>
					</div>
				</div>
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
