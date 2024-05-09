import { useState } from "react";
import { postCommentToArticle } from "../utils/api";
import { useParams } from "react-router-dom";

function PostComment() {
  const { article_id } = useParams()
  const [body, setBody] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(article_id);
    postCommentToArticle(article_id, [
      {
        username: "cooljmessy",
        body: body,
      }
    ]).then((res) => {
      console.log(res);
    });
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
        />
        <button
          type="submit"
          id="post-comment-button"
        >
          Post
        </button>
      </form>
    </section>
  );
}

export default PostComment;
