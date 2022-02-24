import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";
import ContentBlock, {
	IContentBlock,
} from "../components/ContentBlock/ContentBlock";
import Layout from "../components/Layout";
import ProjectsQL from "../components/Project/ProjectsQL";
import Spacer from "../components/Spacer";

const ProjectsPage = () => {
	const projectsBlockQuery = useStaticQuery<{
		contentBlocksJson: Omit<IContentBlock, "content"> & {
			content: { childMarkdownRemark: { html: string } };
		};
	}>(graphql`
		{
			contentBlocksJson(jsonId: { eq: "projects" }) {
				reversed
				content {
					childMarkdownRemark {
						id
						html
					}
				}
				image {
					childImageSharp {
						gatsbyImageData(width: 305, placeholder: BLURRED)
					}
				}
			}
		}
	`);
	const projectsBlockData = projectsBlockQuery.contentBlocksJson;
	const workImg = projectsBlockData.image
		? getImage(projectsBlockData.image)
		: undefined;

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<html lang="en" />
				<title>Photos I shot</title>
				<meta
					name="description"
					content="Projects I developed either as a hobby project or professionally"
				/>
			</Helmet>
			<div className="flex justify-center content-center flex-col">
				<ContentBlock
					content={projectsBlockData.content.childMarkdownRemark.html}
					image={workImg}
					reversed={projectsBlockData.reversed}
				/>
				<Spacer visible />
				<ProjectsQL />
			</div>
		</div>
	);
};

export default ProjectsPage;
