import headerCSS from './header.module.css'
import { useNavigate } from "react-router-dom"

const Header = ({navVisible, setNavVisible}) => {
    const navigate = useNavigate();

    const handleMenu = () => {
        const element = document.getElementById("nav");
        if (!navVisible) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
        setNavVisible(!navVisible);
    }

    return (
        <header className={headerCSS.header}>
            <h1>LOGO</h1>
            <h1>SEARCHBAR</h1>
            <h1>MENU</h1>
        </header>
    )
}

export default Header;