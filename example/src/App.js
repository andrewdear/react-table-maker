import React, {useState, useEffect} from "react";
import ReactTableMaker from "test-module";
// import ReactTableMaker from "react-table-maker";

function App() {

    const [data, setData] = useState([{foo: "foo", bar: "bar"},{foo: "foo2", bar: "bar2"}]);

    useEffect(() => {
        setTimeout(() => {
            setData([{foo: "foo3", bar: "bar3"},{foo: "foo", bar: "bar"},{foo: "foo2", bar: "bar2"}])
        }, 2000)
    }, [])

    function sortByString(property, direction) {
        const propertyType = typeof property;
        const dir = (direction === "DESC") ? -1 : 1;
        // if property is a function it will use that to map through data.
        return function (a, b) {
            const firstProp = propertyType === 'string' ? a[property] : property(a);
            const secondProp = propertyType === 'string' ? b[property] : property(b);

            const first = firstProp ? firstProp.toLowerCase() : '';
            const second = secondProp ? secondProp.toLowerCase() : '';

            return (first > second) ? dir : (first < second) ? -dir : 0;
        };
    }

    const sortableIcons = {
        sortable: <i className="fas fa-sort float-right" />,
        sorted: <i className="fas fa-sort-down float-right" />,
        reversed: <i className="fas fa-sort-up float-right" />
    }

    const columns = [
        {
            label:"Foo",
            key: "foo",
            columnClass: "cursorPointer",
            sortingFunction: sortByString("foo")
        },{
            label:"Bar",
            key:"bar",
            columnClass: "cursorPointer",
            sortingFunction: sortByString("bar"),
            render(data) {
                return <em>{data}</em>
            }
        },{
            label: "Foo Bar",
            key: "fooBar",
            render(data, row) {
                return <div>
                    <span>{row.foo}</span>
                    <span> {row.bar}</span>
                </div>
            }
        }
    ]

    return (
        <div className="App">
            <ReactTableMaker tableClass={"table table-striped table-hover"} sortableIcons={sortableIcons}  columns={columns} data={data}/>
        </div>
    );
}

export default App;
