import { properties } from "../../data/main-list";
import { regions } from "../../data/main-list";
import { articles } from "../../data/main-list";

// This is the main components for index page
export default function MainComponent() {

  return (
    <div className="main col-sm-8">
      <h1 className="section-title">Featured Properties</h1>
      <div className="grid-style1 clearfix">
        {properties.map((property) => (
          <div className="item col-md-4" key={property.id}>
            <div className="image">
              <a href="/">
                <h3>{property.title}</h3>
                <span className="location">{property.location}</span>
              </a>
              <img src="http://placehold.it/760x670" alt="" />
            </div>
            <div className="price">
              <span>{property.price}</span>
              <p>per night</p>
            </div>
            <ul className="amenities">
              <li>
                <i className="icon-bedrooms"></i>
                {property.bed}
              </li>
              <li>
                <i className="icon-bathrooms"></i>
                {property.bathroom}
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-sm-12">
          <h1 className="section-title">Popular Regions</h1>
          <div id="regions">
            {regions.map((region) => (
              <div className="item" key={region.id}>
                <a href="/">
                  <img src="http://placehold.it/194x194" alt="" />
                  <h3>{region.header}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className="section-title">Recent Articles</h1>
      <div className="grid-style1">
        {articles.map((article) => (
          <div className="item col-md-4" key={article.id}>
            <div className="image">
              <a href="/">
                <span className="btn btn-default">
                  <i className="fa fa-file-o"></i> Read More
                </span>
              </a>
              <img src="http://placehold.it/766x515" alt="" />
            </div>
            <div className="tag">
              <i className={article.icon}></i>
            </div>
            <div className="info-blog">
              <ul className="top-info">
                <li>
                  <i className="fa fa-calendar"></i>
                  {article.calendar}
                </li>
                <li>
                  <i className="fa fa-comments-o"></i>
                  {article.comments}
                </li>
                <li>
                  <i className="fa fa-tags"></i> {article.tags}
                </li>
              </ul>
              <h3>
                <a href="/">{article.title}</a>
              </h3>
              <p>
                Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                mauris ac pellentesque fringilla, tortor libero condimen.
              </p>
            </div>
          </div>
        ))}

        <div className="center">
          <a href="/" className="btn btn-default-color">
            View All News
          </a>
        </div>
      </div>
    </div>
  );
};


