import { useIonModal } from "@ionic/react";
import React, { createContext, useCallback } from "react";
import AuthModal from "./AuthModal";

import { useAppSelector } from "../../../redux/ReduxStore";
import { useSelector } from "react-redux";

interface IPageContext {
  // used for ion presentingElement
  page: HTMLElement | undefined;

  /**
   * @returns true if login dialog was presented
   */
  presentLoginIfNeeded: () => boolean;
}

export const PageContext = createContext<IPageContext>({
  page: undefined,
  presentLoginIfNeeded: () => false,
});

interface PageContextProviderProps {
  value: Pick<IPageContext, "page">;
  children: React.ReactNode;
}

export function PageContextProvider({
  value,
  children,
}: PageContextProviderProps) {
  const [presentLogin, onDismissLogin] = useIonModal(AuthModal, {
    onDismiss: (data: string, role: string) => onDismissLogin(data, role),
  });

  // const loggedInUserStatus = useSelector(userLoggedInStatusSelector);

  const loggedInUserStatus = true;
  const presentLoginIfNeeded = useCallback(() => {
    if (loggedInUserStatus === true) return false;
    presentLogin({ presentingElement: value.page });
    return true;
  }, [presentLogin, value.page]);

  return (
    <PageContext.Provider
      value={{
        ...value,
        presentLoginIfNeeded,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
