import { Link } from "react-router-dom";
import Media from "../Media/Media";
import Title from "../Title/Title";
import SubReddit from "../SubReddit/SubReddit";
import articleCSS from "./articlePreview.module.css";

const ArticlePreview = () => {
  return (
    <div className={articleCSS.card}>
      <Link className={articleCSS.container}>
        <figure className={articleCSS.figure}>
          <Media className={articleCSS.media} />
        </figure>
        <Title className={articleCSS.title} />
        <SubReddit className={articleCSS.subReddit} />
      </Link>
    </div>
  );
};

export default ArticlePreview;
