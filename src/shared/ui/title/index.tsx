import { FC } from "react";

import s from "./styles.module.scss";

export type InputProps = {
  title: string;
};

export const Title: FC<InputProps> = ({ title }) => {
  return <h1 className={s.title}>{title}</h1>;
};
