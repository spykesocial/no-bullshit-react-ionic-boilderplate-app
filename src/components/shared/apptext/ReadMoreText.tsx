import { useCallback, useState } from "react";
import MarkdownAppText from "./MarkdownAppText";
import { PreventTouchPropgationWrapper } from "../../../helpers/RoutingFunctions";
import { useIonRouter } from "@ionic/react";
import { styled } from "styled-components";
import colors from "../../../theme/colors";

interface Props {
  children: string;

  maxLength?: number;
  //any function that can be run after readMoreIs clicked
  //such as navigating to the single post page
  afterReadMoreOnClick: () => void;
}

const ReadMoreText: React.FC<Props> = ({ children, afterReadMoreOnClick }) => {
  const text = children;
  const router = useIonRouter();

  //if the post is rendered inside the single post page, the route will be /p/:id
  //in such cases the isReadMore state is set to true by default
  const [isReadMore, setIsReadMore] = useState(
    router.routeInfo.pathname.includes("/p/"),
  );

  const shouldReadMoreButtonShow = () => {
    if (isReadMore) return false;

    if (router.routeInfo.pathname.includes("/p/")) {
      return false;
    }
  };

  const toggleReadMore = (mouseClick: React.MouseEvent) => {
    mouseClick.stopPropagation();

    mouseClick.preventDefault();
    if (isReadMore === false) setIsReadMore(!isReadMore);
    else if (isReadMore === true) afterReadMoreOnClick();
  };

  return (
    <PreventTouchPropgationWrapper>
      <div onClick={toggleReadMore} style={{ paddingBottom: 10 }}>
        <MarkdownAppText>{text}</MarkdownAppText>
      </div>

      <ReadMoreButton isReadMore={isReadMore} onClick={toggleReadMore}>
        <text>Read More</text>
      </ReadMoreButton>
    </PreventTouchPropgationWrapper>
  );
};

interface LengthLimitedTextContainerProps {
  isReadMore: boolean;
}

const LengthLimitedTextContainer = styled.div<LengthLimitedTextContainerProps>`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isReadMore ? "auto" : "3")};
  -webkit-box-orient: vertical;
  max-height: ${(props) => (props.isReadMore ? "none" : "60px")};
`;

const ReadMoreButton = styled.div<LengthLimitedTextContainerProps>`
  display: ${(props) => (props.isReadMore ? "none" : "flex")};
  color: ${colors.paleBlue};
  &:hover {
    text-decoration: underline;
  }
`;

export default ReadMoreText;
