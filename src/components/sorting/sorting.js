import { connect } from "react-redux";

import sortNames from "../../redux/sortNames";
import { setSort } from "../../redux/actions";

import classes from "./sorting.module.scss";

const classNames = require("classnames");

function Sorting(props) {
  const { onSortChange } = props;

  const buttonsDict = [
    { name: sortNames.cheapest, label: "Самый дешевый" },
    { name: sortNames.fastest, label: "Самый быстрый" },
    { name: sortNames.optimal, label: "Оптимальный" },
  ];

  const buttons = buttonsDict.map(({ name, label }) => {
    const clazz = classNames({
      [classes.selected]: props.sort === name,
    });

    return (
      <button key={name} className={`${classes.button} ${clazz}`} type="button" onClick={() => onSortChange(name)}>
        {label}
      </button>
    );
  });

  return <div className={classes.wrapper}>{buttons}</div>;
}

const mapStateToProps = ({ sort }) => {
  return {
    sort,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSortChange: (name) => {
      dispatch(setSort(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
