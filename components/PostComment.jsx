import { useState } from "react";
import { postCommentToArticle } from "../utils/api";
import { useParams } from "react-router-dom";

function PostComment() {
  const { article_id } = useParams()
  const [body, setBody] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(body, article_id);
    postCommentToArticle(article_id, {
      body: body,
      article_id: article_id,
      author: "grumpy19",
      votes: 0,
      created_at: "1995-12-17T03:24:00",
    }).then((res) => {
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
