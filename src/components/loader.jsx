import classes from "./loader-module.css";

const Loader = (props) => {
  return (
    <div className="wrapper" {...props}>
      <p>{props.children}</p>
    </div>
  );
};

export default Loader;
