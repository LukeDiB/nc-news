import { useState } from "react";
import { postCommentToArticle } from "../utils/api";

function PostComment(props) {
    const {article_id} = props
  const [body, setBody]  = useState('')
    function handleSubmit(event) {
        event.preventDefault()
        console.log(article_id);
        postCommentToArticle(article_id, [{
          body: body,
          author: 'cooljmessy'
        }]);
        
    }



return (
  <section id="post-comment">
    <form onSubmit={handleSubmit}>
      <label id="post-comment-label" htmlFor='post'>Post a comment</label>
      <input
        name="post"
        id="post-comment-box"
        type="text"
        value={body}
        onChange={(event)=> {
          setBody(event.target.value)
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

export default PostComment