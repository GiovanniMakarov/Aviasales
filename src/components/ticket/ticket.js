import classes from "./ticket.module.scss";
import logoFile from "./S7 Logo.png";

export default function Ticket() {
  return (
    <div className={classes.ticket}>
      <div className={classes.header}>
        <span className={classes.price}>13 400 Р</span>
        <img className={classes.logo} src={logoFile} width={110} height={36} alt="aviacompany" />
      </div>

      <div className={classes.body}>
        <div className={classes.block}>
          <span className={classes.name}>MOW - HKT</span>
          <span className={classes.value}>10:45 - 08:00</span>
        </div>
        <div className={classes.block}>
          <span className={classes.name}>В пути</span>
          <span className={classes.value}>21ч 15м</span>
        </div>
        <div className={classes.block}>
          <span className={classes.name}>2 пересадки</span>
          <span className={classes.value}>HKG, JNB</span>
        </div>
        <div className={classes.block}>
          <span className={classes.name}>MOW - HKT</span>
          <span className={classes.value}>11:20 - 00:50</span>
        </div>
        <div className={classes.block}>
          <span className={classes.name}>В пути</span>
          <span className={classes.value}>13ч 30м</span>
        </div>
        <div className={classes.block}>
          <span className={classes.name}>1 пересадка</span>
          <span className={classes.value}>HKG</span>
        </div>
      </div>
    </div>
  );
}
