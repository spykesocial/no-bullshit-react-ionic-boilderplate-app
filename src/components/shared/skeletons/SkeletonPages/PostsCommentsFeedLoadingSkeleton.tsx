import { Box, Card, CardHeader, Skeleton } from "@mui/material";
import React from "react";

import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import GenericPostSkeleton from "../GenericPostSkeleton";
import CommentListSkeleton from "../CommentListSkeleton";
import { useWindowWidth } from "@react-hook/window-size";

interface Props {}

const PostCommentsFeedLoadingSkeleton: React.FC<Props> = (props) => {
  const windowWidth = useWindowWidth();

  return (
    <Container>
      <GenericPostSkeleton />
      {windowWidth > 768 && <CommentListSkeleton />}
    </Container>
  );
};

export default PostCommentsFeedLoadingSkeleton;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
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
