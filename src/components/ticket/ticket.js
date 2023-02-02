import { add, format, minutesToMilliseconds } from "date-fns";
import { Fragment } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

import classes from "./ticket.module.scss";

export default function Ticket({ ticket }) {
  const { carrier, price, segments } = ticket;

  const formPrice = new Intl.NumberFormat("ru-RU").format(price);
  const companyLogo = `https://pics.avs.io/99/36/${carrier}.png`;

  return (
    <div className={classes.ticket}>
      <div className={classes.header}>
        <span className={classes.price}>{`${formPrice} Р`}</span>
        <img className={classes.logo} src={companyLogo} width={110} height={36} alt={`aviacompany ${carrier}`} />
      </div>
      <TicketBody segments={segments} />
    </div>
  );
}

function TicketBody({ segments }) {
  const ways = segments.map(({ date, destination, duration, origin, stops }) => {
    const dateOut = new Date(date);
    const dateIn = add(dateOut, { minutes: duration });
    const timesInOut = `${format(dateOut, "HH:mm")} - ${format(dateIn, "HH:mm")}`;
    const flyDuration = format(new Date(minutesToMilliseconds(duration)), "HHч mmм");

    const transfers = classNames({
      "Без пересадок": stops.length === 0,
      "1 пересадка": stops.length === 1,
      "2 пересадки": stops.length === 2,
      "3 пересадки": stops.length === 3,
    });

    return (
      <Fragment key={uuidv4()}>
        <div className={classes.block}>
          <span className={classes.name}>{`${origin} - ${destination}`}</span>
          <span className={classes.value}>{timesInOut}</span>
        </div>

        <div className={classes.block}>
          <span className={classes.name}>В пути</span>
          <span className={classes.value}>{flyDuration}</span>
        </div>

        <div className={classes.block}>
          <span className={classes.name}>{transfers}</span>
          <span className={classes.value}>{stops.join(", ")}</span>
        </div>
      </Fragment>
    );
  });

  return <div className={classes.body}>{ways}</div>;
}
