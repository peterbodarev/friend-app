import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { EditFriend } from "@/widgets/editFriend";
import { deleteFriendThunk } from "@/widgets/friendTable";
import { selectFriendById } from "@/entities/friendList";
import { formatFriendName } from "@/entities/friend";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { ROUTE_CONSTANTS } from "@/shared/config";
import { Title } from "@/shared/ui/title";

import css from "./index.module.scss";

export function EditFriendPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { friendId } = useParams();
  const friend = useAppSelector((state) =>
    selectFriendById(state, friendId || "")
  );

  const removeDisabled = !(friendId && friend);

  const navigateToHome = useCallback(() => navigate(ROUTE_CONSTANTS.HOME), []);

  return (
    <div className={css.container}>
      {friend !== undefined ? (
        <>
          <Title title={formatFriendName(friend)} />
          <EditFriend friend={friend} />
        </>
      ) : (
        <div>Loading...</div>
      )}

      <div className={css.actions}>
        <button type="button" onClick={navigateToHome}>
          Home
        </button>
        <button
          type="button"
          onClick={() =>
            navigate(ROUTE_CONSTANTS.VIEW.replace(":friendId", friendId || ""))
          }
        >
          Show
        </button>
        <button
          type="button"
          disabled={removeDisabled}
          onClick={() => {
            dispatch(deleteFriendThunk(friendId || ""));
            navigateToHome();
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
