import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Ticket from "../ticket";

import classes from "./ticket-list.module.scss";

function TicketList({ tickets }) {
  const ticketsBundle = 5;

  if (tickets.length === 0) {
    return <span>Загрузка...</span>;
  }

  const ticketsToRender = tickets.slice(0, ticketsBundle).map((ticket) => {
    return <Ticket key={uuidv4()} ticket={ticket} />;
  });

  return (
    <div className={classes.list}>
      {ticketsToRender}
      <button type="button" className={classes.button_more}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
}

const mapStateToProps = ({ tickets }) => {
  return {
    tickets,
  };
};

export default connect(mapStateToProps)(TicketList);
