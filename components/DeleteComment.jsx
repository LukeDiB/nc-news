import { removeComment } from "../utils/api";

function deleteComment(article_id, comment_id) {
  removeComment(article_id, comment_id);
}

export default deleteComment;
