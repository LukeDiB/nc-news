import axios from "axios";

function getArticles() {
  return axios
    .get("https://lukes-nc-news-database.onrender.com/api/articles")
    .then((res) => {
      return res.data.articles;
    });
}

function getArticlesById(id) {
    return axios.get(
      `https://lukes-nc-news-database.onrender.com/api/articles/${id}`
    ).then((res) => {
        return res.data.article
    })

}

function getCommentsByArticleId(article_id){
return axios.get(
  `https://lukes-nc-news-database.onrender.com/api/articles/${article_id}/comments`
).then((res) => {
    return res.data
})
}

export { getArticles, getArticlesById, getCommentsByArticleId };
