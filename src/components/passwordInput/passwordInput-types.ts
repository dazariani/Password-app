import styled from "styled-components";
import copyIcon from "../../assets/images/icon-copy.svg";
import copyIconHover from "../../assets/images/icon-copy-hover.svg";

export const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  background-color: ${(props) => props.theme.lightBlack};
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
export const Input = styled.input`
  width: 250%;
  background-color: ${(props) => props.theme.lightBlack};
  color: ${(props) => props.theme.lightGrey};
  padding: 16px 0 16px 16px;
  border: none;
  font-size: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: normal;
  caret-color: transparent;
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    font-size: 32px;
    padding: 19px 0 19px 32px;
  }
`;
export const IconBox = styled.div`
  width: 21px;
  height: 24px;
  background-image: url(${copyIcon});
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.2s ease-in-out;
  @media (min-width: 1440px) {
    &:hover {
      cursor: pointer;
      background-image: url(${copyIconHover});
      transform: scale(1.1);
    }
  }
`;
export const CopyBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
  padding: 16px;
  @media (min-width: 768px) {
    padding: 32px;
  }
`;
export const CopiedNote = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme.green};
`;
