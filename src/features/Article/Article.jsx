import { useDispatch, useSelector } from "react-redux";
import Title from "../Title/Title";
import SubReddit from "../SubReddit/SubReddit";
import {
  hasErrorArticle,
  isLoadingArticle,
  loadArticleById,
  selectArticle,
  selectComments,
} from "./articleSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";

const Article = () => {
  const dispatch = useDispatch();
  const article = useSelector(selectArticle);
  const commentList = useSelector(selectComments);
  const isLoading = useSelector(isLoadingArticle);
  const hasError = useSelector(hasErrorArticle);
  const { id } = useParams();

  useEffect(
    () => {
      dispatch(loadArticleById(id));
    },
    dispatch,
    id
  );

  const { title, subReddit, score } = article;
  return (
    <section>
      <div>
        <Title title={title} />
        <SubReddit subReddit={subReddit} score={score} />
      </div>
      <div>
        <Comments commentList={commentList} />
      </div>
    </section>
  );
};

export default Article;
