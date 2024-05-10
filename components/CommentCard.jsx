import deleteComment from "./DeleteComment";
import { useEffect, useState } from "react";

function CommentCard(props) {
  const { comment } = props;
  const article_id = comment.article_id;
  const comment_id = comment.comment_id;
  const [deleted, setDeleted] = useState("");
  const [invalidUser, setInvalidUser] = useState('')
  const [user, setUser] = useState("grumpy19");

  function handleDelete() {
    if(comment.author !== user){
      setInvalidUser('You must be the creator of the comment to delete it!')
    } else{
    setDeleted("Deleted!");
      deleteComment(article_id, comment_id);
    }
  }

    useEffect(() => {
      setDeleted("");
    }, [comment])
  return (
    <li className="no-bullet">
      <p>{deleted}</p>
      <p id='invalid-user'>{invalidUser}</p>
      <h6>{comment.author}</h6>
      <h5>{comment.body}</h5>
      <div id="comment-votes">
        <p id="vote-count">{comment.votes}</p>
        <button disabled={deleted === 'Deleted!'}onClick={handleDelete}>Delete</button>
        <div></div>
      </div>
    </li>
  );
}

export default CommentCard;
