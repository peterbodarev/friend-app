import { useNavigate } from "react-router-dom";

import { FriendForm } from "@/features/friendForm";
import { friendsApi } from "@/entities/friendList/api";
import { Friend } from "@/entities/friend";
import { ROUTE_CONSTANTS } from "@/shared/config";

type Props = {
  friend: Friend;
};

export function EditFriend({ friend }: Props) {
  const navigate = useNavigate();
  return (
    <FriendForm
      initialValues={friend}
      onSubmit={async (values) => {
        const response = await friendsApi.editFriend(friend.id, values);
        if (response?.success) {
          navigate(ROUTE_CONSTANTS.HOME);
        }
      }}
      submitMessage="Update Friend"
    />
  );
}
