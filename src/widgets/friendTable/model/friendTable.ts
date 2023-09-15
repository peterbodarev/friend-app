import { createAsyncThunk } from "@reduxjs/toolkit";

import { setFriendsList } from "@/entities/friendList";
import { friendsApi } from "@/entities/friendList/api";

export const friendTableThunk = createAsyncThunk<
  void,
  undefined,
  { state: RootState }
>("getFriendsList", async (body: undefined, { dispatch }) => {
  try {
    const response = await friendsApi.getFriendsList();
    const friendsList = response?.data;
    if (response?.success && Array.isArray(friendsList)) {
      dispatch(setFriendsList(friendsList));
    }
  } catch (error) {
    throw new Error("Unknown error");
  }
});

export const deleteFriendThunk = createAsyncThunk<
  void,
  string,
  { state: RootState }
>("deleteFriend", async (friendId: string, { dispatch }) => {
  try {
    const response = await friendsApi.deleteFriend(friendId);
    if (response?.success) {
      dispatch(friendTableThunk());
    }
  } catch (error) {
    throw new Error("Unknown error");
  }
});
