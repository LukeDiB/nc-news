import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticlesById,
  getCommentsByArticleId,
  patchArticleVote,
} from "../utils/api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [voteChange, setVoteChange] = useState(0);
  const [err, setErr] = useState(null);

  function handleVote(vote) {
    setErr(null)
    patchArticleVote(article_id, vote).then(() => {
      setErr(null)
    }).catch((err) => {
      setVoteChange(0);
      setErr("Something went wrong, please try again.");
      console.log(err);
    });
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
        {err ? <p>{err}</p> : null}
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
      <PostComment article_id={article_id}/>
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

export default  SingleArticle;
