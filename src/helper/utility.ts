const notUndefined = <T>(value: T | undefined): value is T =>
	value !== undefined;

// eslint-disable-next-line import/prefer-default-export
export { notUndefined };
