const ShowComment = (props) => {
  const comments = props.comments.map((comment) => {
    return <h4>comment: {comment.name}</h4>;
  });
  return comments;
};
export default ShowComment;
