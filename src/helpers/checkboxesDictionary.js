import filterNames from "../redux/filterNames";

const checkboxesDictionary = [
  { name: filterNames.all, label: "Все" },
  { name: filterNames.noTransfers, label: "Без пересадок" },
  { name: filterNames.oneTransfers, label: "1 пересадка" },
  { name: filterNames.twoTransfers, label: "2 пересадки" },
  { name: filterNames.threeTransfers, label: "3 пересадки" },
];

export default checkboxesDictionary;
