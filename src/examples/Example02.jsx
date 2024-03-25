import { useReducer, useState } from 'react';

function ListReducer (state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.data];
        case "update":
            return state.with(action.index, action.data);
        case "remove":
            return state.toSpliced(state.length - 1, 1);
        default:
            return state;
    }
}

function Example02 () {
    const [state, dispatch] = useReducer(ListReducer, ["Item 01", "Item 02", "Item 03"]);
    const [editIndex, setEditIndex] = useState(null);

    const addItem = () => {
        const itemNumber = state.length < 9
            ? "0" + (state.length + 1)
            : state.length + 1;

        return dispatch({ type: "add", data: "Item " + itemNumber });
    };
    
    const removeItem = () => dispatch({ type: "remove" });

    const onSubmit = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const inputValue = formData.get("input");

        if (inputValue.length > 0) {
            dispatch({ type: "update", data: inputValue, index: editIndex });
            setEditIndex(null)
        }
    }

    const renderedList = state.map((item, index) => { 
        if (editIndex === index) {
            return <li key={index}>
                <form onSubmit={onSubmit}>
                    <input type='text' name='input' defaultValue={item} autoFocus />
                </form>
            </li>; 
        }
        
        return <li key={index} onClick={setEditIndex.bind(null, index)}>{item}</li>; 
    });

    return (
        <>
            <div className='actions'>
                <button onClick={removeItem}>Remove Item</button>
                <button onClick={addItem}>Add Item</button>
            </div>
            <ol>{renderedList}</ol>
        </>
    );
}

export default Example02;
