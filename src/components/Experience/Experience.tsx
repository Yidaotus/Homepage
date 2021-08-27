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

const Experience: React.FC = () => (
	<div className="space-y-4">
		{ExperienceData.sort(sortExperience).map((experience) => (
			<div className="space-y-0">
				<div className=" text-default-light text-3xl font-medium">
					{experience.title}
				</div>
				<div className="text-subtitle text-xl">
					{experience.company}
				</div>
				<div className="text-default-light">
					{formatDate(experience.startDate)}
					{" - "}
					{experience.endDate
						? formatDate(experience.endDate)
						: DATE_PLACEHOLDER}
				</div>
				<ul className="list-disc list-inside text-default-light pl-3">
					{experience.activities.map((activity) => (
						<li>{activity}</li>
					))}
				</ul>
			</div>
		))}
	</div>
);

export default Experience;
