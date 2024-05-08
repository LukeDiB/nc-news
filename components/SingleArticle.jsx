import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticlesById,
  getCommentsByArticleId,
  patchArticleVote,
} from "../utils/api";
import CommentCard from "./CommentCard";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [voteChange, setVoteChange] = useState(0);

  function handleVote(vote) {
    patchArticleVote(article_id, vote).catch(() => {
      alert('vote not valid!')
    })
    setVoteChange(vote);
  }

  useEffect(() => {
    getArticlesById(article_id).then((singleArticle) => {
      setArticle(singleArticle);
    });
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);


  return (
    <div>
      <section id="body">
        <h3 id="article-title">{article.title}</h3>
        <h5 id="article-author">Author: {article.author}</h5>
        <p id="article-body">{article.body}</p>
        <button
          id="upvote"
          disabled={voteChange === 1}
          onClick={() => {
            handleVote(1);
          }}
        >
          ^
        </button>
        <p>{article.votes + voteChange}</p>
        <button
          id="downvote"
          disabled={voteChange === -1}
          onClick={() => {
            handleVote(-1);
          }}
        >
          v
        </button>
      </section>
      <section id="comment-section">
        <h6>Comments:</h6>
        <ul>
          {comments.map((comment) => {
            return <CommentCard comment={comment} />;
          })}
        </ul>
      </section>
    </div>
  );
}

export default SingleArticle;
