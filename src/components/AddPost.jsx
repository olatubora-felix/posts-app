/* eslint-disable react/prop-types */
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";

const AddPost = ({ handleChangeInput, values, handleSubmit, className }) => {
  return (
    <section
      className={`bg-white max-w-[400px] w-full p-4 rounded-lg shadow-lg space-y-6  sticky top-10 right-10 ${className}`}
    >
      <Title text="Add New Posts" />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          name="title"
          label="Title"
          placeholder="Enter Post Title"
          type="text"
          onChange={handleChangeInput}
          value={values.title}
        />
        <Input
          name="body"
          label="Body"
          placeholder="Enter Post Body"
          type="textarea"
          value={values.body}
          onChange={handleChangeInput}
        />
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default AddPost;
