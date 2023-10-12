import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import React from "react";

import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import GoogleAuthentication from "./google-auth/GoogleAuthentication";
import OnboardingModal from "./onboarding/OnboardingModal";
import colors from "../../../theme/colors";

interface Props {
  onDismiss: () => (
    data?: string | null | undefined | number,
    role?: string,
  ) => void;
}

const AuthModal: React.FC<Props> = ({ onDismiss }) => {
  const onCancel = () => {
    onDismiss();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={onCancel}>
              Cancel
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IonText style={{ paddingTop: 10, paddingBottom: 10 }}>or</IonText>
          <IonButton shape="round" color="light" onClick={() => null}>
            Create Account
          </IonButton>
        </div>

        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: colors.grey,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <IonText
            style={{
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Already have an account?
          </IonText>
          <IonButton
            shape="round"
            fill="outline"
            color="light"
            onClick={() => null}
          >
            Login
          </IonButton>
        </div>
      </div>
    </IonPage>
  );
};

export default AuthModal;

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
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
