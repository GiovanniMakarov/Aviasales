import classes from "./filters.module.scss";

export default function Filters() {
  return (
    <div className={classes.filters}>
      <span className={classes.header}>Количество пересадок</span>
      <label className={classes.item}>
        <input type="checkbox" />
        <span className={classes.checkbox} />
        <span>Все</span>
      </label>

      <label className={classes.item}>
        <input type="checkbox" />
        <span className={classes.checkbox} />
        <span>Без пересадок</span>
      </label>

      <label className={classes.item}>
        <input type="checkbox" />
        <span className={classes.checkbox} />
        <span>1 пересадка</span>
      </label>

      <label className={classes.item}>
        <input type="checkbox" />
        <span className={classes.checkbox} />
        <span>2 пересадки</span>
      </label>

      <label className={classes.item}>
        <input type="checkbox" />
        <span className={classes.checkbox} />
        <span>3 пересадки</span>
      </label>
    </div>
  );
}
