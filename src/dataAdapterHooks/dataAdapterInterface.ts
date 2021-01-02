import {Dispatch, SetStateAction} from "react";
import {GetRows} from "./sharedTypes";


export default interface DataAdapter<T> {
    // getRows has to return an array of objects of what you wish to display in the table.
    getRows:GetRows<T>,
    dataRows:T[],
    getCount(): number,
    // type for setState
    setRawData: Dispatch<SetStateAction<T[]>>
    setStartIndex: Dispatch<SetStateAction<number>>
    setStopIndex: Dispatch<SetStateAction<number>>
    setSortingFunction(sortingFunction :() => number, reverse: boolean): void
}