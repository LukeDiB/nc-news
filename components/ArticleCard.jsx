

function ArticleCard(props) {
    const {article} = props
    return (
      <div id="container">
        <h3 id="title">{article.title}</h3>
        <img
          id="article-img"
          src={article.article_img_url}
        ></img>
      </div>
    );

}

export default ArticleCard