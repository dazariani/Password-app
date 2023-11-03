import styled from "styled-components";

export const ColorItem = styled.div<{ $isChecked: boolean; $color: string }>`
  width: 10px;
  height: 28px;
  border: ${(props) =>
    props.$isChecked ? "none" : `2px solid ${props.theme.lightGrey}`};
  background-color: ${(props) => (props.$isChecked ? props.$color : "none")};
  order: ${(props) => (props.$isChecked ? -10 : 0)};
`;
