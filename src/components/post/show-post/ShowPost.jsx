import ShowComment from "../../comment/show-comment/ShowComment";

const ShowPost = ({ post }) => {
  return (
    <>
      <div>
        <h4>Id: {post.id} </h4>
        <h4>Title: {post.title} </h4>
        <h4>Content: {post.content} </h4>
        <h4>Author: {post.author} </h4>
        {console.log(post.comment)}
        <ShowComment comments={post.comment} />
      </div>
    </>
  );
};

export default ShowPost;
