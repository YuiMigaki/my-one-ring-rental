import { links } from "../../data/nav-list";


// This is the navigation components for every page
export default function Navigation() {
  return (
    <>
  
    <ul className="nav navbar-nav">
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.link}>{link.page}</a>
        </li>
      ))}
    </ul>
  </>
);
}
