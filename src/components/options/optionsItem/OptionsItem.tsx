import { PatternProps } from "../../../App";
import { UseFormRegister, UseFormWatch, FieldValues } from "react-hook-form";
import { Container, Input, Label } from "./optionsItem-types";

interface Props {
  item: {
    name: string;
    option: string;
    isChecked: boolean;
  };
  patternData: PatternProps;
  setPatternData: (props: PatternProps) => void;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

function OptionsItem(props: Props) {
  const { item, patternData, setPatternData, register } = props;

  return (
    <Container>
      <Input
        onClick={() => {
          item.isChecked = !item.isChecked;
          setPatternData([...patternData]);
        }}
        type="checkbox"
        {...register(item.name)}
      />
      <Label htmlFor={item.name}>{item.option}</Label>
    </Container>
  );
}

export default OptionsItem;
