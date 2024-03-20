import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  hasError,
  isLoading,
  searchByTerm,
  selectAllArticles,
} from "./searchSlice";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

const Search = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searchTerm = searchParams.get("search");
  const articlePreviews = useSelector(selectAllArticles);
  const hasSearchError = useSelector(hasError);
  const isLoadingSearch = useSelector(isLoading);

  // Reload data every time changes are made to the state or when a new term is searched:
  useEffect(() => {
    dispatch(searchByTerm(searchTerm));
  }, [dispatch, searchTerm]);

  // Error handling

  return (
    <div>
      {articlePreviews.map((article) => {
        return (
          <ArticlePreview
            key={article.id}
            id={article.id}
            img={article.img}
            title={article.title}
            description={article.description}
            text={article.text}
            subReddit={article.subReddit}
            comments={article.comments}
            vote={article.vote}
          />
        );
      })}
    </div>
  );
};

export default Search;
