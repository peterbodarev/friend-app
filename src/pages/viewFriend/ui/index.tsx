import { useNavigate, useParams } from "react-router-dom";

import { selectFriendById } from "@/entities/friendList";
import { formatFriendName } from "@/entities/friend";
import { useAppSelector } from "@/shared/model";
import { ROUTE_CONSTANTS } from "@/shared/config";
import { Title } from "@/shared/ui/title";

import css from "./index.module.scss";

export function ViewFriend() {
  const navigate = useNavigate();
  const { friendId } = useParams();

  const friend = useAppSelector((state) =>
    selectFriendById(state, friendId || "")
  );

  return (
    <div className={css.container}>
      {friend !== undefined ? (
        <>
          <Title title={formatFriendName(friend)} />
          <p className={css.viewContainer}>
            <span>{friend.email}</span>
            <span>{friend.phone}</span>
            <span>{friend.username}</span>
          </p>

          <div className={css.actions}>
            <button
              type="button"
              onClick={() => navigate(ROUTE_CONSTANTS.HOME)}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() =>
                navigate(
                  ROUTE_CONSTANTS.EDIT.replace(":friendId", friendId || "")
                )
              }
            >
              Edit
            </button>
          </div>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}
