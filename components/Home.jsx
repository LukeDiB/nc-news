import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy";
import ErrorPage from "./ErrorPage";

function Home() {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterByTopic = searchParams.get("topic");
  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    getArticles(filterByTopic, sortBy, order)
      .then((articles) => {
        setArticle(articles);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [filterByTopic, sortBy, order]);

  if(error) {
    return <ErrorPage message={error}/>
  }else {
  return (
    <div>
      <SortBy topic={filterByTopic} />
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
  )};
}

export default Home;
