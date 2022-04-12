import Post from "./Post";

const Posts = (props) => {
  const posts = props.posts.map((post) => {
    return (
      <div onClick={() => props.showPost(post.id)}>
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
