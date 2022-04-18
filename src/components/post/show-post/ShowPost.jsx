import { useContext } from "react";
import { SelectedDataContext } from "../../../context/SelectedDataContext";
import ShowComment from "../../comment/show-comment/ShowComment";

const ShowPost = () => {
  const selectedDataContext = useContext(SelectedDataContext);
  const post = selectedDataContext.selectedData;
  return (
    <>
      <div>
        <h4>Id: {post.id} </h4>
        <h4>Title: {post.title} </h4>
        <h4>Content: {post.content} </h4>
        <h4>Author: {post.author} </h4>
        <ShowComment comments={post.comment} />
      </div>
    </>
  );
};

export default ShowPost;
