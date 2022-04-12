const ShowPost = ({ post }) => {
  return (
    <div>
      <p>
        <h4>Id: {post.id} </h4>
        <h4>Title: {post.title} </h4>
        <h4>Author: {post.author} </h4>
      </p>
    </div>
  );
};

export default ShowPost;
