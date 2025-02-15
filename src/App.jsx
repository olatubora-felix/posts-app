import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import Modal from "./components/ui/Modal";
import usePosts from "./hooks/usePosts";
const App = () => {
  const {
    results,
    handleChangeInput,
    handleSubmit,
    values,
    openModal,
    toggle,
  } = usePosts();
  return (
    <main className="bg-gray-400  w-full md:px-4 px-2 md:py-10 py-4">
      <div className="flex gap-6 container mx-auto md:flex-row flex-col">
        <Posts posts={results} toggle={toggle} />
        <AddPost
          handleChangeInput={handleChangeInput}
          values={values}
          handleSubmit={handleSubmit}
          className="md:block hidden h-[400px]"
        />
      </div>
      {openModal && (
        <Modal open={open} onClose={toggle}>
          <AddPost
            handleChangeInput={handleChangeInput}
            values={values}
            handleSubmit={handleSubmit}
            className={"p-0"}
          />
        </Modal>
      )}
    </main>
  );
};

export default App;
