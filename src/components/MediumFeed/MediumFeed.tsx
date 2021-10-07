import React from "react";

export interface IFeedData {
	title: string;
	isoDate: string;
	link: string;
	contentSnippet: string;
	categories: Array<string>;
}

const MediumFeed: React.FC<{ feed: Array<IFeedData> }> = ({ feed }) => (
	<div className="flex flex-col">
		{feed.map((feedItem) => (
			<div
				className="mb-4 rounded-sm shadow px-4 dark:invert py-2 sm:py-3 border-black dark:border-white 
						   border-opacity-20 dark:border-opacity-20 flex flex-col content-center transform hover:scale-[1.01] transition-all"
			>
				<a className="text-lg  hover:text-green dark:invert" href={feedItem.link}>
					{feedItem.title}
				</a>
				<div className="flex flex-col sm:flex-row sm:justify-between sm:mt-1 dark:invert">
					<p className="text-green">{feedItem.isoDate}</p>
					<ul className="flex flex-row text-sm flex-wrap self-end sm:self-baseline">
						{feedItem.categories.map((category) => (
							<li className="rounded-sm text-white dark:text-black bg-gray-400 dark:bg-gray-300 px-3 mr-2 mt-2 sm:mt-0">
								{category}
							</li>
						))}
					</ul>
				</div>
			</div>
		))}
	</div>
);

export default MediumFeed;
