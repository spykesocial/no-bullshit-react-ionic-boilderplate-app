import React from "react";

import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

interface Props {
  children: React.ReactNode;
}

const AppText: React.FC<Props> = ({ children, ...otherProps }) => {
  return <TextStyle {...otherProps}>{children}</TextStyle>;
};

export default AppText;

const TextStyle = styled.text`
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
`;
// //0px
// ${breakpoint('minimum')`

// `}

// //320px
// ${breakpoint('mobileS')`

// `}

// //375px
// ${breakpoint('mobileM')`

// `}

// //425px
// ${breakpoint('mobileL')`

// `}

// //550px

// ${breakpoint('phablet')`

// `}

// //768px
// ${breakpoint('tablet')`

// `}

// //1024px
// ${breakpoint('laptop')`

// `}

// //1250px
// ${breakpoint('laptopM')`

// `}

// //1440px
// ${breakpoint('laptopL')`

// `}

// //2560px
// ${breakpoint('desktop')`

// `}
