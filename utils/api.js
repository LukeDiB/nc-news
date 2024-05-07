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

export { getArticles, getArticlesById };
