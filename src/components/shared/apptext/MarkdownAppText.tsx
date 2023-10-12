import React, { memo } from "react";

import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import { PreventTouchPropgationWrapper } from "../../../helpers/RoutingFunctions";
import style from "./markdown-styles.module.css";

import ReactMarkdown from "react-markdown";
import colors from "../../../theme/colors";
import { IonText } from "@ionic/react";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

interface Props {
  children: any;
}

const MarkdownAppText: React.FC<Props> = ({ children }) => {
  return (
    <ReactMarkdown
      //https://github.com/remarkjs/react-markdown/issues/240
      children={children.replace(/(?<=\n)(?![*-])\n/gi, "&nbsp;\n ")}
      remarkPlugins={[remarkBreaks, remarkGfm]}
      remarkRehypeOptions={{}}
      components={{
        a: ({ node, ...props }) => (
          <a
            {...props}
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{ color: colors.brightYellow, fontSize: "0.8rem" }}
            target="_blank"
          />
        ),
        p: ({ node, ...props }) => {
          return <StyledIonText>{props.children}</StyledIonText>;
        },
        body: ({ node, ...props }) => {
          return <StyledIonText>{props.children}</StyledIonText>;
        },
        th: ({ node, ...props }) => {
          return (
            <th
              {...props}
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "white",
              }}
            />
          );
        },

        td: ({ node, ...props }) => {
          return (
            <td
              {...props}
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "white",
                padding: 5,
              }}
            />
          );
        },

        tr: ({ node, ...props }) => {
          return (
            <tr
              {...props}
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "white",
              }}
            />
          );
        },
        img: ({ node, ...props }) => {
          return <StyledMarkdownImage {...props} />;
        },

        code: ({ node, ...props }) => {
          return (
            <code
              {...props}
              style={{
                color: "white",
                backgroundColor: colors.darkGrey,
              }}
            />
          );
        },
      }}
    />
  );
};

export default memo(MarkdownAppText);

const StyledIonText = styled.text`
  font-family: "Poppins";
  font-size: 0.9rem;
`;

const StyledMarkdownImage = styled.img`
  //0px
  ${breakpoint("minimum")`  
      max-width: 80%;

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

  `}

  //1250px
  ${breakpoint("laptopM")`

  `}

  //1440px
  ${breakpoint("laptopL")`
      max-width: 45%;
  `}

  //2560px
  ${breakpoint("desktop")`

  `}
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
