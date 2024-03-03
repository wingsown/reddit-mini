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
            <h1 className={headerCSS.logo}>Reddit<span className={headerCSS.logoSpan}>Lite</span></h1>

            <form className={headerCSS.searchContainer}>
                <input 
                    type="text"
                    id="searchInput"
                    placeholder="Search..."
                    
                    className={headerCSS.searchInput}/>

                <button type="submit" data-testid="submit-button" id={headerCSS.searchIcon}>
                    <i className="fas fa-search search-icon" ></i>
                </button>
            </form>
            


            <div className={headerCSS.menu}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </header>
    )
}

export default Header;