import { Link } from "react-router-dom";
import Media from "../Media/Media";
import Title from "../Title/Title";
import SubReddit from "../SubReddit/SubReddit";
import articleCSS from "./articlePreview.module.css";

const ArticlePreview = ({
  id,
  img,
  title,
  description,
  subReddit,
  comments,
  score,
}) => {
  return (
    <div className={articleCSS.card}>
      <Link className={articleCSS.container}>
        <figure className={articleCSS.figure}>
          <Media
            className={articleCSS.media}
            source={img}
            description={description}
          />
        </figure>
        <Title className={articleCSS.title} title={title} />
        <SubReddit
          className={articleCSS.subReddit}
          score={score}
          comments={comments}
          subReddit={subReddit}
        />
      </Link>
    </div>
  );
};

export default ArticlePreview;
