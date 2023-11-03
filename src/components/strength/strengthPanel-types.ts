import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.darkBlack};
  padding-inline: 16px;
  padding-block: 17px;
  @media (min-width: 768px) {
    height: 72px;
    padding-inline: 32px;
    padding-block: 20px;
  }
`;
export const Title = styled.span`
  color: ${(props) => props.theme.darkGrey};
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
export const StrenghtBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export const StrengthText = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const ColorItemBox = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
`;
