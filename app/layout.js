"use client";
import "../styles/globals.css";

import Header from "./components/header";
import Navigation from "./components/navigation";
import Link from "next/link";
import Script from "next/script";
import SearchBedroom from "./components/search-bedrooms-component";
import SearchStatus from "./components/search-status-component";
import SlideList from "./components/main-slider-component";
import { usePathname } from "next/navigation"; //Reference from: https://nextjs.org/docs/app/api-reference/functions/use-pathname 

//This root layout receives two props which are children and footer
export default function RootLayout({ children, footer }) {
  const pathname = usePathname(); //This enables to get the current URL's pathname
  const isIndexPage = pathname === "/"; //This is checking if the current page is index page

  return (
    <html lang="en">
      <head>
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <Script src="js/common/modernizr.js" defer></Script>
        <Script src="js/common.js" defer></Script>
        <Script src="js/common/jquery-1.11.1.min.js" defer></Script>
        <Script src="js/common/bootstrap.min.js"  defer></Script>
        <Script src="js/common/bootstrap-datepicker.js" defer></Script>
        <Script src="js/common/chosen.min.js" defer></Script>
        <Script src="js/common/bootstrap-checkbox.js" defer></Script>
        <Script src="js/common/nice-scroll.js" defer></Script>
        <Script src="js/common/jquery-browser.js" defer></Script>
        <Script src="js/scripts.js"></Script>
      </head>

      <body suppressHydrationWarning>
        <div id="wrapper">
          {/* BEGIN HEADER  */}
          <header>
            <div>
              <Header /> {/* Calling the Header component */}
              
            </div>

            <div id="nav-section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <Link href="/" className="nav-logo">
                      <img src="images/logo.png" alt="One Ring Rentals" />
                    </Link>
                    {/* <!-- BEGIN SEARCH --> */}
                    <div id="sb-search" className="sb-search">
                      <form>
                        <input
                          className="sb-search-input"
                          placeholder="Search..."
                          type="text"
                          // value=""
                          name="search"
                          id="search"
                        />
                        <input
                          className="sb-search-submit"
                          type="submit"
                          value="submit"
                        />
                        <i className="fa fa-search sb-icon-search"></i>
                      </form>
                    </div>
                    {/* <!-- END SEARCH --> */}
                    {/* <!-- BEGIN NAVIGATION MENU --> */}
                    <nav className="navbar">
                      <button id="nav-mobile-btn">
                        <i className="fa fa-bars"></i>
                      </button>
                      <Navigation />{/* Calling the Navigation component */}
                    </nav>
                    {/* <!-- END NAVIGATION MENU --> */}
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- END HEADER --> */}

          {isIndexPage && ( //This is checking if the user is on homepage, if yes, show the following content 
            <>
              {/* <!-- BEGIN HOME SLIDER SECTION --> */}
              <div
                id="carousel-example-generic"
                className="carousel slide"
                data-ride="carousel"
              >
                <SlideList />{/* Calling the SlideList component */}
              </div>
              <div id="home-advanced-search" className="open">
                <div id="opensearch"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <form>
                        <div className="form-group">
                          <div className="form-control-small">
                            <div
                              className="input-group date chzn-container"
                              data-datepicker
                            >
                              <input
                                name="arrive-date"
                                placeholder="Arrive on..."
                                type="text"
                                className="form-control"
                                data-date-format="DD/MM/YYYY"
                              />
                              <span className="input-group-addon">
                                <span className="glyphicon glyphicon-calendar"></span>
                              </span>
                            </div>
                          </div>

                          <div className="form-control-small">
                            <SearchStatus />{/* Calling the SeachStatus component */}
                          </div>
                          <div className="form-control-small">
                            <SearchBedroom />{/* Calling the SearchBedroom component */}
                          </div>

                          <div className="form-control-large">
                            <input
                              type="text"
                              className="form-control"
                              name="location"
                              placeholder="City, State, Country, etc..."
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-fullcolor"
                            style={{ marginBottom: "17px" }}
                          >
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- END HOME ADVANCED SEARCH --> */}
            </>
          )}
          {/* Main content section */}
          <div className="content">
            <div className="container">
              <div className="row">
                {/* <!-- BEGIN MAIN CONTENT --> */}
                <div>{children}</div>

                {/* <!-- END MAIN CONTENT --> */}
              </div>
            </div>
          </div>
          {/* End Main content section */}
          {/* <!-- BEGIN FOOTER --> */}
          <footer>{footer}</footer>
          {/* <!-- END FOOTER --> */}
        </div>
        {/* <!-- END WRAPPER --> */}



      </body>
    </html>
  );
}

