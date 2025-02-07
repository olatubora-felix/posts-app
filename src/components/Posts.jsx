import Post from "./Post";
import Title from "./Title";
import { posts } from "../constant/posts";
import Button from "./Button";
const Posts = () => {
  return (
    <section className="bg-white h-full flex-1 md:p-4 p-2 rounded-lg shadow-lg space-y-6 ">
      <div className="md:block flex justify-between items-center">
        <Title text="All Jobs" />
        <Button
          className="text-white w-[150px] h-[48px] md:hidden block"
          text="Add Post"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3">
        {posts?.map((post) => (
          <Post
            key={post.id}
            image={post.image}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </section>
  );
};

export default Posts;
