import { cloneElement } from "react";

function Menu (props) {
    const { children, activeMenuItem } = props;

    const menuItems = children.map((item, index) => {
        const link = cloneElement(item, {
            className: (activeMenuItem == index ? "active" : "")
        });

        return <li key={index}>{link}</li>;
    });

    return (
        <nav>
            <ul>{menuItems}</ul>
        </nav>
    )
}

export default Menu;
