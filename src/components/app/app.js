import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { ticketsLoad, setSearchID } from "../../redux/actions";
import Header from "../header";
import Filter from "../filters";
import Sorting from "../sorting";
import TicketList from "../ticket-list";

import classes from "./app.module.scss";

function App() {
  const { id, stop, tickets } = useSelector((store) => store.service);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchID());
  }, []);

  useEffect(() => {
    if (id && !stop) {
      dispatch(ticketsLoad(id));
    }
  }, [id, tickets]);

  return (
    <section className={classes.wrapper}>
      <Header />
      <Filter />
      <Sorting />
      <TicketList />
    </section>
  );
}

export default App;
