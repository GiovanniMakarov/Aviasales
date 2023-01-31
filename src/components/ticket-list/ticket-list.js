import Ticket from "../ticket";

import classes from "./ticket-list.module.scss";

export default function TicketList() {
  return (
    <div className={classes.list}>
      <Ticket />
      <Ticket />
      <Ticket />

      <button type="button" className={classes.button_more}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
}
