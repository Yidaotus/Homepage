import React from "react";

export interface ISkillData {
	title: string;
	skills: Array<{
		name: string;
		level: number;
	}>;
}

const Skills: React.FC<{ skills: Array<ISkillData> }> = ({ skills }) => (
	<div className="space-y-4">
		{skills.map((skillEntry) => {
			const maxSkillLevel = skillEntry.skills.reduce(
				(acc, { level }) => (acc > level ? acc : level),
				0
			);
			return (
				<div key={skillEntry.title}>
					<p className="text-2xl mb-1 text-black dark:text-white">
						{skillEntry.title}
					</p>
					<ul className="text-white dark:text-black font-medium text-base space-y-2">
						{skillEntry.skills
							.sort((s1, s2) => s2.level - s1.level)
							.map(({ name, level }) => (
								<li
									key={name}
									className="rounded-sm bg-gray-600 dark:bg-gray-300 px-3 w-min inline-block whitespace-nowrap mr-2 relative"
								>
									{name}
									<div
										className="bg-green absolute left-0 right-0 bottom-0"
										style={{
											borderBottomLeftRadius: "10px",
											borderBottomRightRadius:
												level === 3 ? "10px" : "0px",
											height: "2px",
											width: `${
												Number(level) *
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
