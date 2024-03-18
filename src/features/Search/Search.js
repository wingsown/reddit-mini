import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searchTerm = searchParams.get("search");

  return <div>Articles</div>;
};

export default Search;
