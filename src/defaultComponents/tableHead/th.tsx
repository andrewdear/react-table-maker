import React, {useState} from "react";
import {Column} from "../../reactTableMaker";
import {setSortingFunctionType} from "../../dataAdapterHooks/sharedTypes";

export type Props = {
    column: Column,
    setSortingFunction: setSortingFunctionType
}

function Th(props: Props) {
    const {column} = props;
    const className = column.columnClass || "";
    const [reverse, setReverse] = useState(false);

    let onClick: any = null;
    if(column.sortingFunction) {
        onClick = () => {
            props.setSortingFunction(column.sortingFunction, reverse)
            setReverse((value) => !value);
        }
    }

    return <th className={className} onClick={onClick}>{column.label}</th>;
}

export default Th;