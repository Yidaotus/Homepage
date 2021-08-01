import React from "react";

const Header: React.FC = ({ children }) => (
	<div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
		{children}
	</div>
);

export default Header;
