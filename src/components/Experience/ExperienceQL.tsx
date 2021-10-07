import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { GraphQLType } from "../../@types/ql";
import Experience, { IExperienceData } from "./Experience";

export const EXPERIENCES_QL_ENDPOINT = "allExperiencesJson";

const ExperienceQL = () => {
	const expQueryData = useStaticQuery<
		GraphQLType<typeof EXPERIENCES_QL_ENDPOINT, Array<IExperienceData>>
	>(graphql`
		{
			allExperiencesJson {
				nodes {
					title
					startDate
					endDate
					company
					activities
				}
			}
		}
	`);
	const expData = expQueryData[EXPERIENCES_QL_ENDPOINT].nodes;

	return <Experience experiences={expData} />;
};

export default ExperienceQL;
