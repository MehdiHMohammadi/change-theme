import React from "react";

const Header = () => {
  return (
    <div>
      <header className="navbar navbar-expand bg-secenary navbar-light shadow-sm">
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
          <button className="btn btn-dark">تاریک</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
