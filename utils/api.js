import axios from "axios";

function getArticles() {
  return axios
    .get("https://lukes-nc-news-database.onrender.com/api/articles")
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
  return axios
    .patch(
      `https://lukes-nc-news-database.onrender.com/api/articles/${article_id}`,
      { inc_votes: vote }
    )
}

export {
  getArticles,
  getArticlesById,
  getCommentsByArticleId,
  patchArticleVote,
};
