import Header from "../header";
import Filter from "../filters";
import Sorting from "../sorting";
import TicketList from "../ticket-list";

import classes from "./app.module.scss";

export default function App() {
  return (
    <section className={classes.wrapper}>
      <Header />
      <Filter />
      <Sorting />
      <TicketList />
    </section>
  );
}
