import { IonContent, IonText } from "@ionic/react";
import React, { memo } from "react";
import { BsRobot } from "react-icons/bs";
import TryAgainText from "./TryAgainText";
import colors from "../../../theme/colors";

interface Props {
  onPress: () => void;
  backgroundColor?: string;
}

const ErrorLoadingFeed: React.FC<Props> = ({ onPress, backgroundColor }) => {
  return (
    <IonContent>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <BsRobot name="robot-confused" size={"50%"} color={colors.lightGrey} />
        <IonText>Something went wrong</IonText>

        <TryAgainText onPress={onPress} />
      </div>
    </IonContent>
  );
};

export default memo(ErrorLoadingFeed);
