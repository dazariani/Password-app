import styled from "styled-components";
import iconImg from "../../assets/images/icon-arrow-right.svg";
import iconImgHover from "../../assets/images/icon-arrow-right-hover.svg";

export const Container = styled.div``;
export const Button = styled.input`
  width: 100%;
  background-image: url(${iconImg});
  background-repeat: no-repeat;
  background-position: 73% center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  background-color: ${(props) => props.theme.green};
  padding: 17px 103px;
  @media (min-width: 768px) {
    font-size: 18px;
    padding: 21px 177px;
    background-position: 67% center;
  }
  @media (min-width: 1440px) {
    cursor: pointer;
    background-position: 67% center;
    &:hover {
      background-image: url(${iconImgHover});
      background-color: ${(props) => props.theme.lightBlack};
      border: 1px solid ${(props) => props.theme.green};
      color: ${(props) => props.theme.green};
    }
  }
`;
