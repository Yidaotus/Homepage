import { useStaticQuery, graphql } from "gatsby";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { GraphQLDataType } from "../@types/ql";
import ContentBlock, {
	IContentBlock,
} from "../components/ContentBlock/ContentBlock";
import Layout from "../components/Layout";
import ProjectsQL from "../components/Project/ProjectsQL";
import Spacer from "../components/Spacer";

const INDEXBLOCK_QL_ENDPOINT = "contentBlocksJson" as const;
const ProjectsPage = () => {
	const projectsBlockQuery = useStaticQuery<
		GraphQLDataType<typeof INDEXBLOCK_QL_ENDPOINT, IContentBlock>
	>(graphql`
		{
			contentBlocksJson(id: { eq: "projects" }) {
				id
				reversed
				subtitle
				content
				title
				image {
					childImageSharp {
						gatsbyImageData(width: 305, placeholder: BLURRED)
					}
				}
			}
		}
	`);
	const projectsBlockData = projectsBlockQuery[INDEXBLOCK_QL_ENDPOINT];
	const workImg = getImage(projectsBlockData.image) as IGatsbyImageData;

	return (
		<Layout>
			<div className="flex justify-center content-center flex-col">
				<ContentBlock {...projectsBlockData} image={workImg} />
				<Spacer visible />
				<ProjectsQL />
			</div>
		</Layout>
	);
};

export default ProjectsPage;
