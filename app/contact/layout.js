
//This contact layout receives two props which are children and footer
export default function ContactLayout({ children, footer }) {
  return (
    <>
    {/* <!-- BEGIN CONTENT WRAPPER --> */}
    <main className="content">
      <div className="container">
        <div className="row">
          {/* <!-- BEGIN MAIN CONTENT --> */}
          <div>{children}</div>
          {/* <!-- END MAIN CONTENT --> */}
        </div>
      </div>
    </main>
    {/* <!-- END CONTENT WRAPPER --> */}
    <footer>{footer}</footer>
    </>
  );
}
