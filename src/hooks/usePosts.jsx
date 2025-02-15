import { useState } from "react";
import { posts } from "../constant/posts";
import toast from "react-hot-toast";

const usePosts = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggle = () => {
    setOpenModal((prevState) => !prevState);
  };

  const [results, setResults] = useState(posts);
  const initialState = {
    title: "",
    body: "",
  };
  const [values, setvalues] = useState(initialState);

  const handleChangeInput = (event) => {
    setvalues((currentValue) => ({
      ...currentValue,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.title.trim() === "" || values.body.trim() === "") {
      return toast.error("Post Field cannot be empty");
    }
    const post = {
      ...values,
      image: "/images/image3.jpg",
      id: new Date().toISOString(),
    };

    setResults((currentPosts) => [post, ...currentPosts]);
    setvalues(initialState);
    setOpenModal(false);
  };
  return {
    posts,
    handleChangeInput,
    handleSubmit,
    results,
    values,
    openModal,
    toggle,
  };
};

export default usePosts;
