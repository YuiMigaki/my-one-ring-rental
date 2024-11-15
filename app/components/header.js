import { languages } from "../../data/header-list";

// This is the header components for every page
export default function Header() {

  return (
    <>
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul id="top-buttons">
                <li>
                  <a href="/">
                    <i className="fa fa-sign-in"></i> Login
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-pencil-square-o"></i> Register
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <div className="language-switcher">
                    <span>
                      <i className="fa fa-globe"></i> English
                    </span>
                    <ul>
                      {languages.map((language) => (
                        <li key={language.id}>
                          <a href="/">{language.language}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
