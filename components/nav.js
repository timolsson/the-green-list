const Nav = ({ settings }) => (
  <header className="top-header util__flex util__container">
    <nav className="top-header__col">Navigation</nav>
    <nav className="top-header__col top-header__second-navi">Contact</nav>
    <style jsx>{`
      .top-header {
        justify-content: space-between;
        padding-top: 30px;
        padding-bottom: 30px;
      }

      .top-header__second-navi {
        text-align: right;
      }

      .top-header__nav {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .top-header__nav li {
        padding: 0 20px 0 0;
      }

      .top-header__nav--right li {
        padding-right: 0;
        padding-left: 20px;
      }

      .top-header__link {
        line-height: 1.5;
        color: #000;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        transition: border 0.15s ease;
      }

      .top-header__link:hover {
        border-bottom: 2px solid #000;
      }
    `}</style>
  </header>
);

export default Nav;
