import axios from "axios";

function getArticles() {
  return axios
    .get("https://lukes-nc-news-database.onrender.com/api/articles")
    .then((res) => {
      return res.data.articles
    });
}

export { getArticles };
