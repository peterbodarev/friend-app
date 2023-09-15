import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { NotFound } from "./not-found/NotFound";
import { Home } from "./home";
import { ViewFriend } from "./viewFriend";
import { AddFriendPage } from "./addFriend";
import { EditFriendPage } from "./editFriend";

import { ROUTE_CONSTANTS } from "@/shared/config";

import s from "./styles.module.scss";

export const Router: FC = () => (
  <main className={s.main}>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
      <Route path={ROUTE_CONSTANTS.ADD} element={<AddFriendPage />} />
      <Route path={ROUTE_CONSTANTS.VIEW} element={<ViewFriend />} />
      <Route path={ROUTE_CONSTANTS.EDIT} element={<EditFriendPage />} />
      <Route path={ROUTE_CONSTANTS.NOT_FOUND} element={<NotFound />} />
    </Routes>
  </main>
);
