import React from "react";
import {Column} from "../../reactTableMaker";
import {Row} from "../../dataAdapterHooks/sharedTypes";

export type Props = {
    columns: Column[],
    row: Row<any>
}

function BodyRow(props: Props) {
    const {columns, row} = props;

    const tds = columns.map((column, index) => {
        const value = column.render ? column.render(row[column.key], row) : row[column.key];
        return <td key={`${column.key}index`}>{value}</td>;
    })

    return <tr>{tds}</tr>;
}

export default BodyRow;