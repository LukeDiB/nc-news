import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function Home() {
    const [article, setArticle] = useState([])


    useEffect(() => {
        getArticles().then((articles) => {
            setArticle(articles)
        })
    })
  return (
    <div>
      <ul className="articles">
        {article.map((singleArticle) => {
          return (
            <ArticleCard
              key={singleArticle.article_id}
              article={singleArticle}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
