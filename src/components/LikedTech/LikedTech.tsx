import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { GraphQLType } from "../../@types/ql";
import TechInfo, { ITechInfo } from "../Project/TechInfo";

const TECHS_QL_ENDPOINT = "allTechJson" as const;

const LikedTech: React.FC = () => {
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

	return (
		<div>
			<div className="flex flex-row space-x-4 flex-wrap">
				{techData.map((tech) => (
					<div className="mt-4">
						<TechInfo {...tech} size={14} />
					</div>
				))}
			</div>
		</div>
	);
};

export default LikedTech;
