import classes from "./sorting.module.scss";

export default function Sorting() {
  return (
    <div className={classes.wrapper}>
      <button className={`${classes.button} ${classes.selected}`} type="button">
        Самый дешевый
      </button>
      <button className={classes.button} type="button">
        Самый быстрый
      </button>
      <button className={classes.button} type="button">
        Оптимальный
      </button>
    </div>
  );
}
