/**
 * @function ExampleComponent
 * @param {string} text
 */

import React, {FunctionComponent, useCallback, useEffect} from "react";
import useGeneralDataAdapter from "./dataAdapterHooks/useGeneralDataAdapter";
import DataAdapter from "./dataAdapterHooks/dataAdapterInterface";
import Thead from "./defaultComponents/tableHead/thead";

export interface Column {
    key: string,
    label: string,
    className?: (() => string) | string,
    render?(): FunctionComponent,
    width: string
}

export type Props = {
    data: any
    dataAdapter?(): DataAdapter<any>,
    columns: Column[],
    tableClass?: string,
};

function ReactTableMaker (props: Props) {
    const adapter = props.dataAdapter ? props.dataAdapter : useGeneralDataAdapter;

    const {getRows, setRawData} = adapter(props.data);

    useEffect(() => {
        setRawData(props.data);
    }, [props.data]);

    const tableClass = props.tableClass || "";

    //TODO: removed width 100% this may effect the sticky header, check
    return <div className={"reactTableMaker"}>
        <table className={tableClass}>
            {/*<colgroup></colgroup>*/}
            {/*<thead id="mainThead" style="table-layout: fixed;"></thead>*/}
            <Thead columns={props.columns}/>
            {/*<tbody></tbody>*/}
        </table>
        {/*TODO addin stick header*/}
    </div>;

}

export default ReactTableMaker;