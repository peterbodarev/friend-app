import { Link } from "react-router-dom";

import { ROUTE_CONSTANTS } from "@/shared/config";

import s from "./styles.module.scss";

export const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <Link className={s.link} to={ROUTE_CONSTANTS.HOME}>
        Friend App
      </Link>
      <Link className={s.link} to={ROUTE_CONSTANTS.ADD}>
        Add Friend
      </Link>
    </nav>
  );
};
