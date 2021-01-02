import React, {useCallback} from "react";
import {Column} from "../../reactTableMaker";
import BodyRow from "./bodyRow";
import {Row} from "../../dataAdapterHooks/sharedTypes";

export type Props = {
    columns: Column[],
    rows: Row<any>[]
}

function Tbody(props: Props) {

    const bodyRows = useCallback(() => {

        return props.rows.map((row, index) => {
            return <BodyRow columns={props.columns} row={row} key={index}/>
        })

    }, [props.columns, props.rows]);

    return (
        <tbody>
            {bodyRows()}
        </tbody>);
}

export default Tbody;