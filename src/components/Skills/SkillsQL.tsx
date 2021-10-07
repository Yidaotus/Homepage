import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { GraphQLType } from "../../@types/ql";
import Skills, { ISkillData } from "./Skills";

const SKILLS_QL_ENDPOINT = "allSkillsJson" as const;

const SkillsQL = () => {
	const skillQueryData = useStaticQuery<
		GraphQLType<typeof SKILLS_QL_ENDPOINT, Array<ISkillData>>
	>(graphql`
		{
			allSkillsJson {
				nodes {
					title
					skills {
						level
						name
					}
				}
			}
		}
	`);
	const skillData = skillQueryData[SKILLS_QL_ENDPOINT].nodes;

	return <Skills skills={skillData} />;
};

export default SkillsQL;
