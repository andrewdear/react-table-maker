import {Dispatch, SetStateAction} from "react";
import {GetRows} from "./sharedTypes";


export default interface DataAdapter<T> {
    // getRows has to return an array of objects of what you wish to display in the table.
    getRows:GetRows<T>,
    getCount(): number,
    setRawData: Dispatch<SetStateAction<T[]>>
}