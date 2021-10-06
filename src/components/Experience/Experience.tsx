import React from "react";
import ExperienceData from "../../content/experiences.json";

type IExperienceData = typeof ExperienceData[0];

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

const Experience: React.FC = () => (
	<div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-col">
		{ExperienceData.sort(sortExperience).map((experience) => (
			<>
				<div className="flex flex-col sm:w-1/2 md:hidden">
					<div className="font-bold text-2xl">{experience.title}</div>
					<div className="italic md:mb-4 text-green text-lg">
						{experience.company}
					</div>
					<div className="mb-4 mt-2">
						<div className="font-semibold text-gray-600 dark:text-gray-400">
							{dateString(
								experience.startDate,
								experience.endDate
							)}
						</div>
					</div>
					<div className="mb-10">
						<ul className="list-disc list-inside text-gray-600 dark:text-gray-400 sm:pl-2">
							{experience.activities.map((activity) => (
								<li key={activity}>{activity}</li>
							))}
						</ul>
					</div>
				</div>

				<div className="hidden md:flex relative">
					<div className="w-1/5 self-center">
						<div className="font-semibold text-gray-600 dark:text-gray-400">
							{dateString(
								experience.startDate,
								experience.endDate
							)}
						</div>
					</div>
					<div className="border-r-4 border-black border-opacity-80 dark:border-white dark:border-opacity-80 mr-4" />
					<div>
						<div className="font-bold text-2xl">
							{experience.title}
						</div>
						<div className="italic md:mb-4 text-green text-lg">
							{experience.company}
						</div>
						<div className="mb-10">
							<ul className="list-disc list-inside pl-3 text-gray-600 dark:text-gray-400">
								{experience.activities.map((activity) => (
									<li key={activity}>{activity}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</>
		))}
	</div>
);

export default Experience;
