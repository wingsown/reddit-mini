import { Link } from "react-router-dom";

const ArticlePreview = () => {
  return (
    <div>
      <Link>
        <figure>Media feature</figure>
        <p>Title feature</p>
        <p>SubReddit feature</p>
      </Link>
    </div>
  );
};

export default ArticlePreview;
