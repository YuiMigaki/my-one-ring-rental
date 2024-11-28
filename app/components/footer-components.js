
import { links } from "../../data/footer-list";
import { regions1 } from "../../data/footer-list";
import { regions2 } from "../../data/footer-list";
import { media } from "../../data/footer-list";

// This is the main footer components for index page
export default function MainFooter() {

  return (
    <>
      <div id="footer-top" className="container">
        <div className="row">
          <div className="block col-sm-3">
            <a href="/">
              <img src="images/logo.png" alt="One Ring Rentals" />
            </a>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
              volutpat quam dignissim, convallis elit id, efficitur sem. Vivamus
              ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
              pellentesque nec at metus.
            </p>
          </div>
          <div className="block col-sm-3">
            <h3>Helpful Links</h3>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link.id}>
                  <a href="/">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="block col-sm-6">
            <h3>Popular regions</h3>
            <div className="row">
              <div className="col-sm-6">
                <ul className="footer-listings">
                  {regions1.map((region) => (
                    <li key={region.id}>
                      <div className="image">
                        <a href="regions">
                          <img
                            src="https://placehold.it/760x670"
                            alt={region.title}
                          />
                        </a>
                      </div>
                      <p>
                        <a href="regions">{region.title}</a>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="footer-listings">
                  {regions2.map((region) => (
                    <li key={region.id}>
                      <div className="image">
                        <a href="regions">
                          <img
                            src="https://placehold.it/760x670"
                            alt={region.title}
                          />
                        </a>
                      </div>
                      <p>
                        <a href="regions">{region.title}</a>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              &copy; 2014 One Ring Rentals
              <ul className="social-networks">
                {media.map((item) => (
                  <li key={item.id}>
                    <a href="/">
                      <i className={item.class}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
