import { Box, Card, CardHeader, Skeleton } from "@mui/material";
import React from "react";

import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

interface Props {}

const GroupInfoMobileSkeleton: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        marginRight: 0.5,
        marginBottom: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Skeleton
            variant="circular"
            width={100}
            height={100}
            sx={{ bgcolor: "grey.900", marginRight: "3%" }}
          />
          <Box
            sx={{
              pt: 0.5,
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <Skeleton width={"30%"} sx={{ bgcolor: "grey.900" }} />
            <Skeleton width={"50%"} sx={{ bgcolor: "grey.900" }} />
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default GroupInfoMobileSkeleton;
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
