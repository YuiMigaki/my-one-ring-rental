import MainComponent from "./components/main-components";
import Sidebar from "./components/main-side-bar-components";
import Footer from "./components/footer-components";

//This is the home page's content which is rendering other components
export default function HomePage() {
  return (
   <>
      {/* <!-- BEGIN CONTENT WRAPPER --> */}
      <div className="content">
        <div className="container">
          <div className="row">
            {/* <!-- BEGIN MAIN CONTENT --> */}
            <div>
              <MainComponent />
              <Sidebar />
            </div>
            {/* <!-- END MAIN CONTENT --> */}
          </div>
        </div>
      </div>
      {/* <!-- END CONTENT WRAPPER --> */}
      <footer>
        <Footer />
      </footer>
  </>
  );
}
