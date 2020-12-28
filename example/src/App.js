import React from "react";
import ReactTableMaker from "test-module";

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
            <ReactTableMaker columns={columns} data={[{foo: "foo", bar: "bar"},{foo: "foo2", bar: "bar2"}]}/>
        </div>
    );
}

export default App;
