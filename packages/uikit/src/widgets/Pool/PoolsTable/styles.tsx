import styled from "styled-components";
import { Flex } from "../../../components";

export const ActionContainer = styled(Flex)`
  flex-direction: column;
  padding: 16px;
  border: 2px solid ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
  }
export const ActionTitles = styled.div`
  font-weight: 600;
  font-size: 12px;
`;

export const ActionContent = styled(Flex)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

ActionContent.defaultProps = {
  mt: "8px",
};
