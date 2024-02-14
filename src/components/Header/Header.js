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
        <header>
            <h1>HEADER</h1>
        </header>
    )
}

export default Header;