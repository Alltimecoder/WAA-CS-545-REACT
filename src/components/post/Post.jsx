const Post = (props) => {
  return (
    <div className="card m-3">
      <h1> {props.title}</h1>
      <div>
        <h6>{props.author}</h6>
      </div>
    </div>
  );
};

export default Post;
