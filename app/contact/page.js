import { formGroups } from "../../data/contact-list";
import Footer from "../components/footer";

//This is the contact page's content
export default function ContactPage() {
  return (
    <>
      <div className="main col-sm-12">
        <h1 className="section-title">Contact Us</h1>
        <div className="contact-form">
          <form action="contact.php" method="post">
            {formGroups.map((formGroup) => (
              <div className="form-group" key={formGroup.id}>
                <label htmlFor={formGroup.htmlFor}>{formGroup.label}</label>
                <input
                  type={formGroup.type}
                  className="form-control"
                  id={formGroup.inputId}
                  name={formGroup.name}
                  autoComplete={formGroup.autoComplete}
                  required
                />
              </div>
            ))}

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
