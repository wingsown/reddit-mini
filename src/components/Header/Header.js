import headerCSS from "./header.module.css";
import { createSearchParams, useNavigate } from "react-router-dom";

const Header = ({ navVisible, setNavVisible, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleMenu = () => {
    const element = document.getElementById("nav");
    if (!navVisible) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
    setNavVisible(!navVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      const searchQueryParams = {
        search: searchTerm,
      };

      // Use createSearchParams which takes an object and transforms it to a query string of the form order=ASC
      const searchQueryString = createSearchParams(searchQueryParams);
      // Force a navigate by passing in an object with pathname indicating that path to navigate and search indicating the query parameters to append
      navigate({
        pathname: "/search",
        search: `?${searchQueryString}`,
      });

      setSearchTerm("");
    }
  };

  return (
    <header className={headerCSS.header}>
      <h1 className={headerCSS.logo}>
        <a href="/">
          Reddit<span className={headerCSS.logoSpan}>Lite</span>
        </a>
      </h1>

      <form className={headerCSS.searchContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          className={headerCSS.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          type="submit"
          data-testid="submit-button"
          id={headerCSS.searchIcon}
        >
          <i className="fas fa-search search-icon"></i>
        </button>
      </form>

      <div className={headerCSS.menu}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </header>
  );
};

export default Header;
