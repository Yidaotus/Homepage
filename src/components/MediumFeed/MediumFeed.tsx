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
				className="mb-4 rounded-sm ring-brand ring-opacity-10 ring-1 dark:ring-brand-light dark:ring-1 dark:ring-opacity-10 px-4 py-2 sm:py-3 border-black dark:border-white 
						   border-opacity-20 dark:border-opacity-20 flex flex-col content-center transform hover:scale-[1.01] transition-all"
			>
				<a className="text-lg  hover:text-brand" href={feedItem.link}>
					{feedItem.title}
				</a>
				<div className="flex flex-col sm:flex-row sm:justify-between sm:mt-1">
					<p className="text-brand">{feedItem.isoDate}</p>
					<ul className="text-white dark:text-black font-medium flex flex-row text-sm flex-wrap self-end sm:self-baseline">
						{feedItem.categories.map((category, index) => (
							<li
								key={category}
								className={`${index === 0 && "ml-auto"} 
								 rounded-sm bg-brand-dark dark:bg-brand-slight px-3 w-min inline-block whitespace-nowrap mr-2 relative shadow dark:ring-1 dark:ring-gray-500 mt-2`}
							>
								#{category}
							</li>
						))}
					</ul>
				</div>
			</div>
		))}
	</div>
);

export default MediumFeed;
