import { useDispatch, useSelector } from "react-redux";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import {
  hasError,
  isLoading,
  loadByCategory,
  selectAllPreviews,
} from "./categorySlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import categoryStyle from "./category.module.css";

const Category = () => {
  const dispatch = useDispatch();

  // Get states from categorySlice.js
  const articlePreviews = useSelector(selectAllPreviews);
  let { categoryName } = useParams();

  if (!categoryName) {
    categoryName = "popular";
  }

  // Reload data every time changes are made to the state or when a new category is selected:
  useEffect(() => {
    dispatch(loadByCategory(categoryName));
  }, [dispatch, categoryName]);

  // Error handling

  return (
    <div className={categoryStyle.container}>
      {articlePreviews.map((article) => (
        <ArticlePreview
          key={article.id}
          id={article.id}
          img={article.img}
          title={article.title}
          description={article.description}
          text={article.text}
          subReddit={article.subReddit}
          comments={article.comments}
          score={article.score}
        />
      ))}
    </div>
  );
};

export default Category;
