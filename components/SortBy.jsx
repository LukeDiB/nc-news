import { Link } from "react-router-dom";

function SortBy(topic) {
  console.log(topic);
  let sortByDate = "/articles?sort_by=created_at";
  let sortByCommentCount = "/articles?sort_by=comment_count";
  let sortByVotes = "/articles?sort_by=votes";
  let sortByAsc = "/articles?order=asc";
  let sortByDes = "/articles?order=desc";

  if(topic !== null) {
    sortByDate = "/articles?sort_by=created_at";
    sortByCommentCount = "/articles?sort_by=comment_count";
    sortByVotes = "/articles?sort_by=votes";
    sortByAsc = "/articles?order=asc";
    sortByDes = "/articles?order=desc";
  }
  return (
    <div className="dropdown">
      <button className="drop-button">Sort</button>
      <div className="dropdown-content">
        <Link
          className="links"
          to={sortByDate}
        >
          Date
        </Link>
        <Link
          className="links"
          to={sortByCommentCount}
        >
          Comment Count
        </Link>
        <Link
          className="links"
          to={sortByVotes}
        >
          Votes
        </Link>
        <Link
          className="links"
          to={sortByAsc}
        >
          Ascending
        </Link>
        <Link
          className="links"
          to={sortByDes}
        >
          Descending
        </Link>
      </div>
    </div>
  );
}

export default SortBy;
