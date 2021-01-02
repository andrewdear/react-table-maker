import {useState, useCallback, useMemo, useEffect} from "react";
import DataAdapter from "./dataAdapterInterface";
import {GetRows, setSortingFunctionType} from "./sharedTypes";

/**
 * @function generalDataAdapter
 * @param {object[]} data - An object of the data that will be adapted
 */
function useGeneralDataAdapter<T>(data: T[]): DataAdapter<T> {

    const [rawData, setRawData] = useState(data || []);
    // initial state to sorting function that does nothing
    const [sortingFunction, setTheSortingFunction] = useState<(() => number) | undefined>(undefined);
    const [reverse, setReverse] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [stopIndex, setStopIndex] = useState(data ? data.length : 0);

    const getRows:GetRows<T> = useCallback((indexStart, indexTo, search) => {
        if(!rawData.length) return [];

            let allData = rawData;

            // if(search) {
            //     allData = rawData.filter((data) => {
            //         return searchData(data, search);
            //     });
            // }

            // if(this.filter) {
            //     allData = this.rawData.filter((data) => {
            //         return this.searchData(data, this.filter);
            //     });
            // }
            if(sortingFunction) {
                allData = allData.sort(sortingFunction);
                if(reverse) {
                    allData = allData.reverse();
                }
            }


            return allData.slice(indexStart, indexTo);

    }, [rawData, sortingFunction, reverse])

    const dataRows = useMemo(() => {
        return getRows(startIndex, stopIndex);
    }, [rawData, startIndex, stopIndex, sortingFunction, reverse])


    //TODO: sort out what i need toDo toGet it to reverse
    const setSortingFunction = useCallback((newSortingFunction: () => number, newReverse: boolean) => {
        setTheSortingFunction(() => newSortingFunction)
        setReverse(newReverse);
    }, []);

    const getCount:() => number = useCallback(() => {
        return rawData.length;
    }, [rawData]);

    return {
        getRows,
        dataRows,
        getCount,
        setRawData,
        setSortingFunction,
        setStartIndex,
        setStopIndex
    }
}

export default useGeneralDataAdapter;