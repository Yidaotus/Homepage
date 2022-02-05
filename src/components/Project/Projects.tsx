import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { GraphQLType } from "../../@types/ql";
import ProjectCard from "./ProjectCard";
import { ITechInfo } from "./TechInfo";
import { notUndefined } from "../../helper/utility";

const TECHS_QL_ENDPOINT = "allTechJson" as const;

export interface IProjectData {
	title: string;
	description: string;
	image: IGatsbyImageData;
	repo?: string;
	link?: string;
	technologies?: Array<string>;
}

const Projects: React.FC<{ projects: Array<IProjectData> }> = ({
	projects,
}) => {
	const techQueryData = useStaticQuery<
		GraphQLType<typeof TECHS_QL_ENDPOINT, Array<ITechInfo>>
	>(graphql`
		{
			allTechJson {
				nodes {
					techId
					name
					link
					icon {
						publicURL
					}
				}
			}
		}
	`);
	const techData = techQueryData[TECHS_QL_ENDPOINT].nodes;

	const mappedProjects = projects.map((project) => {
		const projectTechInfos =
			project.technologies
				?.map((projectTech) =>
					techData.find((tech) => tech.techId === projectTech)
				)
				.filter(notUndefined) || [];
		return { ...project, technologies: projectTechInfos };
	});

	return (
		<div className="flex flex-row flex-wrap">
			{mappedProjects.map((project) => (
				<ProjectCard {...project} />
			))}
		</div>
	);
};

export default Projects;
