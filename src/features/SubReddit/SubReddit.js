import subRedditStyle from "./subReddit.module.css";

const SubReddit = ({ className, score, comments, subReddit }) => {
  return (
    <div className={className}>
      <div className={subRedditStyle.section}>
        <i className="fa-solid fa-arrow-up"></i>
        <p>{score}</p>
      </div>
      <div className={subRedditStyle.section}>
        <i className="fa-regular fa-message"></i>
        <p>{comments}</p>
      </div>
      <div className={subRedditStyle.section}>
        <i className="fa-brands fa-reddit-alien"></i>
        <p className={subRedditStyle.name}>{subReddit}</p>
      </div>
    </div>
  );
};

export default SubReddit;
