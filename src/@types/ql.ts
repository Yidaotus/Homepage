export type GraphQLType<QueryName extends string, T> = {
	[P in QueryName]: {
		nodes: T;
	};
};
