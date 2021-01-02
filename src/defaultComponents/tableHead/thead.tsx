import React, {useCallback} from "react";
import {Column} from "../../reactTableMaker";
import Th from "./th";
import {setSortingFunctionType} from "../../dataAdapterHooks/sharedTypes";

export type Props = {
    columns: Column[],
    setSortingFunction: setSortingFunctionType
}

function Thead(props: Props) {

    const renderTh = useCallback(() => {
        return props.columns.map((column) => {
            return <Th column={column} key={column.key} setSortingFunction={props.setSortingFunction}/>
        })
    }, [props.columns]);

    return (
        <thead>
            <tr>
                {renderTh()}
            </tr>
        </thead>);
}

export default Thead;