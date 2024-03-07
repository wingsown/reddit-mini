import { Link } from "react-router-dom";
import Media from "../Media/Media";
import Title from "../Title/Title";
import SubReddit from "../SubReddit/SubReddit";

const ArticlePreview = () => {
  return (
    <div>
      <Link>
        <figure>
          <Media />
        </figure>
        <Title />
        <SubReddit />
      </Link>
    </div>
  );
};

export default ArticlePreview;
