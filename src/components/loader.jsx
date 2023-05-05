import classes from "./top-navbar.module.css";

const Loader = (props) => {
  return (
    <div className={classes.wrapper} {...props}>
      <div className={classes.spinner}></div>
      <p>{props.children}</p>
    </div>
  );
};

export default Loader;
