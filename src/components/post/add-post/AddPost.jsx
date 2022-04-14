import axios from "axios";

const AddPost = (props) => {
  let titleElm = document.getElementById("title");
  let contentElm = document.getElementById("content");
  let authorElm = document.getElementById("author");
  const addPostData = () => {
    let data = {
      title: titleElm.value,
      author: authorElm.value,
      content: contentElm.value,
      id_user: 111,
    };
    axios
      .post("http://localhost:8080/api/v1/posts", data)
      .then((response) => {
        props.onDataSubmit(response.data);
        titleElm.value = "";
        authorElm.value = "";
        contentElm.value = "";
      })
      .catch((err) => console.log(err.message));
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
          <label className="h5">Content: </label>
          <input type="text" id="content" label={"content"} name={"content"} />
        </div>
        <div className="m-2">
          <label className="h5">Author: </label>
          <input type="text" id="author" label={"author"} name={"author"} />
        </div>

        <button className="btn btn-primary my-2" onClick={addPostData}>
          Add Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
