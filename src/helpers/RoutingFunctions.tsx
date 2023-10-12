import { UseIonRouterResult } from "@ionic/react";

export const NavigateToPage = (
  e: any,
  router: UseIonRouterResult,
  path: string,
) => {
  //https://dev.to/kunal/how-to-stop-child-elements-from-inheriting-parent-element-s-onclick-in-react-583h
  e.stopPropagation();

  //this custom functions job is the check if the path is the same as the current path
  //in such cases we want to prevent the router from pushing the same path uneccessarily
  if (path !== router.routeInfo.pathname) {
    router.push(path);
    return true;
  }
  return false;
};

//curstom onClick wrapper to prevent touches made the parent component from propagating to the child component
interface PreventTouchPropgationWrapperProps {
  children?: React.ReactNode;
  disable?: boolean;
}
export const PreventTouchPropgationWrapper: React.FC<
  PreventTouchPropgationWrapperProps
> = ({ children, disable }) => {
  const onClick = (e: any) => {
    if (disable) return false;
    e.stopPropagation();
  };

  return <div onClick={onClick}>{children}</div>;
};
