import Comment from "./Comment";
import commentsCSS from "./comments.module.css";

const Comments = ({ commentList }) => {
  if (commentList.length === 0) {
    return;
  }
  return (
    <div className={commentsCSS.container}>
      <h3>Comments:</h3>
      <div className={commentsCSS.comments}>
        {commentList.map((comment) => {
          return <Comment comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
