import { addOne } from "../lib/utils"

test("Adds one to a number", () => {
    expect(addOne(1)).toEqual(2);
});
