import { useNavigate } from "react-router-dom";

import { FriendForm } from "@/features/friendForm";
import { friendsApi } from "@/entities/friendList/api";
import { ROUTE_CONSTANTS } from "@/shared/config";

export function AddFriend() {
  const navigate = useNavigate();
  return (
    <FriendForm
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        username: "",
      }}
      onSubmit={async (values) => {
        const response = await friendsApi.createFriend(values);
        if (response?.success) {
          navigate(ROUTE_CONSTANTS.HOME);
        }
      }}
      submitMessage="Create Friend"
    />
  );
}
