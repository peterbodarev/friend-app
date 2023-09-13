import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTE_CONSTANTS } from "@/shared/config";
import { NotFound } from "./not-found/NotFound";

export const Router: FC = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path={ROUTE_CONSTANTS.HOME} element={<div />} />
    <Route path={ROUTE_CONSTANTS.CREATE} element={<div />} />
    <Route path={ROUTE_CONSTANTS.VIEW} element={<div />} />
    <Route path={ROUTE_CONSTANTS.EDIT} element={<div />} />
    <Route path={ROUTE_CONSTANTS.NOT_FOUND} element={<NotFound />} />
  </Routes>
);
