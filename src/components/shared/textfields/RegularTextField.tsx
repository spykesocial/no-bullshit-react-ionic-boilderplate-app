import React from "react";

import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

import { IonInput, IonItem } from "@ionic/react";
import colors from "../../../theme/colors";

interface Props {
  labelText?: string;
  onInput?: any;
  IonTextInputProps?: React.ComponentProps<typeof IonInput>;
}

const RegularTextField: React.FC<Props> = ({
  labelText,
  onInput,
  IonTextInputProps,
}) => {
  return (
    <CustomIonItem>
      <StyledIonInput
        label={labelText}
        labelPlacement="floating"
        inputMode="text"
        fill="solid"
        color="danger"
        onIonInput={onInput}
        {...IonTextInputProps}
      />
    </CustomIonItem>
  );
};

export default RegularTextField;

const CustomIonItem = styled(IonItem)`
  --background: ${colors.darkGrey};
  border-radius: 1rem;
`;

const StyledIonInput = styled(IonInput)`
  /* background: ${colors.modalBoxColor};
  border-radius: 0.5rem;

  border-width: 1rem; */

  //0px
  ${breakpoint("minimum")`
    font-size: 1rem;

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

  `}

  //1024px
  ${breakpoint("laptop")`
    font-size: 1rem;

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
