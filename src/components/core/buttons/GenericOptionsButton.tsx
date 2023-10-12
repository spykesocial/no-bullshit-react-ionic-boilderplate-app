import { IonLabel } from "@ionic/react";
import { styled } from "styled-components";
import colors from "../../../theme/colors";
import { breakpoint } from "styled-components-breakpoint";

interface OptionProps {
  title: string;
  icon: React.ReactNode;
  onPress: () => any;
}

export const GenericOptionsButton: React.FC<OptionProps> = ({
  title,
  icon,
  onPress,
}) => {
  return (
    <Container onClick={onPress}>
      {icon}
      <div style={{ width: 10 }} />
      <IonLabel
        color={
          title === "Report"
            ? "danger"
            : title === "Delete"
            ? "danger"
            : undefined
        }
      >
        {title}
      </IonLabel>
    </Container>
  );
};

const Container = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  //0px
  ${breakpoint("minimum")`

  `}

  //320px
  ${breakpoint("mobileS")`

  `}

  //375px
  ${breakpoint("mobileM")`

  `}

  //425px
  ${breakpoint("mobileL")`

  `}

  //550px

  ${breakpoint("phablet")`

  `}

  //768px
  ${breakpoint("tablet")`
    &:hover,
    &:focus {
        background-color: ${colors.modalBoxColor}; //change background color to light grey hon hover
    }
  `}

  //1024px
  ${breakpoint("laptop")`

  `}

  //1250px
  ${breakpoint("laptopM")`

  `}

  //1440px
  ${breakpoint("laptopL")`

  `}

  //2560px
  ${breakpoint("desktop")`

  `}
`;
