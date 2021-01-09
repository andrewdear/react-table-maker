import React from "react";
import {Column, SortableIcons} from "../../reactTableMaker";


export type Props = {
    column: Column,
    onSort(key: string, sortingFunction: ((a: any, b: any) => number) | undefined): void,
    sortableIcons?: SortableIcons,
    sorted: boolean,
    reversed: boolean
}

function Th(props: Props) {
    const {column} = props;
    const className = column.columnClass || "";

    const {sortableIcons} = props;

    let onClick: any = null;

    if(column.sortingFunction) {
        onClick = () => {
            props.onSort(column.key, column.sortingFunction);
        }
    }

    function RenderIcon() {
        if(!sortableIcons || !column.sortingFunction) return null

        let icon = null;

        if(sortableIcons.sortable) icon = sortableIcons.sortable;

        if(sortableIcons.sorted && props.sorted) icon = sortableIcons.sorted;

        if(sortableIcons.reversed && props.sorted && props.reversed) icon = sortableIcons.reversed;

        return icon;
    }

    return <th className={className} onClick={onClick}>
        {(sortableIcons && sortableIcons.beforeTitle) && <RenderIcon/>}
        {column.label}
        {(sortableIcons && !sortableIcons.beforeTitle) && <RenderIcon/>}
    </th>;
}

export default Th;