import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy";

function Home() {
    const [article, setArticle] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const filterByTopic = searchParams.get('topic')
    const sortBy = searchParams.get('sort_by')
    const order = searchParams.get('order')
    
    useEffect(() => {
        getArticles(filterByTopic, sortBy, order).then((articles) => {
            setArticle(articles)
        })
    }, [filterByTopic, sortBy, order])
  return (
    <div>
      <SortBy topic={filterByTopic}/>
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
