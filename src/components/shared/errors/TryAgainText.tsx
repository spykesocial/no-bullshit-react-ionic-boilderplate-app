import { IonLoading, IonText, useIonLoading } from "@ionic/react";
import React, { useState } from "react";

interface Props {
  fontSize?: number;
  fontColor?: string;
  onPress: () => void;
}

const TryAgainText: React.FC<Props> = ({ fontSize, fontColor, onPress }) => {
  const [isSpinLoading, setIsSpinLoading] = useState(false);
  const [present, dismiss] = useIonLoading();

  const onPressStartSpinner = () => {
    setIsSpinLoading(true);
    present({
      message: "Retrying",
      duration: 3000,
    });
    onPress();
  };

  return (
    <div>
      <div onClick={onPressStartSpinner}>
        <IonText style={{ textDecoration: "underline" }}>Try again</IonText>
      </div>
    </div>
  );
};

export default TryAgainText;
