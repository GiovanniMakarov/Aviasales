import { useDispatch, useSelector } from "react-redux";

import sortNames from "../../redux/sortNames";
import { setSort } from "../../redux/actions";

import classes from "./sorting.module.scss";

const classNames = require("classnames");

function Sorting() {
  const sort = useSelector((store) => store.filter.sort);
  const dispatch = useDispatch();

  function onSortChange(name) {
    dispatch(setSort(name));
  }

  const buttonsDict = [
    { name: sortNames.cheapest, label: "Самый дешевый" },
    { name: sortNames.fastest, label: "Самый быстрый" },
    { name: sortNames.optimal, label: "Оптимальный" },
  ];

  const buttons = buttonsDict.map(({ name, label }) => {
    const clazz = classNames({
      [classes.selected]: sort === name,
    });

    return (
      <button key={name} className={`${classes.button} ${clazz}`} type="button" onClick={() => onSortChange(name)}>
        {label}
      </button>
    );
  });

  return <div className={classes.wrapper}>{buttons}</div>;
}

export default Sorting;
