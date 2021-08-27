import * as React from "react";
import Experience from "../components/Experience/Experience";
import Layout from "../components/Layout";
import Skills from "../components/Skills/Skills";

const IndexPage = () => (
	<Layout>
		<p>My page</p>
		<div className="flex">
			<div className="w-6/12">
				<Experience />
			</div>
			<div className="w-6/12">
				<Skills />
			</div>
		</div>
	</Layout>
);

export default IndexPage;
