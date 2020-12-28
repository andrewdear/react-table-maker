import React from "react";
import ReactTableMaker from "test-module";
// import ReactTableMaker from "react-table-maker";

function App() {

    const columns = [
        {
            label:"Foo",
            key: "foo"
        },{
            label:"Bar",
            key:"bar",
        },
    ]

    return (
        <div className="App">
            <ReactTableMaker tableClass={"table"}  columns={columns} data={[{foo: "foo", bar: "bar"},{foo: "foo2", bar: "bar2"}]}/>
        </div>
    );
}

export default App;
