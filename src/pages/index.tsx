import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { H1, H2 } from "../components/Typography";
import MediumFeedQL from "../components/MediumFeed/MediumFeedQL";
import SpotifyRecentQL from "../components/Spotify/SpotifyRecentQL";

const IndexPage = () => {
	const imageData = useStaticQuery(graphql`
		query {
			avatar: file(relativePath: { eq: "avatar.png" }) {
				childImageSharp {
					gatsbyImageData(width: 290)
				}
			}
		}
	`);
	const charicaturImage = getImage(imageData.avatar) as IGatsbyImageData;

	return (
		<Layout>
			<div className="flex flex-col space-y-16">
				<div className="flex flex-col-reverse sm:flex-row items-start">
					<div className="sm:w-2/3">
						<H1>Daniel Voigt</H1>
						<H2>
							Software Developer / Musician / Language Enthusiast
						</H2>
						<p className="text-gray-600 dark:text-gray-400 mb-16">
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum.
						</p>
					</div>
					<div className="w-1/2 sm:w-1/3 m-auto mb-4 sm:mb-0">
						<GatsbyImage
							image={charicaturImage}
							alt="Charicatur Waving"
						/>
					</div>
				</div>
				<div> 
					<H1>Latest Posts</H1>
					<H2>Latest posts from my Medium Blog</H2>
					<MediumFeedQL />
				</div>
				<div>
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
