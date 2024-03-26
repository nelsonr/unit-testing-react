import { ListReducer } from "../utils";

test("Add a new item to a list", () => {
    const list = [];
    const updatedList = ListReducer(list, { type: "add", data: "My list item" });

    expect(updatedList).toEqual(["My list item"]);
});

test("Remove a item from a list", () => {
    const list = ["Item 01", "Item 02"];
    const updatedList = ListReducer(list, { type: "remove" });

    expect(updatedList).toEqual(["Item 01"]);
});

test("Remove a specific item from a list", () => {
    const list = ["Item 01", "Item 02", "Item 03"];
    const updatedList = ListReducer(list, { type: "removeByIndex", index: 1 });

    expect(updatedList).toEqual(["Item 01", "Item 03"]);
});
