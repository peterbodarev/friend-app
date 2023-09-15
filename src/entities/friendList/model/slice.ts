import {
  type PayloadAction,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

import { type FriendList } from "./types";

import { type Friend, type FriendId } from "@/entities/friend";

type FriendListState = {
  friends: FriendList;
};

const initialState: FriendListState = {
  friends: [],
};

export const friendListSlice = createSlice({
  name: "friendList",
  initialState,
  reducers: {
    setFriendsList: (state, action: PayloadAction<FriendList>) => {
      state.friends = action.payload;
    },
  },
});

export const selectFriends = (state: RootState) => state.friendList.friends;

export const selectFriendById = createSelector(
  selectFriends,
  (_: RootState, friendId: FriendId) => friendId,
  (items: FriendList, friendId: FriendId): Friend | undefined =>
    items.find((friend) => friend.id === friendId)
);

export const { setFriendsList } = friendListSlice.actions;
