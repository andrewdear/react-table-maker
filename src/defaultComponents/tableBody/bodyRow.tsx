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

        let className = "";

        if(column.className && typeof column.className === "string") className = column.className;
        if(column.className && typeof column.className === "function") className = column.className(row[column.key], row);

        const value = column.render ? column.render(row[column.key], row) : row[column.key];

        return <td key={`${column.key}index`} className={className}>{value}</td>;
    })

    return <tr>{tds}</tr>;
}

export default BodyRow;