import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { GitHubIcon } from "../Icons";

export interface IProjectData {
	title: string;
	description: string;
	image: IGatsbyImageData;
	repo?: string;
	link?: string;
}

const ProjectCard: React.FC<IProjectData> = ({
	title,
	description,
	image,
	link,
	repo,
}) => (
	<div className="bg-brand-slight dark:bg-brand-slightdark shadow-md border border-gray-200 dark:border-gray-900 rounded mb-5">
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
					<h5 className="text-black dark:text-white font-bold text-2xl tracking-tight mb-2">
						{title}
					</h5>
				</a>
				{repo && (
					<div className="w-8 h-8">
						<a href={repo} target="_blank" rel="noreferrer">
							<GitHubIcon size={8} />
						</a>
					</div>
				)}
			</div>
			<p className="font-normal text-gray-700 dark:text-gray-300 mb-3">
				{description}
			</p>
		</div>
	</div>
);

const Projects: React.FC<{ projects: Array<IProjectData> }> = ({
	projects,
}) => (
	<div className="flex flex-row flex-wrap">
		{projects.map((project) => (
			<ProjectCard {...project} />
		))}
	</div>
);

export default Projects;