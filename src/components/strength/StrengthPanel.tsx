import StrengthBoxItem from "./strengthBoxItem/StrengthBoxItem";
import { PatternProps } from "../../App";
import {
  Wrapper,
  Container,
  Title,
  StrenghtBox,
  StrengthText,
  ColorItemBox,
} from "./strengthPanel-types";

interface Props {
  patternData: PatternProps;
  color: string;
  level: string;
}

function StrengthPanel(props: Props) {
  const { patternData, color, level } = props;

  return (
    <Wrapper>
      <Container>
        <Title>STRENGTH</Title>
        <StrenghtBox>
          <StrengthText>{level}</StrengthText>
          <ColorItemBox>
            {patternData.map((pat, ind) => {
              const { isChecked } = pat;
              return (
                <StrengthBoxItem
                  key={ind}
                  isChecked={isChecked}
                  color={color}
                ></StrengthBoxItem>
              );
            })}
          </ColorItemBox>
        </StrenghtBox>
      </Container>
    </Wrapper>
  );
}

export default StrengthPanel;
