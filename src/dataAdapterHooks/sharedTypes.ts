
export type GetRows<T> = (indexStart: number, indexTo: number, search?: number | string | null) => T[]

//TODO: a sorting function will be a function that returns a number, then in the adapter, it will need to take in a function that returns a sorting function
// export type setSortingFunctionType<T> = (sortingFunction: (a: T, b:T) => number, reverse: boolean) => void;

export type setSortingFunctionType = any;

export type Row<T> = T;