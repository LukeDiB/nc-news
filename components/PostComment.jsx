import { postCommentToArticle } from "../utils/api";

function PostComment() {
    
    function handleSubmit(event) {
        event.prevenDefault()
        postCommentToArticle(article_id, {
          body: {body},
          votes: 0,
          author: "jessjelly",
          article_id: {article_id},
        });
        
    }



return (
  <section id="post-comment">
    <form onSubmit={handleSubmit}>
      <label id="post-comment-label">Post a comment</label>
      <textarea
        name="post"
        id="post-comment-box"
        rows="4"
        cols="55"
        required
      />
    </form>
    <button
      type="submit"
      id="post-comment-button"
    >
      Post
    </button>
  </section>
);
}

export default PostComment