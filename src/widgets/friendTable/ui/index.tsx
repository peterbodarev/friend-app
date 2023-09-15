import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { deleteFriendThunk, friendTableThunk } from "../model/friendTable";

import { FriendList, selectFriends } from "@/entities/friendList";
import { formatFriendName } from "@/entities/friend";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { ROUTE_CONSTANTS } from "@/shared/config";

import css from "./index.module.scss";

export function FriendTable() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const friends: FriendList = useAppSelector(selectFriends);

  useEffect(() => {
    dispatch(friendTableThunk());
  }, []);

  return (
    <div className={css.container}>
      <div className={css.row}>
        <span>Name</span>
        <span>Email</span>
        <span>Phone</span>
        <span>Twitter</span>
        <span>Actions</span>
      </div>
      {friends.map((i) => (
        <div key={i.id} className={css.row}>
          <Link to={ROUTE_CONSTANTS.VIEW.replace(":friendId", i.id)}>
            {formatFriendName(i)}
          </Link>

          <span>{i.email}</span>
          <span>{i.phone}</span>
          <span>{i.username}</span>

          <div className={css.actions}>
            <button
              type="button"
              onClick={() => {
                navigate(ROUTE_CONSTANTS.EDIT.replace(":friendId", i.id));
              }}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteFriendThunk(i.id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
