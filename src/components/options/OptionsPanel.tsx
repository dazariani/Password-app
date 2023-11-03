import OptionsItem from "./optionsItem/OptionsItem";
import styled from "styled-components";
import { PatternProps } from "../../App";
import { UseFormRegister, UseFormWatch, FieldValues } from "react-hook-form";

// type InputProps = {
//   uppercase: string;
//   lowercase: string;
//   numbers: string;
//   symbols: string;
// };

interface Props {
  patternData: PatternProps;
  setPatternData: (props: PatternProps) => void;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

function OptionsPanel(props: Props) {
  const { patternData, setPatternData, register, watch } = props;
  return (
    <Container>
      {patternData.map((item, ind) => {
        return (
          <OptionsItem
            watch={watch}
            register={register}
            key={ind}
            item={item}
            patternData={patternData}
            setPatternData={setPatternData}
          />
        );
      })}
    </Container>
  );
}

export default OptionsPanel;

const Container = styled.div`
  margin-bottom: 32px;
`;
