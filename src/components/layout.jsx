import { Link } from "react-router-dom";
import Menu from "./menu";

function Layout (props) {
    const { children, activeMenuItem } = props;

    return (
        <div className="screen">
            <main>{children}</main>

            <Menu activeMenuItem={activeMenuItem}>
                <Link to="/example01">Example 01</Link>
                <Link to="/example02">Example 02</Link>
            </Menu>
        </div>
    );
}

export default Layout;
