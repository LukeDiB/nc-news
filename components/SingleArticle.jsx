import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticlesById,
  getCommentsByArticleId,
  patchArticleVote,
} from "../utils/api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import ErrorPage from "./ErrorPage";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [voteChange, setVoteChange] = useState(0);
  const [voteErr, setVoteErr] = useState(null);
  const [articleIdError, setArticleIdError] = useState(null);

  function handleVote(vote) {
    setVoteErr(null);
    patchArticleVote(article_id, vote)
      .then(() => {
        setVoteErr(null);
      })
      .catch((err) => {
        setVoteChange(0);
        setVoteErr("Something went wrong, please try again.");
      });
    setVoteChange((currVoteChange) => 
      currVoteChange + vote);
  }

  useEffect(() => {
    getArticlesById(article_id)
      .then((singleArticle) => {
        setArticle(singleArticle);
      })
      .catch((err) => {
        setArticleIdError({ err });
      });
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments)
    });
  }, [article_id, comments])

  if (articleIdError) {
    return <ErrorPage message={articleIdError} />;
  } else {
    return (
      <div>
        <section id="body">
          <h3 id="article-title">{article.title}</h3>
          <h5 id="article-author">Author: {article.author}</h5>
          <p id="article-body">{article.body}</p>
          {voteErr ? <p>{voteErr}</p> : null}
          <button
            id="upvote"
            disabled={voteChange === 1}
            onClick={() => {
              handleVote(1);
            }}
          >
            ^
          </button>
          <p>{article.votes}</p>
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
        <section>
          <PostComment />
        </section>
        <section id="comment-section">
          <h6>Comments:</h6>
          <ul>
            {comments.map((comment) => {
              return <CommentCard key={comment.comment_id} comment={comment} />;
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default SingleArticle;
