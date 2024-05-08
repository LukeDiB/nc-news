
function CommentCard(props) {
  const { comment } = props
  
  return (
    <li className="no-bullet">
      <h6>{comment.author}</h6>
      <h5>{comment.body}</h5>
      <div id="comment-votes">
      <p id="vote-count">{comment.votes}</p>
      </div>
    </li>
  );
}

export default CommentCard;
