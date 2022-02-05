import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface ITechInfo {
	techId: string;
	name: string;
	link: string;
	icon: {
		publicURL: string;
	};
}

const TechInfo: React.FC<ITechInfo> = ({ name, link, icon }) => (
	<div>
		<a href={link}>
			<img src={icon.publicURL} alt={name} className="h-8" />
		</a>
	</div>
);

export default TechInfo;
