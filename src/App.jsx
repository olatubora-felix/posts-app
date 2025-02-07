import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
const App = () => {
  return (
    <main className="bg-gray-400  w-full md:px-4 px-2 md:py-10 py-4">
      <div className="flex gap-6 container mx-auto md:flex-row flex-col">
        <Posts />
        <AddPost />
      </div>
    </main>
  );
};

export default App;
