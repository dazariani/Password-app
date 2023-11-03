import { UseFormRegister, FieldValues } from "react-hook-form";
import {
  Container,
  LabelValueBox,
  Label,
  RangeValue,
  RangeInput,
} from "./charLengthInput-types";

interface Props {
  inputPercent: number;
  setInputPercent: (props: number) => void;
  sliderValue: string;
  setSliderValue: (props: string) => void;
  register: UseFormRegister<FieldValues>;
  isThumbDown: boolean;
  setIsThumbDown: (props: boolean) => void;
}

function CharLenghtInput(props: Props) {
  const {
    inputPercent,
    setInputPercent,
    sliderValue,
    setSliderValue,
    register,
  } = props;

  return (
    <Container>
      <LabelValueBox>
        <Label>Character Length</Label>
        <RangeValue>{sliderValue}</RangeValue>
      </LabelValueBox>
      <RangeInput
        {...register("charLength")}
        $percent={inputPercent}
        max={20}
        min={0}
        value={sliderValue}
        onChange={(e) => {
          let val = (Number(e.target.value) / Number(e.target.max)) * 100;
          setInputPercent(val);
          setSliderValue(e.target.value);
        }}
        type="range"
      />
    </Container>
  );
}

export default CharLenghtInput;
