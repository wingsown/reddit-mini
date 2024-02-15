import navCSS from './nav.module.css';
import { NavLink } from "react-router-dom";


const Nav = () => {
    return ( 
        <nav className={navCSS.nav} id="nav">
            <h2>NAVBAR</h2>
            <ul className={navCSS.ul}>
                <NavLink>
                    <li className={navCSS.li}>Link</li>
                </NavLink>
            </ul>
        </nav>
     );
}
 
export default Nav;