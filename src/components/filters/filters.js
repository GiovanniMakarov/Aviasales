import { useDispatch, useSelector } from "react-redux";

import checkboxesDictionary from "../../helpers/checkboxesDictionary";
import { toggleFilterByName } from "../../redux/actions";

import classes from "./filters.module.scss";

function Filters() {
  const transfers = useSelector((store) => store.filter.transfers);
  const dispatch = useDispatch();

  function onFilterChange(name) {
    dispatch(toggleFilterByName(name));
  }

  const newCheckboxesDictionary = checkboxesDictionary.map((checkBox) => {
    return {
      ...checkBox,
      isChecked: transfers[checkBox.name],
    };
  });

  const checkBoxes = newCheckboxesDictionary.map(({ name, label, isChecked }) => {
    return (
      <label key={name} className={classes.item}>
        <input type="checkbox" onChange={() => onFilterChange(name)} checked={isChecked} />
        <span className={classes.checkbox} />
        <span>{label}</span>
      </label>
    );
  });

  return (
    <div className={classes.filters}>
      <span className={classes.header}>Количество пересадок</span>
      {checkBoxes}
    </div>
  );
}

export default Filters;
