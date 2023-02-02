import { connect } from "react-redux";
import { useEffect } from "react";

import { ticketsLoad, setSearchID } from "../../redux/actions";
import Header from "../header";
import Filter from "../filters";
import Sorting from "../sorting";
import TicketList from "../ticket-list";

import classes from "./app.module.scss";

function App({ id, stop, tickets, dispTicketsLoad, dispSearchId }) {
  useEffect(() => {
    dispSearchId();
  }, []);

  useEffect(() => {
    if (id && !stop) {
      dispTicketsLoad(id);
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

const mapStateToProps = ({ id, tickets, stop, error }) => {
  return {
    id,
    tickets,
    stop,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispTicketsLoad: (id) => {
      dispatch(ticketsLoad(id));
    },

    dispSearchId: () => {
      dispatch(setSearchID());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
