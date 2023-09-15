export type FriendId = string;

export type Friend = {
  id: FriendId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
};

export type CreateFriend = Omit<Friend, "id">;
