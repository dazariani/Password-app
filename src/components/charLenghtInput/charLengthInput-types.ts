import styled from "styled-components";

export const Container = styled.div``;
export const LabelValueBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
export const RangeValue = styled.span`
  font-size: 24px;
  color: ${(props) => props.theme.green};
  font-weight: 700;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const RangeInput = styled.input<{ $percent: number }>`
  -webkit-appearance: none;
  margin-right: 15px;
  width: 100%;
  height: 7px;
  background: ${(props) => props.theme.darkBlack};
  border-radius: 5px;
  background-image: linear-gradient(
    ${(props) => props.theme.green},
    ${(props) => props.theme.green}
  );
  background-size: ${(props) => props.$percent + "%"} 100%;
  background-repeat: no-repeat;
  margin-bottom: 33px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${(props) => props.theme.lightGrey};
    cursor: pointer;
    @media (min-width: 1440px) {
      &:active {
        background-color: ${(props) => props.theme.darkBlack};
        border: 2px solid ${(props) => props.theme.green};
      }
    }
  }
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;
