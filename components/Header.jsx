import { Link } from "react-router-dom";

function Header() {

  const coding = '/articles?topic=coding'
  const home = '/'
  const cooking = '/articles?topic=cooking'
  const football = '/articles?topic=football'
  return (
    <div>
      <h1>NC-NEWS</h1>
      <h2>The only place to get your news</h2>
      <Link
        className="header-button"
        to={home}
      >
        Home
      </Link>
      <Link
        className="header-button"
        to={coding}
      >
        Coding
      </Link>
      <Link
        className="header-button"
        to={cooking}
      >
        Cooking
      </Link>
      <Link
        className="header-button"
        to={football}
      >
        Football
      </Link>
    </div>
  );
}

export default Header;
