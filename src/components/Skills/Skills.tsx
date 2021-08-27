import React from "react";
import SkillData from "../../content/skills.json";

const Skills: React.FC = () => (
	<div className="space-y-4">
		{SkillData.map((skill) => (
			<div className="space-y-0">
				<div className=" text-default-light text-3xl font-medium">
					{skill.title}
				</div>
				<ul className="text-subtitle font-medium text-base space-y-2">
					{skill.skills.map((skillItem, index) => (
						<li
							className={`rounded-full bg-gray-200 px-3 w-min inline-block whitespace-nowrap ${
								index !== 0 &&
								index !== Skills.length - 1 &&
								"ml-1"
							}`}
						>
							{skillItem}
						</li>
					))}
				</ul>
			</div>
		))}
	</div>
);

export default Skills;
