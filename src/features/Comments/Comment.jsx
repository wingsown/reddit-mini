import { useState } from "react";
import ReactMarkdown from "react-markdown";
import commentsCSS from "./comments.module.css";

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState();

  const handleReplies = (e) => {
    setShowReplies(!showReplies);
  };
  return (
    <div className={commentsCSS.comment}>
      <p className={commentsCSS.author}>{comment.author}</p>
      <ReactMarkdown className={commentsCSS.text}>{comment.text}</ReactMarkdown>
      {comment.replies && (
        <p className={commentsCSS.replyButton} onClick={handleReplies}>
          {showReplies ? "Hide Replies" : "Show Replies"}
        </p>
      )}

      {comment.replies?.map((reply) => {
        return (
          <div
            className={showReplies ? commentsCSS.reply : commentsCSS.hideReply}
          >
            <div className={commentsCSS.comment}>
              <p className={commentsCSS.author}>{reply.data.author}</p>
              <ReactMarkdown className={commentsCSS.text}>
                {reply.data.body}
              </ReactMarkdown>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
