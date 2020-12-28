import {useState, useCallback} from "react";
import DataAdapter from "./dataAdapterInterface";
import {GetRows} from "./sharedTypes";

/**
 * @function generalDataAdapter
 * @param {object[]} data - An object of the data that will be adapted
 */
function useGeneralDataAdapter<T>(data: T[]): DataAdapter<T> {

    const [rawData, setRawData] = useState(data || []);

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

            return allData.slice(indexStart, indexTo);

    }, [rawData])

    const getCount:() => number = useCallback(() => {
        return rawData.length;
    }, [rawData]);

    return {
        getRows,
        getCount,
        setRawData
    }
}

export default useGeneralDataAdapter;