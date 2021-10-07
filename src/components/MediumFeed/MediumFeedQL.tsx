import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { GraphQLType } from "../../@types/ql";
import MediumFeed, { IFeedData } from "./MediumFeed";

export const FEED_QL_ENDPOINT = "allFeedMediumBlog";
const MediumFeedQL = () => {
	const feedQueryData = useStaticQuery<
		GraphQLType<typeof FEED_QL_ENDPOINT, Array<IFeedData>>
	>(graphql`
		{
			allFeedMediumBlog(
				sort: { fields: isoDate, order: DESC }
				limit: 3
			) {
				nodes {
					categories
					contentSnippet
					title
					pubDate
					link
					internal {
						content
						description
						ignoreType
						mediaType
					}
					isoDate(formatString: "DD MMM. YYYY")
				}
			}
		}
	`);
	const feedData = feedQueryData[FEED_QL_ENDPOINT].nodes;

	return <MediumFeed feed={feedData} />;
};

export default MediumFeedQL;
