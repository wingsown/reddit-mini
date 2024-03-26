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
import articleCSS from "./article.module.css";
import Description from "../Description/Description";

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

  const { title, subReddit, score, comments, text } = article;

  console.log(article);
  return (
    <section className={articleCSS.card}>
      <div className={articleCSS.post}>
        <Title className={articleCSS.title} title={title} />
        <Description
          className={articleCSS.description}
          text={text}
          preview={false}
        />
        <SubReddit
          className={articleCSS.subReddit}
          subReddit={subReddit}
          score={score}
          comments={comments}
        />
      </div>
      <div className={articleCSS.comments}>
        <Comments commentList={commentList} />
      </div>
    </section>
  );
};

export default Article;
