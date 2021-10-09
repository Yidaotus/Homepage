import React from "react";

export interface ISpacerProps {
	visible?: boolean;
}

const Spacer: React.FC<ISpacerProps> = ({ visible = false }) => (
	<div className={`${visible && "border-b"} dark:border-gray-700 h-1 mb-6 mt-6`} />
);

export default Spacer;
