import {
  IonButton,
  IonButtons,
  IonHeader,
  IonListHeader,
  IonPage,
  IonText,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";

import { useDispatch } from "react-redux";

import { DiAndroid, DiApple } from "react-icons/di";
import { BeforeInstallPromptContext } from "../context/InstallWebAppProvider";

interface Props {
  onDismiss: () => (
    data?: string | null | undefined | number,
    role?: string,
  ) => void;
}

export interface CommentFormValues {
  comment: string;
}

const InstallAppModal: React.FC<Props> = ({ onDismiss }) => {
  const onCancel = () => {
    onDismiss();
  };

  const beforeInstallPrompt = useContext(BeforeInstallPromptContext);

  const promptInstall = async () => {
    try {
      await beforeInstallPrompt.event?.prompt();
    } finally {
      beforeInstallPrompt.clearEvent();
    }
  };

  return (
    <IonPage style={{ display: "flex" }}>
      <IonHeader style={{ display: "flex" }}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={onCancel}>
              Cancel
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonListHeader>Install Spyke</IonListHeader>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", marginTop: "5vh" }}>
          <OSContainer>
            <StyledLink href="https://play.google.com/store/apps/details?id=com.spykesocial.frontend&referrer=utm_source%3Dspyke%26utm_medium%3Dweb_app">
              <DiAndroid size={"5rem"} color="white" />
              <h2>Android</h2>
            </StyledLink>
          </OSContainer>

          <OSContainer>
            <StyledLink href="https://testflight.apple.com/join/dispkmdR">
              <DiApple size={"5rem"} color="white" />
              <h2>iOS</h2>
            </StyledLink>
          </OSContainer>
        </div>
        <OSContainer onClick={promptInstall}>
          <img src="pwainstallbutton.png" style={{ width: "30%" }} />
          <h2>Install Web App</h2>
        </OSContainer>
      </div>
    </IonPage>
  );
};

export default InstallAppModal;

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;
const StyledLink = styled.a`
  color: inherit; // inherit color from parent
  text-decoration: none; // remove underline

  &:visited {
    color: inherit; // remove default purple color after visiting the link
  }
  text-align: center;
`;
export const OSContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
  cursor: pointer;
`;

//   //0px
//   ${breakpoint('minimum')`

//   `}

//   //320px
//   ${breakpoint('mobileS')`

//   `}

//   //375px
//   ${breakpoint('mobileM')`

//   `}

//   //425px
//   ${breakpoint('mobileL')`

//   `}

//   //550px

//   ${breakpoint('phablet')`

//   `}

//   //768px
//   ${breakpoint('tablet')`

//   `}

//   //1024px
//   ${breakpoint('laptop')`

//   `}

//   //1250px
//   ${breakpoint('laptopM')`

//   `}

//   //1440px
//   ${breakpoint('laptopL')`

//   `}

//   //2560px
//   ${breakpoint('desktop')`

//   `}
