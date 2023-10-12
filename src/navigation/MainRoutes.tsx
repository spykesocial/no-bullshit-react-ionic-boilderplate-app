import {
  IonContent,
  IonPage,
  IonRouterOutlet,
  useIonRouter,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React, { useRef, useEffect } from "react";
import { Redirect, Route } from "react-router";

import { BackButtonEventDetail, IonRouterOutletCustomEvent } from "@ionic/core";

import { App } from "@capacitor/app";

import { PageContextProvider } from "../components/features/auth/PageContext";
import StickyHeader from "./StickyHeader";

interface Props {}

const MainRoutes: React.FC<Props> = (props) => {
  const pageRef = useRef<IonRouterOutletCustomEvent<unknown>["target"]>(null);

  const router = useIonRouter();

  //react-spring-lightbox exits when the back button is pressed on android browsers.
  useEffect(() => {
    const backButtonHandler = (ev: CustomEvent<BackButtonEventDetail>) => {
      ev.detail.register(-1, () => {
        // image-viewer-close-button is present in the component that uses react spring
        //https://ionicframework.com/docs/developing/hardware-back-button this is a known issue
        //that causes any sort of overylay to not get dismissed by the back button. instead the entire app fkn crashes
        // So if that's open, don't close the app just yet (when image-viewer-close-button is inside the DOM)
        //ONLY WORKS ON ANDROID APK. Not browser. Kinda incredible how android is still being a piece of shit yet again
        //i thought all these OS specific problems would only hapeen in react native ggwp
        if (
          !router.canGoBack() &&
          !document.querySelector("image-viewer-close-button")
        ) {
          App.exitApp();
        }
      });
    };

    //how to handle https://ionicframework.com/docs/developing/hardware-back-button
    document.addEventListener(
      "ionBackButton",
      backButtonHandler as EventListener,
    );

    return () => {
      document.removeEventListener(
        "ionBackButton",
        backButtonHandler as EventListener,
      );
    };
  }, [router]);

  return (
    <PageContextProvider value={{ page: pageRef.current as HTMLElement }}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <IonPage>
              <IonContent>
                <text>bruh route 1</text>
              </IonContent>
            </IonPage>
          </Route>
          <Route exact path="/2">
            <IonPage>
              <IonContent>
                <text>bruh route 2</text>
              </IonContent>
            </IonPage>
          </Route>
          {/* fail safe for wrong urls, redirect to main homepage */}
          <Route exact path="">
            <Redirect to="" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </PageContextProvider>
  );
};

export default MainRoutes;
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
