import { Link } from "react-router-dom";

function ArticleCard(props) {
  const { article } = props;
  const articleId = `/articles/${article.article_id}`

  return (
    <div id="container">
      <Link to={articleId} >
        <h3 id="title">{article.title}</h3>
      </Link>
      <Link to={articleId} >
        <img
          id="article-img"
          src={article.article_img_url}
        ></img>
      </Link>
    </div>
  );
}

export default ArticleCard;
