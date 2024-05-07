function CommentCard(props) {
  const { comment } = props
  console.log(comment);
  return (
    <li className="no-bullet">
      <h6>{comment.author}</h6>
      <h5>{comment.body}</h5>
    </li>
  );
}

export default CommentCard;
