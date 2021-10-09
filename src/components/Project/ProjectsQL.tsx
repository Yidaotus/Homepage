import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { GraphQLType } from "../../@types/ql";
import Projects, { IProjectData } from "./Projects";

const PROJECTS_QL_ENDPOINT = "allProjectsJson" as const;

const SkillsQL = () => {
	const projectsQueryData = useStaticQuery<
		GraphQLType<typeof PROJECTS_QL_ENDPOINT, Array<IProjectData>>
	>(graphql`
		{
			allProjectsJson {
				nodes {
					title
					description
					link
					repo
					image {
						childImageSharp {
							gatsbyImageData(width: 856)
						}
					}
				}
			}
		}
	`);
	const projectsData = projectsQueryData[PROJECTS_QL_ENDPOINT].nodes;

	return <Projects projects={projectsData} />;
};

export default SkillsQL;
