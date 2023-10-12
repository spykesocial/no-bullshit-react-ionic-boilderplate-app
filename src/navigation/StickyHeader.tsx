import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonToolbar,
  useIonModal,
  useIonRouter,
} from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import React from "react";

import colors from "../theme/colors";
import { BsFillPlusSquareFill, BsSearch } from "react-icons/bs";
import PresentLoginIfRequired from "../helpers/PresentLoginIfRequired";
import { styled } from "styled-components";
import { NavigateToPage } from "../helpers/RoutingFunctions";
import { MdOutlineInstallMobile } from "react-icons/md";
import InstallAppModal from "../components/shared/modals/InstallAppModal";

interface Props {
  hideUploadButton?: boolean;
}

const StickyHeader: React.FC<Props> = ({ hideUploadButton }) => {
  const router = useIonRouter();

  const onPostUploadClick = (e: any) => {
    NavigateToPage(e, router, "/upload");
  };

  const [presentModal, dismissModal] = useIonModal(InstallAppModal, {
    onDismiss: () => dismissModal(),
  });

  const openInstallAppModal = () => {
    presentModal();
  };

  return (
    <StyledIonHeader>
      {/* apple-esque transparency  https://stackoverflow.com/questions/52581088/ionic-4-transparent-transparent-header*/}

      <StyledIonToolbar>
        <IonButtons slot="start">
          <IonButton size="small" href="">
            <img src="spyke.png" style={{ height: "4vh" }} />
          </IonButton>
          {!hideUploadButton && (
            <PresentLoginIfRequired performFunction={onPostUploadClick}>
              <BsFillPlusSquareFill size={"1.5rem"} color={colors.white} />
            </PresentLoginIfRequired>
          )}
        </IonButtons>

        <IonButtons slot="primary">
          <MdOutlineInstallMobile
            size={"1.5rem"}
            color={colors.white}
            style={{ marginRight: 10, cursor: "pointer" }}
            onClick={openInstallAppModal}
          />
        </IonButtons>
        <IonButtons slot="end">
          <IonButton>
            <BsSearch size={"1.5rem"} color={colors.white} />
          </IonButton>
        </IonButtons>
      </StyledIonToolbar>
    </StyledIonHeader>
  );
};

export default StickyHeader;

const StyledIonHeader = styled(IonHeader)`
  background: transparent;
`;

const StyledIonToolbar = styled(IonToolbar)`
  --background: black;
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
