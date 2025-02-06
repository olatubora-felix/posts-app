import React from "react";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
const App = () => {
  return (
    <main className="bg-gray-400 h-screen w-full px-4 py-10">
      <div className="flex gap-6 container mx-auto">
        <Posts />
        <AddPost />
      </div>
    </main>
  );
};

export default App;
