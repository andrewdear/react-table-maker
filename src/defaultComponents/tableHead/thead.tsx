import React, {useCallback} from "react";
import {Column} from "../../reactTableMaker";
import Th from "./th";

export type Props = {
    columns: Column[]
}

function Thead(props: Props) {

    const renderTh = useCallback(() => {
        return props.columns.map((column) => {
            return <Th column={column} key={column.key}/>
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