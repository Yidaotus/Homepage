import React from "react";

const H1: React.FC = ({ children }) => (
	<h1 className="font-semibold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
		{children}
	</h1>
);

const H2: React.FC = ({ children }) => (
	<h2 className="text-gray-700 dark:text-gray-200 mb-4 text-lg">{children}</h2>
);

const P: React.FC = ({ children }) => (
	<p className="text-gray-600 dark:text-gray-400">{children}</p>
);

export { H1, H2, P };
