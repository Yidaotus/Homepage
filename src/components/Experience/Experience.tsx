import React from "react";

export interface IExperienceData {
	title: string;
	startDate: string;
	endDate: string;
	company: string;
	activities: Array<string>;
}

const sortExperience = (a: IExperienceData, b: IExperienceData) =>
	new Date(b.startDate).getTime() - new Date(a.startDate).getTime();

const formatDate = (dateString: string) => {
	const dateObject = new Date(dateString);
	return dateObject.toLocaleString("default", {
		month: "short",
		year: "2-digit",
	});
};

const DATE_PLACEHOLDER = "Present";
const dateString = (start: string, end: string | null) =>
	`${formatDate(start)} - ${end ? formatDate(end) : DATE_PLACEHOLDER}`;

const Experience: React.FC<{ experiences: Array<IExperienceData> }> = ({
	experiences,
}) => (
	<div className="flex flex-col md:grid grid-cols-9 sm:p-2">
		{experiences.sort(sortExperience).map((experience) => (
			<div className="flex md:contents" key={experience.title}>
				<div className="hidden md:block my-4 col-start-1 col-end-3 mr-auto w-full self-center pb-1.5">
					<p className="leading-tight text-right">
						{dateString(experience.startDate, experience.endDate)}
					</p>
				</div>
				<div className="hidden sm:block col-start-3 col-end-4 mr-2 sm:mr-10 md:mx-auto relative">
					<div className="h-full w-4 flex items-center justify-center">
						<div className="h-full w-1 bg-gray-600 dark:bg-gray-300 pointer-events-none" />
					</div>
					<div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-gray-600 dark:bg-gray-300 shadow" />
				</div>
				<div className="col-start-4 col-end-10 pd-0 md:p-4 my-4 mr-auto w-full">
					<p className="font-semibold text-2xl mb-1">
						{experience.title}
					</p>
					<p className="font-semibold text-lg text-brand mb-1">
						{experience.company}
					</p>
					<div className="leading-tight text-justify">
						<p className="md:hidden">
							{dateString(
								experience.startDate,
								experience.endDate
							)}
						</p>
						<ul className="list-disc list-outside text-gray-600 dark:text-gray-400 pl-4 mt-2">
							{experience.activities.map((activity) => (
								<li key={activity}>{activity}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		))}
	</div>
);

export default Experience;
