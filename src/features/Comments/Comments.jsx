import Comment from "./Comment";

const Comments = ({ commentList }) => {
  if (commentList.length === 0) {
    return;
  }
  return (
    <div>
      <h3>Comments:</h3>
      <div>
        {commentList.map((comment) => {
          return <Comment comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
