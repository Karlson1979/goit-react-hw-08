import { useEffect } from "react";
import css from "./HomePage.module.css";
import { GrStatusGood } from "react-icons/gr";

const HomePage = () => {
  useEffect(() => {
    document.title = "Phone Book";
  }, []);
  return (
    <>
      <h1 className={css.title}>PHONE BOOK</h1>
    </>
  );
};
export default HomePage;
