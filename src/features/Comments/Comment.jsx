import ReactMarkdown from "react-markdown";

const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.author}</p>
      <ReactMarkdown>{comment.text}</ReactMarkdown>
    </div>
  );
};

export default Comment;
