import { useState } from "react";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import toast from "react-hot-toast";
import { posts } from "./constant/posts";
const App = () => {
  const [results, setResults] = useState(posts);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeBody = (event) => {
    setBody(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "" || body.trim() === "") {
      return toast.error("Post Field cannot be empty");
    }
    const post = {
      image: "/images/image3.jpg",
      title,
      body,
      id: new Date().toISOString(),
    };

    setResults((currentPosts) => [post, ...currentPosts]);
    setTitle("");
    setBody("");
  };

  return (
    <main className="bg-gray-400  w-full md:px-4 px-2 md:py-10 py-4">
      <div className="flex gap-6 container mx-auto md:flex-row flex-col">
        <Posts posts={results} />
        <AddPost
          title={title}
          onChangeTitle={onChangeTitle}
          onChangeBody={onChangeBody}
          body={body}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
};

export default App;
