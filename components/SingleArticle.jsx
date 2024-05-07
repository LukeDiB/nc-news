import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../utils/api";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  useEffect(() => {
    getArticlesById(article_id).then((singleArticle) => {
      setArticle(singleArticle);
    });
  }, []);

  return (
    <div>
      <section id="body">
        <h3 id="article-title">{article.title}</h3>
        <h5 id="article-author">Author: {article.author}</h5>
        <p id="article-body">{article.body}</p>
        <h5>^ {article.votes} v</h5>
      </section>
      <section id="comment-section">
        <h6>Comments:</h6>
      </section>
    </div>
  );
}

export default SingleArticle;
