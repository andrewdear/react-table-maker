import React from "react";
import {Column} from "../../reactTableMaker";

export type Props = {
    column: Column
}

function Th(props: Props) {
    const {column} = props;

    return <th>{column.label}</th>;
}

export default Th;