import { useThemeContext } from "../context/context";

const Header = () => {
  const theme = useThemeContext();
  const darkMode = theme.darkMode;
  const toggleTheme = () => {
    theme.setDarkMode(!darkMode);
  };

  return (
    <div>
      <header
        className={`navbar navbar-expand ${
          darkMode ? "navbar-dark bg-dark" : "bg-secenary navbar-light"
        }  shadow-sm`}
      >
        <div className="container">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <a href="#" className="nav-link">
                صفحه اصلی
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link"></a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                محصولات ما
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                درباره ما
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                تماس با ما
              </a>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className={`${darkMode ? "btn-light" : "btn-dark"} btn `}
          >
            {darkMode ? "تاریک" : "روشن"}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
