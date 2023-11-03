import { ColorItem } from "./strengthBoxItem-types";
interface Props {
  isChecked: boolean;
  color: string;
}

function StrengthBoxItem(props: Props) {
  const { isChecked, color } = props;
  return <ColorItem $color={color} $isChecked={isChecked}></ColorItem>;
}

export default StrengthBoxItem;
