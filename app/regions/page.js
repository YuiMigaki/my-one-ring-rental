
import { regions } from "../../data/regions-list";
import Footer from "../components/footer";

//This is the regions page's content
export default function RegionPage() {
  return (
    <>
    <div className="main col-sm-12">
      <h1 className="section-title">Regions in Australia</h1>
      <div className="grid-style1 clearfix">
        {regions.map((region) => (
          <div className="item col-md-4" key={region.id}>
            <div className="image">
              <a href="#">
                <h3 className="city">{region.city}</h3>
                <span className="location">{region.location}</span>
              </a>
              <img src="http://placehold.it/760x670" alt={region.city} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <footer><Footer/></footer>
    </>
  );
}
