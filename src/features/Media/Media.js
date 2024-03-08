const Media = ({ className }) => {
  const defaultImg =
    "https://www.apalaweb.org/wp-content/plugins/pt-content-views-pro/public/assets/images/default_image.png";
  return (
    <img
      className={className}
      src={defaultImg}
      alt="image"
      width="98%"
      height="auto"
    />
  );
};

export default Media;
