import React from "react";
import SkillData from "../../content/skills.json";

const Skills: React.FC = () => (
	<div className="space-y-4">
		{SkillData.map((skill) => {
			const maxSkillLevel = skill.skills.reduce(
				(acc, [, level]) => (acc > Number(level) ? acc : Number(level)),
				0
			);
			return (
				<div className="">
					<div className=" text-black dark:text-white text-3xl font-medium">
						{skill.title}
					</div>
					<ul className="text-white dark:text-black font-medium text-base space-y-2">
						{skill.skills
							.sort(([, a], [, b]) => Number(b) - Number(a))
							.map(([skillName, skillLevel]) => (
								<li className="rounded-sm bg-gray-600 dark:bg-gray-300 px-3 w-min inline-block whitespace-nowrap mr-2 relative">
									{skillName}
									<div
										className="bg-green absolute left-0 right-0 bottom-0"
										style={{
											borderBottomLeftRadius: "10px",
											borderBottomRightRadius:
												skillLevel === 3
													? "10px"
													: "0px",
											height: "2px",
											width: `${
												Number(skillLevel) *
												(100 / maxSkillLevel)
											}%`,
										}}
									/>
								</li>
							))}
					</ul>
				</div>
			);
		})}
	</div>
);

export default Skills;
