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
			<div className="mb-4 rounded-sm shadow p-4 border-black dark:border-white border-opacity-20 dark:border-opacity-20 pb-2 sm:pb-0 flex flex-col transform hover:scale-[1.01] transition-all">
				<a className="text-lg  hover:text-green" href={feedItem.link}>
					{feedItem.title}
				</a>
				<div className="flex flex-col sm:flex-row sm:justify-between sm:mt-1">
					<p className="text-green sm:mb-4">{feedItem.isoDate}</p>
					<ul className="flex flex-row text-sm flex-wrap self-end sm:self-baseline">
						{feedItem.categories.map((category) => (
							<li className="rounded-sm text-white dark:text-black bg-gray-400 dark:bg-gray-300 px-3 w-min mr-2 mt-2 sm:mt-0">
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
