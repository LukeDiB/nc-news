import axios from "axios";

function getArticles(topic) {
  return axios
    .get("https://lukes-nc-news-database.onrender.com/api/articles", {
      params: { topic: topic },
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
  console.log(comment);
  console.log(article_id);
  return axios.post(
    `https://lukes-nc-news-database.onrender.com/api/articles/${article_id}/comments`,
    comment
  );
}

function postCommentToArticle(article_id, comment){
  return axios.post(
    `https://lukes-nc-news-database.onrender.com/api/articles/${article_id}`,
    {comment}
  )

}

function postCommentToArticle(article_id, comment){
  return axios.post(
    `https://lukes-nc-news-database.onrender.com/api/articles/${article_id}`,
    {comment}
  )

}

export {
  getArticles,
  getArticlesById,
  getCommentsByArticleId,
  patchArticleVote,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  postCommentToArticle,
=======
  postComment
>>>>>>> Stashed changes
=======
  postComment
>>>>>>> Stashed changes
};
