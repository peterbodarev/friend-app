import { FriendsListResponse } from "./model";

import { CreateFriend } from "@/entities/friend";
import { apiInstance } from "@/shared/api/base";

const BASE_URL = "/users";

export const getFriendsList = (): Promise<FriendsListResponse> => {
  return apiInstance.get(BASE_URL, {});
};

export const deleteFriend = (
  friendId: string
): Promise<FriendsListResponse> => {
  return apiInstance.delete(BASE_URL + "/" + friendId, {});
};

export const editFriend = (
  friendId: string,
  friend: CreateFriend
): Promise<FriendsListResponse> => {
  return apiInstance.put(BASE_URL + "/" + friendId, friend, {});
};

export const createFriend = (
  friend: CreateFriend
): Promise<FriendsListResponse> => {
  return apiInstance.post(BASE_URL, friend, {});
};
