import deleteComment from "./DeleteComment";
import { useEffect, useState } from "react";

function CommentCard(props) {
  const { comment } = props;
  const article_id = comment.article_id;
  const comment_id = comment.comment_id;
  const [style, setStyle] = useState({})
  const [deleted, setDeleted] = useState("");
  const [user, setUser] = useState("grumpy19");
  

  function handleDelete() {
    setDeleted("Deleted!");
    deleteComment(article_id, comment_id);
  }

  useEffect(() => {
    if(user !== comment.author) {
      setStyle({display:'none'})
    }
  }, [comment])

  return (
    <li className="no-bullet">
      <p>{deleted}</p>
      <h6>{comment.author}</h6>
      <h5>{comment.body}</h5>
      <div id="comment-votes">
        <p id="vote-count">{comment.votes}</p>
        <div>
          <button
            id="delete-button"
            style={style}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default CommentCard;
