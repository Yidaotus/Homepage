import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout: React.FC = ({ children }) => (
	<div className=" bg-green-light">
		<div className="flex flex-col h-screen justify-between mx-32">
			<header className="h-10 mt-2">
				<Header />
			</header>
			<main className="mb-auto h-screen flex justify-center">
				<div className="m-auto w-full">{children}</div>
			</main>
			<footer className="h-16 bg-blue-500">
				<Footer />
			</footer>
		</div>
	</div>
);

export default Layout;
