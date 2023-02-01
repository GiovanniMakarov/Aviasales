import { connect } from "react-redux";

import filterNames from "../../redux/filterNames";
import { toggleFilterByName } from "../../redux/actions";

import classes from "./filters.module.scss";

function Filters({ onFilterChange, transfers }) {
  const checkBoxesDict = [
    { name: filterNames.all, label: "Все" },
    { name: filterNames.noTransfers, label: "Без пересадок" },
    { name: filterNames.oneTransfers, label: "1 пересадка" },
    { name: filterNames.twoTranfers, label: "2 пересадки" },
    { name: filterNames.threeTransfers, label: "3 пересадки" },
  ].map((checkBox) => {
    return {
      ...checkBox,
      isChecked: transfers[checkBox.name],
    };
  });

  const checkBoxes = checkBoxesDict.map(({ name, label, isChecked }) => {
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

const mapStateToProps = ({ transfers }) => {
  return {
    transfers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (name) => {
      dispatch(toggleFilterByName(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
