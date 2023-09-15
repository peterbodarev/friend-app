import { useNavigate } from "react-router-dom";

import { AddFriend } from "@/widgets/addFriend";

import { Title } from "@/shared/ui/title";
import { ROUTE_CONSTANTS } from "@/shared/config";

import css from "./index.module.scss";

export function AddFriendPage() {
  const navigate = useNavigate();
  return (
    <div className={css.container}>
      <Title title="Add New Friend" />
      <AddFriend />
      <button type="button" onClick={() => navigate(ROUTE_CONSTANTS.HOME)}>
        Home
      </button>
    </div>
  );
}
