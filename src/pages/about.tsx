import * as React from "react";
import Experience from "../components/Experience/Experience";
import Layout from "../components/Layout";
// import Skills from "../components/Skills/Skills";
import charWave from "../images/charicatur.png";

const IndexPage = () => (
	<Layout>
		<div className="flex justify-center items-center content-center">
			<div className="w-auto mr-64">
				<Experience />
			</div>
			<div className="w-auto">
				<img width="350px" src={charWave} alt="Charicatur Waving" className="m-auto" />
			</div>
		</div>
	</Layout>
);

export default IndexPage;
