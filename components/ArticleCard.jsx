function ArticleCard(props) {
  const { article } = props;
  const articleId = `/articles/${article.article_id}`

  return (
    <div id="container">
      <a href={articleId}>
        <h3 id="title">{article.title}</h3>
      </a>
      <a href={articleId}>
        <img
          id="article-img"
          src={article.article_img_url}
        ></img>
      </a>
    </div>
  );
}

export default ArticleCard;
