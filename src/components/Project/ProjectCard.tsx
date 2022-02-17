import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import TechInfo, { ITechInfo } from "./TechInfo";
import { GitHubIcon } from "../Icons";

export interface IProjectCard {
	title: string;
	description: string;
	image: IGatsbyImageData;
	repo?: string;
	link?: string;
	technologies?: Array<ITechInfo>;
}

const ProjectCard: React.FC<IProjectCard> = ({
	title,
	description,
	image,
	link,
	repo,
	technologies,
}) => (
	<div className="bg-white dark:bg-brand-slightdark shadow-md border border-gray-200 dark:border-gray-900 rounded mb-5">
		<a href="#">
			<GatsbyImage
				image={getImage(image) as IGatsbyImageData}
				alt="YiLang Preview"
				className="shadow rounded-t h-64"
				imgStyle={{
					objectFit: "cover",
					objectPosition: "0% 0%",
				}}
			/>
		</a>
		<div className="p-5">
			<div className="flex flex-row justify-between">
				<a href={link || "#"}>
					<h2 className="text-black dark:text-white font-bold text-2xl tracking-tight mb-2">
						{title}
					</h2>
				</a>
				{repo && (
					<div className="w-8 h-8">
						<a href={repo} target="_blank" rel="noreferrer" aria-label="Github">
							<GitHubIcon size={8} />
						</a>
					</div>
				)}
			</div>
			<div className="flex flex-row space-x-2 items-center">
				<span className="font-bold text-xl">Technologies: </span>
				{technologies?.map((tech) => (
					<TechInfo {...tech} />
				))}
			</div>
			<p className="font-normal text-gray-700 dark:text-gray-300 my-3">
				{description}
			</p>
		</div>
	</div>
);

export default ProjectCard;
