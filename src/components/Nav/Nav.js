import { NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <h2>NAVBAR</h2>
            <ul>
                <NavLink>
                    <li>Link</li>
                </NavLink>
            </ul>
        </nav>
     );
}
 
export default Nav;