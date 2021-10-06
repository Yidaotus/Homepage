import * as React from "react";
import Experience from "../components/Experience/Experience";
import Layout from "../components/Layout";
import CHARICATURE_IMAGE from "../images/charicatur.png";
import AVATAR_IMAGE from "../images/avatar.png";
import { H1, H2 } from "../components/Typography";
import Skills from "../components/Skills/Skills";

const IndexPage = () => (
	<Layout>
		<div className="flex flex-col">
			<div className="flex flex-col-reverse sm:flex-row items-start">
				<div className="sm:w-2/3">
					<H1>Daniel Voigt</H1>
					<H2>Software Developer / Musician / Language Enthusiast</H2>
					<p className="text-gray-600 dark:text-gray-400 mb-16">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua. At vero
						eos et accusam et justo duo dolores et ea rebum.
					</p>
				</div>
				<div className="w-1/2 sm:w-1/3 m-auto mb-4 sm:mb-0">
					<img
						src={AVATAR_IMAGE}
						alt="Charicatur Waving"
						className="m-auto"
					/>
				</div>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
