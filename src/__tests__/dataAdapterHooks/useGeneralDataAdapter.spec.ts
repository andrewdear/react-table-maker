import {renderHook, act} from "@testing-library/react-hooks";
import useGeneralDataAdapter from "../../dataAdapterHooks/useGeneralDataAdapter";

describe("UseGeneralDataAdapter tests", () => {

    test("returns requested data", () => {
        const data = [{data: 1}, {data: 2}];

        const {result} = renderHook(() => useGeneralDataAdapter(data));

        expect(result.current.getRows(0, 2)).toEqual(data);

        expect(result.current.getRows(0, 1)).toEqual([data[0]]);

        expect(result.current.getRows(1, 2)).toEqual([data[1]]);
    });

    test("setRawData updates the data", () => {
        const data = [{data: 1}, {data: 2}];

        const {result} = renderHook(() => useGeneralDataAdapter(data));

        const nextData = [{data: 3}, {data: 4}];

        act(() => {
            result.current.setRawData(nextData)
        })

        expect(result.current.getRows(0, 2)).not.toEqual(data);

        expect(result.current.getRows(0, 2)).toEqual(nextData);

    });

    test("returns the correct count", () => {
        const data = [{data: 1}, {data: 2}];

        const {result} = renderHook(() => useGeneralDataAdapter(data));

        expect(result.current.getCount()).toBe(2);

        const nextData = [{data: 1}, {data: 2},{data: 3}, {data: 4}];

        act(() => {
            result.current.setRawData(nextData)
        })

        expect(result.current.getCount()).toBe(4);
    });

})

