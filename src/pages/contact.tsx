import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import ContentBlock, {
	IContentBlock,
} from "../components/ContentBlock/ContentBlock";
import Spacer from "../components/Spacer";

const IndexPage = () => {
	const contactBlockQuery = useStaticQuery<{
		contentBlocksJson: Omit<IContentBlock, "content"> & {
			content: { childMarkdownRemark: { html: string } };
		};
	}>(graphql`
		{
			contentBlocksJson(jsonId: { eq: "contact" }) {
				reversed
				content {
					childMarkdownRemark {
						id
						html
					}
				}
				image {
					childImageSharp {
						gatsbyImageData(
							width: 305
							layout: CONSTRAINED
							placeholder: BLURRED
						)
					}
				}
			}
		}
	`);
	const contactBlockData = contactBlockQuery.contentBlocksJson;
	const charicaturImage = contactBlockData.image
		? getImage(contactBlockData.image)
		: undefined;

	return (
		<Layout>
			<div className="flex flex-col">
				<ContentBlock
					content={contactBlockData.content.childMarkdownRemark.html}
					image={charicaturImage}
					reversed={contactBlockData.reversed}
				/>
			</div>
		</Layout>
	);
};

export default IndexPage;
