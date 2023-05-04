import { Link } from "react-router-dom";

const LinkButtons = (props) => {
  const page_dict = props.pages;
  const page_title = Object.keys(page_dict);
  return (
    <ul>
      {page_title.map((title, index) => (
        <li key={title}>
          <Link to={page_dict[title]}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

function LandingPage() {
  const pages = {
    Surveillance: "/surveillance",
    Producer: "/producer",
    Reports: "/reports",
    "User Config": "/user-config",
  };
  return (
    <>
      <h1>Available Pages</h1>
      <nav>
        <LinkButtons pages={pages} />
      </nav>
    </>
  );
}

export { LandingPage };
