import { FriendList } from "@/entities/friendList";

export type FriendsResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type FriendsListResponse = FriendsResponse<FriendList>;
