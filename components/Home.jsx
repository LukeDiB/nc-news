import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";

function Home() {
    const [article, setArticle] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const filterByTopic = searchParams.get('topic')

    useEffect(() => {
        getArticles(filterByTopic).then((articles) => {
            setArticle(articles)
        })
    }, [filterByTopic])
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
