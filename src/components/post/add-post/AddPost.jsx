import axios from "axios";
import { useRef } from "react";

const AddPost = (props) => {
  const title = useRef();
  const content = useRef();
  const author = useRef();
  const addPostData = () => {
    console.log(title);
    let data = {
      title: title.current.value,
      author: content.current.value,
      content: author.current.value,
      id_user: 111,
    };
    axios
      .post("http://localhost:8080/api/v1/posts", data)
      .then((response) => {
        props.onDataSubmit(response.data);
        title.current.value = "";
        author.current.value = "";
        content.current.value = "";
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
          <input
            type="text"
            id="title"
            label={"title"}
            name={"title"}
            ref={title}
          />
        </div>
        <div className="m-2">
          <label className="h5">Content: </label>
          <input
            type="text"
            id="content"
            label={"content"}
            name={"content"}
            ref={content}
          />
        </div>
        <div className="m-2">
          <label className="h5">Author: </label>
          <input
            type="text"
            id="author"
            label={"author"}
            name={"author"}
            ref={author}
          />
        </div>

        <button className="btn btn-primary my-2" onClick={addPostData}>
          Add Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
