import ReactMarkdown from "react-markdown";

const Description = ({ text, className }) => {
  return (
    <div className={className}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default Description;
