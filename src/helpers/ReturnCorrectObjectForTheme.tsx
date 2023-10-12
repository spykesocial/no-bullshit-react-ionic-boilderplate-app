//this reusable helper function will return whatever object is passed on it based on the windowWidth it receives

interface Props {
  windowWidth: number;
  minimumReturn: any;
  mobileSReturn: any;
  mobileMReturn: any;
  mobileLReturn: any;
  phabletReturn: any;
  tabletReturn: any;
  laptopReturn: any;
  laptopMReturn: any;
  laptopLReturn: any;
  desktopReturn: any;
}

//destructure the props
const ReturnCorrectObjectForGivenScreenWidthFunction = ({
  windowWidth,
  minimumReturn,
  mobileSReturn,
  mobileMReturn,
  mobileLReturn,
  phabletReturn,
  tabletReturn,
  laptopReturn,
  laptopMReturn,
  laptopLReturn,
  desktopReturn,
}: Props) => {
  if (windowWidth < 320) return minimumReturn;
  else if (windowWidth < 375) return mobileSReturn;
  else if (windowWidth < 425) return mobileMReturn;
  else if (windowWidth < 550) return mobileLReturn;
  else if (windowWidth < 768) return phabletReturn;
  else if (windowWidth < 1024) return tabletReturn;
  else if (windowWidth < 1250) return laptopReturn;
  else if (windowWidth < 1440) return laptopMReturn;
  else if (windowWidth < 2560) return laptopLReturn;
  else return desktopReturn;
};

export default ReturnCorrectObjectForGivenScreenWidthFunction;
