import * as React from "react";
import Layout from "../components/Layout";
import { H1, H2 } from "../components/Typography";

const IndexPage = () => (
	<Layout>
		<div className="flex justify-center content-center flex-col">
			<div className="flex flex-col sm:flex-row items-start mb-16">
				<div className="w-1/2 sm:w-1/3 m-auto" />
				<div className="sm:w-2/3 sm:ml-8 self-center">
					<H1>Recent Projects</H1>
					<H2>Recent Projects I&apos;ve been working on.</H2>
					<p className="text-gray-600 dark:text-gray-400">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua. At vero
						eos et accusam et justo duo dolores et ea rebum.
					</p>
				</div>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
