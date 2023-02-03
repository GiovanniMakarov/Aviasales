import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Ticket from "../ticket";
import sortTickets from "../../helpers/sortTickets";
import filterNames from "../../helpers/filterTickets";
import Spinner from "../spinner";

import classes from "./ticket-list.module.scss";

function TicketList({ tickets, sort, transfers, loading }) {
  const [index, setIndex] = useState(5);

  const filteredTickets = filterNames(tickets, transfers);
  const sortedTickets = sortTickets(filteredTickets, sort);

  if (tickets.length > 0 && filteredTickets.length === 0) {
    return <span className={classes.noFindMessage}>Рейсов, подходящих под заданные фильтры, не найдено</span>;
  }

  const ticketsToRender = sortedTickets.slice(0, index).map((ticket) => {
    return <Ticket key={uuidv4()} ticket={ticket} />;
  });

  const spinner = loading && <Spinner />;

  return (
    <div className={classes.list}>
      {spinner}
      {ticketsToRender}
      <button type="button" className={classes.button_more} onClick={() => setIndex((el) => el + 5)}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
}

const mapStateToProps = ({ tickets, sort, transfers, loading }) => {
  return {
    tickets,
    sort,
    transfers,
    loading,
  };
};

export default connect(mapStateToProps)(TicketList);
