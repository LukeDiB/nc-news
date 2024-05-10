import axios from "axios";

function getArticles(topic, sortBy, order) {
  return axios
    .get("https://lukes-nc-news-database.onrender.com/api/articles", {
      params: { topic: topic, sort_by: sortBy, order: order },
    })
    .then((res) => {
      return res.data.articles;
    });
}

function getArticlesById(id) {
  return axios
    .get(`https://lukes-nc-news-database.onrender.com/api/articles/${id}`)
    .then((res) => {
      return res.data.article;
    });
}

function getCommentsByArticleId(article_id) {
  return axios
    .get(
      `https://lukes-nc-news-database.onrender.com/api/articles/${article_id}/comments`
    )
    .then((res) => {
      return res.data;
    });
}

function patchArticleVote(article_id, vote) {
  return axios.patch(
    `https://lukes-nc-news-database.onrender.com/api/articles/${article_id}`,
    { inc_votes: vote }
  );
}

function postCommentToArticle(article_id, comment) {
  return axios.post(
    `https://lukes-nc-news-database.onrender.com/api/articles/${article_id}/comments`,
    comment
  )
}

function removeComment(article_id, comment_id) {
  return axios.delete(
    `https://lukes-nc-news-database.onrender.com/api/articles/${article_id}/comments/${comment_id}`
  );
}

export {
  getArticles,
  getArticlesById,
  getCommentsByArticleId,
  patchArticleVote,
  postCommentToArticle,
  removeComment
};
