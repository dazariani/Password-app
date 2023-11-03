import styled from "styled-components";

export const Wrapper = styled.div``;
export const Container = styled.div`
  max-width: 343px;
  margin-inline: auto;
  padding-block: 63px;
  @media (min-width: 768px) {
    max-width: 540px;
    padding-block: 133px 196px;
  }
`;
export const AppTitle = styled.h1`
  color: ${(props) => props.theme.darkGrey};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const OptionsContainer = styled.div`
  background: ${(props) => props.theme.lightBlack};
  padding: 16px;
  @media (min-width: 768px) {
    padding: 32px;
  }
`;
export const Form = styled.form``;
