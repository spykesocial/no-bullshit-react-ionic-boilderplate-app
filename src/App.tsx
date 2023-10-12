import {
  IonApp,
  IonButton,
  IonContent,
  IonListHeader,
  IonPage,
  IonText,
  setupIonicReact,
} from "@ionic/react";
import { useState, useEffect } from "react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import MainRoutes from "./navigation/MainRoutes";
import { Provider } from "react-redux";
import ReduxStore, { persistedStore } from "./redux/ReduxStore";
import { AppContextProvider } from "./components/features/auth/AppContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

import ApolloClientProvider from "./components/features/apollo/Declarations";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource-variable/maven-pro";
import { BsTools } from "react-icons/bs";
import StickyHeader from "./navigation/StickyHeader";
import { UpdateContextProvider } from "./components/features/update/UpdateContext";
import { ReloadPrompt } from "./components/features/update/ReloadPrompt";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import colors from "./theme/colors";
import InstallWebAppProvider from "./components/shared/context/InstallWebAppProvider";

setupIonicReact({
  //force ionic to use ios mode on all platforms
  mode: "ios",
});

//these have been injected directly into styled components breakpoint
//using patch package cuz its causing type errors
//https://github.com/jameslnewell/styled-components-breakpoint/issues/22
const theme = {
  breakpoints: {
    minimum: 0,
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    phablet: 550,
    tablet: 768,
    tabletL: 900,
    laptop: 1024,
    laptopM: 1250,
    laptopL: 1440,
    desktop: 2560,
  },
};

const App: React.FC = () => {
  //if the under_Maintenance flag is set to true on publicConfig, then Maintenance screen will be rendered
  const MaintenanceModeCheckUrl = "https://api.spyke.social/public/config";
  const [MaintenanceMode, setMaintenanceMode] = useState(false);
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //useeffect to hide app until fonts have loaded
  //https://docs.expo.dev/guides/using-custom-fonts/#a-minimal-working-example
  useEffect(() => {
    fetch(MaintenanceModeCheckUrl, { cache: "no-cache" })
      .then((res) => res.json())
      .then((out) => setMaintenanceMode(out.under_maintenance));
  }, []);

  const muiTheme = createTheme({
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.white,
      },
      text: {
        primary: colors.white,
        secondary: colors.white,
      },
    },
  });

  if (MaintenanceMode)
    return (
      <IonPage>
        <IonListHeader>
          <img src="spyke.png" style={{ height: "4vh" }} />
        </IonListHeader>
        <IonContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
            }}
          >
            <BsTools size={"100px"} />
            <div style={{ height: "20px" }} />
            <IonText>Undergoing Upgrades</IonText>
            <div style={{ height: "5px" }} />
            <IonText>Please check back in a bit</IonText>
          </div>
        </IonContent>
      </IonPage>
    );
  return (
    <UpdateContextProvider>
      {/* <ReloadPrompt /> */}
      <Provider store={ReduxStore}>
        <AppContextProvider>
          <ApolloClientProvider>
            <InstallWebAppProvider>
              <ThemeProvider theme={theme}>
                <MUIThemeProvider theme={muiTheme}>
                  {/* this context holds stuff like username, idtoken and full name and is used to create
                  an account during onboarding. since the onboarding is does using IonModal, the 
                  context provider needs to be wrapper around IonApp 
                  https://github.com/ionic-team/ionic-framework/issues/27546
                  */}
                  <IonApp>
                    {/* redux bruh */}
                    <PersistGate persistor={persistedStore}>
                      <MainRoutes />
                    </PersistGate>
                  </IonApp>
                </MUIThemeProvider>
              </ThemeProvider>
            </InstallWebAppProvider>
          </ApolloClientProvider>
        </AppContextProvider>
      </Provider>
    </UpdateContextProvider>
  );
};

export default App;
