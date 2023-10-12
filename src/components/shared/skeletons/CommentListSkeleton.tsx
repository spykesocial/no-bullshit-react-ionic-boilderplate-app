import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

interface Props {}

const CommentListSkeleton: React.FC<Props> = (props) => {
  return (
    <Box margin={2} sx={{ width: "100%" }}>
      <Grid container spacing={3}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} key={item}>
            <Grid spacing={1} wrap="nowrap">
              <Grid container style={{ display: "flex", alignItems: "center" }}>
                <Skeleton
                  variant="circular"
                  width={25}
                  height={25}
                  sx={{ bgcolor: "grey.900" }}
                />
                <div style={{ width: "10px" }} />
                <Skeleton
                  variant="text"
                  width={50}
                  height={15}
                  sx={{ bgcolor: "grey.900" }}
                />
              </Grid>
              <Grid item xs>
                <Skeleton variant="text" sx={{ bgcolor: "grey.900" }} />
                <Skeleton variant="text" sx={{ bgcolor: "grey.900" }} />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CommentListSkeleton;
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
