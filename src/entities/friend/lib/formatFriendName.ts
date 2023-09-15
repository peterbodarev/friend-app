import { Friend } from "../model/types";

export function formatFriendName(friend: Friend) {
  return friend.firstName + " " + friend.lastName;
}
