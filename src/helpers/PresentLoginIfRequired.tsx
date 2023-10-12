import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IonButton, useIonModal } from "@ionic/react";
import AuthModal from "../components/features/auth/AuthModal";

import colors from "../theme/colors";

interface Props {
  children: React.ReactNode;
  performFunction: any;
}

const PresentLoginIfRequired = ({ children, performFunction }: Props) => {
  const loggedInUserStatus = true;

  const [presentLogin, onDismissLogin] = useIonModal(AuthModal, {
    onDismiss: (data: string, role: string) => onDismissLogin(data, role),
  });

  // function that checks the value
  const checkAndProceed = (e: any) => {
    if (!loggedInUserStatus) {
      presentLogin(); // present the AuthModal modal
    } else {
      performFunction(e); // call the provided function
    }
  };

  return <IonButton onClick={checkAndProceed}>{children}</IonButton>;
};

export default PresentLoginIfRequired;
