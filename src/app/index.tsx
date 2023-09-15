import { FC, ReactElement } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { appStore } from "./appStore";

import { Router } from "@/pages";
import { Header } from "@/widgets/header";
import { ErrorBoundary } from "@/shared/ui/error-boundary";

const App: FC = (): ReactElement => {
  return (
    <ReduxProvider store={appStore}>
      <ErrorBoundary>
        <div className="app-wrapper">
          <Header />
          <Router />
        </div>
      </ErrorBoundary>
    </ReduxProvider>
  );
};

export { App };
