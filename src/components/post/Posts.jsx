import { useContext } from "react";
import { SelectedDataContext } from "../../context/SelectedDataContext";
import Post from "./Post";

const Posts = (props) => {
  const selectedDataContext = useContext(SelectedDataContext);
  const posts = props.posts.map((post) => {
    return (
      <div
        key={post.id}
        onClick={() => {
          selectedDataContext.setSelectedData(post);
          props.showPost();
        }}
      >
        <Post
          title={post.title}
          author={post.author}
          id={post.id}
          key={post.id}
        />
      </div>
    );
  });
  return posts;
};

export default Posts;
