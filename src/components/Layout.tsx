import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout: React.FC = ({ children }) => (
	<div className="bg-green-light font-sans min-h-screen">
		<div className="mx-auto container">
			<Header />
			<main className="h-full bg-blue-200 py-6 flex flex-col justify-center sm:py-12 xl:py-56 2xl:py-80">
				{children}
			</main>
			<Footer />
		</div>
	</div>
);

export default Layout;
