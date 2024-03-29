const Media = ({ className, source }) => {
  const defaultImg =
    "https://www.apalaweb.org/wp-content/plugins/pt-content-views-pro/public/assets/images/default_image.png";
  return (
    <img
      className={className}
      src={
        source !== "default" && source !== "self" && source !== ""
          ? source
          : defaultImg
      }
      alt="image"
      width="98%"
      height="auto"
    />
  );
};

export default Media;
