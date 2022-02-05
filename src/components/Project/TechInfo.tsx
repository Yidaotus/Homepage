import React from "react";

export interface ITechInfo {
	techId: string;
	name: string;
	link: string;
	icon: {
		publicURL: string;
	};
}

const TechInfo: React.FC<ITechInfo & { size?: number }> = ({
	name,
	link,
	icon,
	size,
}) => (
	<div>
		<a href={link}>
			<img
				src={icon.publicURL}
				alt={name}
				className={size ? `h-${size}` : "h-8"}
			/>
		</a>
	</div>
);

export default TechInfo;
