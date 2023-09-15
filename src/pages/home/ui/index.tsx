import { FriendTable } from "@/widgets/friendTable";
import { Title } from "@/shared/ui/title";

import s from "./styles.module.scss";

export const Home = () => {
  return (
    <div className={s.home}>
      <Title title="Friend List" />
      <FriendTable />
    </div>
  );
};
