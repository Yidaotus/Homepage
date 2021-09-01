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
	<div className="space-y-4 relative">
		<div
			className="absolute border-l-2 h-full inset-x-32 border-default-light rounded-sm w-2"
			style={{ marginLeft: "4px" }}
		/>
		{ExperienceData.sort(sortExperience).map((experience) => (
			<div
				className="flex justify-start items-center"
				key={experience.title}
			>
				<div className="text-default-light w-28">
					{formatDate(experience.startDate)}
					{" - "}
					{experience.endDate
						? formatDate(experience.endDate)
						: DATE_PLACEHOLDER}
				</div>
				<div className="rounded-full w-3 h-3 bg-default-light mx-4 " />
				<div className="space-y-0">
					<div className=" text-default-light text-3xl font-medium">
						{experience.title}
					</div>
					<div className="text-subtitle text-xl">
						{experience.company}
					</div>
					<ul className="list-disc list-inside text-default-light pl-3">
						{experience.activities.map((activity) => (
							<li key={activity}>{activity}</li>
						))}
					</ul>
				</div>
			</div>
		))}
	</div>
);

export default Experience;
