/* eslint-disable react/prop-types */
const Post = (props) => {
  const { image, title, body } = props;
  return (
    <div className="shadow-md bg-gray-100 p-3 rounded-md space-y-3">
      <img src={image} alt={title} className="rounded-md" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm font-normal text-gray-900">
        {body.length > 100 ? (
          <>
            {body.substring(0, 100)}
            <span className="text-blue-900 font-semibold cursor-pointer">
              ..Read More
            </span>
          </>
        ) : (
          body
        )}
      </p>
    </div>
  );
};

export default Post;
