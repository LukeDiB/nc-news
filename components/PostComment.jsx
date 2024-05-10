import { useState } from "react";
import { postCommentToArticle } from "../utils/api";
import { useParams } from "react-router-dom";

function PostComment() {
  const { article_id } = useParams()
  const [body, setBody] = useState("");
  const [commentPosted, setCommentPosted] = useState('')
  function handleSubmit(event) {
    event.preventDefault();
    postCommentToArticle(article_id, {
      body: body,
      article_id: article_id,
      author: "grumpy19",
    }).then(() => {
      setCommentPosted('Comment posted!')
      setBody('')

    })
  }

  return (
    <section id="post-comment">
      <form onSubmit={handleSubmit}>
        <label
          id="post-comment-label"
          htmlFor="post"
        >
          Post a comment
        </label>
        <input
          name="post"
          id="post-comment-box"
          type="text"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
          required
        />
        <button
          type="submit"
          id="post-comment-button"
        >
          Post
        </button>
        <p>{commentPosted}</p>
      </form>
    </section>
  );
}

export default PostComment;
