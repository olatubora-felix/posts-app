/* eslint-disable react/prop-types */
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";

const AddPost = ({
  title,
  onChangeTitle,
  body,
  onChangeBody,
  handleSubmit,
}) => {
  // onClick
  // const handleClick = () => {
  //   alert("hello Felix");
  // };
  // onSubmit
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event);
  // };
  // onChange

  // onBlur
  return (
    <section className="bg-white max-w-[400px] w-full p-4 rounded-lg shadow-lg space-y-6 h-[400px] sticky top-10 right-10 md:block hidden">
      <Title text="Add New Posts" />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          name="title"
          label="Title"
          placeholder="Enter Post Title"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <Input
          name="body"
          label="Body"
          placeholder="Enter Post Body"
          type="textarea"
          value={body}
          onChange={onChangeBody}
        />
        <Button text="Submit" />
      </form>
    </section>
  );
};

export default AddPost;
