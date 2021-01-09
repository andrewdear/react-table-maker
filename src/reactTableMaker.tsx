/**
 * @function ExampleComponent
 * @param {string} text
 */

import React, {FunctionComponent, useMemo, useEffect, useState} from "react";
import useGeneralDataAdapter from "./dataAdapterHooks/useGeneralDataAdapter";
import DataAdapter from "./dataAdapterHooks/dataAdapterInterface";
import Thead from "./defaultComponents/tableHead/thead";
import Tbody from "./defaultComponents/tableBody/tbody";

export interface Column {
    key: string,
    label: string,
    className?: ((data: any, row: any) => string) | string,
    columnClass?:  string,
    // render expects data, which will be the current data for that key and row which will be an object of the whole row
    render?(data: any, row: any): FunctionComponent,
    width: string,
    sortingFunction?:(a: any, b: any) => number
    // ((a: any, b: any) => number) | undefined
}

export interface SortableIcons {
    sortable: JSX.Element,
    sorted: JSX.Element,
    reversed: JSX.Element,
    beforeTitle?: boolean
}

export type Props = {
    data: any
    dataAdapter?(): DataAdapter<any>,
    columns: Column[],
    tableClass?: string,
    stepSize?:number,
    sortableIcons?: SortableIcons
};

function ReactTableMaker (props: Props) {
    const adapter = props.dataAdapter ? props.dataAdapter : useGeneralDataAdapter;
    // create paginators that will take in the setCurrentPageSize and update it with whatever the paginator needs
    const [currentPageSize, setCurrentPageSize] = useState(0);

    const {dataRows, setRawData, getCount, setSortingFunction, setStartIndex, setStopIndex} = adapter(props.data);

    useEffect(() => {
        setRawData(props.data);

        if(!props.stepSize) {
            setStopIndex(props.data.length);
        }

    }, [props.data]);

    const tableClass = props.tableClass || "";

    //TODO: may need to add width 100% when adding the sticky header, check
    return <div className={"reactTableMaker"}>
        <table className={tableClass}>
            {/*<colgroup></colgroup>*/}
            {/*<thead id="mainThead" style="table-layout: fixed;"></thead>*/}
            <Thead
                columns={props.columns}
                setSortingFunction={setSortingFunction}
                sortableIcons={props.sortableIcons}
            />
            <Tbody columns={props.columns} rows={dataRows}/>
            {/*<tbody></tbody>*/}
        </table>
        {/*TODO addin stick header*/}
    </div>;

}

export default ReactTableMaker;