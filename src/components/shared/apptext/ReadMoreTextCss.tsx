import { useCallback, useEffect, useRef, useState } from "react";
import MarkdownAppText from "./MarkdownAppText";
import { PreventTouchPropgationWrapper } from "../../../helpers/RoutingFunctions";
import { useIonRouter } from "@ionic/react";
import { styled } from "styled-components";
import colors from "../../../theme/colors";

interface Props {
  children: any;

  maxLength?: number;
  //any function that can be run after readMoreIs clicked
  //such as navigating to the single post page
  afterReadMoreOnClick: () => void;
}

const ReadMoreTextCss: React.FC<Props> = ({
  children,
  afterReadMoreOnClick,
}) => {
  const text = children;
  const router = useIonRouter();

  const containerRef = useRef<HTMLDivElement>(null);

  const [readMoreButtonShown, setReadMoreButtonShown] =
    useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (container == null) return;

    const resizeObserver = new ResizeObserver(() => {
      const isOverflowing = container.scrollHeight > container.clientHeight;
      setReadMoreButtonShown(isOverflowing);
    });

    resizeObserver.observe(container);

    // Clean up function
    return () => {
      resizeObserver.unobserve(container);
    };
  }, [text]);
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

    // Add this check to hide the "Read More" button for short texts
    if (text.length <= 10) {
      return false;
    }

    return true;
  };

  const toggleReadMore = (e: any) => {
    if (isReadMore === false) setIsReadMore(!isReadMore);
    else if (isReadMore === true) afterReadMoreOnClick();
  };

  return (
    <PreventTouchPropgationWrapper disable={isReadMore}>
      <div onClick={toggleReadMore} style={{ paddingBottom: 10 }}>
        <LengthLimitedTextContainer
          isReadMore={isReadMore}
          ref={containerRef}
          shouldReadMoreButtonShow={shouldReadMoreButtonShow}
        >
          <MarkdownAppText>{text}</MarkdownAppText>
        </LengthLimitedTextContainer>
      </div>

      {readMoreButtonShown && (
        <ReadMoreButton
          isReadMore={isReadMore}
          onClick={toggleReadMore}
          shouldReadMoreButtonShow={shouldReadMoreButtonShow}
        >
          <text>Read More</text>
        </ReadMoreButton>
      )}
    </PreventTouchPropgationWrapper>
  );
};

interface LengthLimitedTextContainerProps {
  isReadMore: boolean;
  shouldReadMoreButtonShow: () => boolean;
}

const LengthLimitedTextContainer = styled.div<LengthLimitedTextContainerProps>`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isReadMore ? "auto" : "2")};
  -webkit-box-orient: vertical;
  max-height: ${(props) => (props.isReadMore ? "none" : "60px")};
`;

const ReadMoreButton = styled.div<LengthLimitedTextContainerProps>`
  display: ${(props) => (props.isReadMore ? "none" : "flex")};
  color: ${colors.white};
  font-weight: bold;
  background-color: ${colors.jodelGrey};
  border-radius: 10rem;
  padding: 3px;
  font-size: 0.7rem;
  max-width: max-content;
  border: 0.1rem solid;
  transition: ease-in-out 0.1s;
  &:hover {
    border-color: ${colors.primaryAccent};
    color: ${colors.primaryAccent};
  }
`;

export default ReadMoreTextCss;
