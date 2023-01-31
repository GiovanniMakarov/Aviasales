import classes from "./header.module.scss";
// import logo from "./Logo.svg";

export default function Headers() {
  return (
    <header className={classes.header}>
      <button type="button" className={classes.logo} />
    </header>
  );
}
