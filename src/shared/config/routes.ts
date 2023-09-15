const baseUrl = "/friend-app";

export const ROUTE_CONSTANTS = {
  HOME: baseUrl + "/friends",
  ADD: baseUrl + "/friends/new",
  VIEW: baseUrl + "/friends/:friendId",
  EDIT: baseUrl + "/friends/:friendId/edit",
  NOT_FOUND: baseUrl + "/404",
};
