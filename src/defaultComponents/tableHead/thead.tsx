import React, {useCallback, useState} from "react";
import {Column, SortableIcons} from "../../reactTableMaker";
import Th from "./th";
import {setSortingFunctionType} from "../../dataAdapterHooks/sharedTypes";

export type Props = {
    columns: Column[],
    setSortingFunction: setSortingFunctionType,
    sortableIcons?: SortableIcons,
}

function Thead(props: Props) {
    const [sortedColumn, setSortedColumn] = useState("");
    const [reverse, setReverse] = useState(false);

    const onSort = (key: string, sortingFunction: (a: any, b: any) => number) => {
        let nextReverse = reverse;
        let nextColumn = sortedColumn

        if(key === sortedColumn) {
            // if the key is the same again it alternates the reverse
            nextReverse = !nextReverse;
        } else {
            // if the key is different it removes the reverse and sets the new column key
            nextColumn = key
            nextReverse = false;
        }
        // set the adapters sorting function
        props.setSortingFunction(sortingFunction, nextReverse);

        setReverse(nextReverse);
        setSortedColumn(nextColumn);
    }

    const renderTh = useCallback(() => {
        return props.columns.map((column) => {
            return <Th
                column={column}
                key={column.key}
                onSort={onSort}
                sortableIcons={props.sortableIcons}
                sorted={sortedColumn === column.key}
                reversed={reverse}
            />
        })
    }, [props.columns, props.sortableIcons, sortedColumn, reverse]);

    return (
        <thead>
            <tr>
                {renderTh()}
            </tr>
        </thead>);
}

export default Thead;