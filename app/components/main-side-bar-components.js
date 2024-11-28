
import { deals } from "../../data/side-bar-list";
import { activities } from "../../data/side-bar-list";


// This is the sidebar components for index page
export default function Sidebar() {
 
    return (
      <div className="sidebar col-sm-4">
        <div className="col-sm-12">
          <h2 className="section-title">Last minute deals</h2>
          <ul className="latest-news">
            {deals.map((deal) => (
              <li className="col-md-12" key={deal.id}>
                <div className="image">
                  <a href="/"></a>
                  <img src="https://placehold.it/90x90" alt="placeholder" />
                </div>
  
                <ul className="top-info">
                  <li>
                    <i className="fa fa-calendar"></i>Available {deal.calendar}
                  </li>
                </ul>
  
                <h4>
                  <a href="/">{deal.detail}</a>
                  <p>{deal.location}</p>
                </h4>
              </li>
            ))}
          </ul>
          <p className="center">
            <a className="btn btn-fullcolor" href="/">
              More deals
            </a>
          </p>
        </div>
  
        <div className="col-sm-12">
          <h2 className="section-title">Activity</h2>
          <ul className="activity">
            {activities.map((activity) => (
              <li className="col-lg-12" key={activity.id}>
                <a href="/">
                  <img src="https://placehold.it/70x70" alt="placeholder" />
                </a>
                <div className="info">
                  <h5>
                    {activity.header}
                    <a href="/">{activity.details}</a>
                  </h5>
                  <p>{activity.tags}</p>
                  <h6>{activity.time}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
