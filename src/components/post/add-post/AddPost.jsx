const AddPost = (props) => {
  const sendDataToParent = () => {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    props.onDataSubmit(title.value, author.value);
    title.value = "";
    author.value = "";
  };
  return (
    <div className="card m-3">
      <h1>Add Post</h1>
      <hr />
      <div>
        <div className="m-2">
          <label className="h5">Title: </label>
          <input type="text" id="title" label={"title"} name={"title"} />
        </div>
        <div className="m-2">
          <label className="h5">Author: </label>
          <input type="text" id="author" label={"author"} name={"author"} />
        </div>

        <button className="btn btn-primary my-2" onClick={sendDataToParent}>
          Add Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
