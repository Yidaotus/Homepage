import * as React from "react";
import Experience from "../components/Experience/Experience";
import Layout from "../components/Layout";
import Skills from "../components/Skills/Skills";
import { H1, H2 } from "../components/Typography";
import CHAR_IMAGE_DATA from "../images/charicatur.png";
import CHAR_WAVE_DATA from "../images/hi_ava.png";

const IndexPage = () => (
	<Layout>
		<div className="flex justify-center content-center flex-col">
			<div className="flex flex-col sm:flex-row items-start sm:mb-4">
				<div className="w-1/2 sm:w-1/3 m-auto">
					<img
						src={CHAR_WAVE_DATA}
						alt="Charicatur Waorking"
						className="m-auto w-80"
					/>
				</div>
				<div className="sm:w-2/3 sm:ml-8">
					<H1>About me</H1>
					<H2>Software Developer / Musician / Language Enthusiast</H2>
					<p className="text-gray-600 dark:text-gray-400 mb-16">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua. At vero
						eos et accusam et justo duo dolores et ea rebum.
					</p>
				</div>
			</div>
			<H1>Experience</H1>
			<H2>My working experience</H2>
			<Experience />
			<H1>Skills</H1>
			<H2>Skills I have</H2>
			<Skills />
		</div>
	</Layout>
);

export default IndexPage;
