import React from "react";

const Layout: React.FC = ({ children }) => (
	<div className="min-h-screen bg-blue-200 py-6 flex flex-col justify-center sm:py-12">
		{children}
	</div>
);

export default Layout;
