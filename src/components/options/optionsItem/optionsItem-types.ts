import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
`;
export const Input = styled.input`
  width: 20px;
  height: 20px;
  @media (min-width: 1440px) {
    cursor: pointer;
    accent-color: ${(props) => props.theme.green};
  }
`;
export const Label = styled.label`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
