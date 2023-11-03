import { UseFormRegister, FieldValues, UseFormWatch } from "react-hook-form";
import getWindowWidth from "../../custom hooks/useWindowWidth";
import { useEffect, useState } from "react";
import {
  Container,
  Input,
  IconBox,
  CopyBox,
  CopiedNote,
} from "./passwordInput-types";

type Props = {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
};

function PasswordInput(props: Props) {
  const { register, watch } = props;

  const winWidth = getWindowWidth();

  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Make COPIED notification dissapear after 2 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <Container>
      <Input
        placeholder="P4$5W0rD!"
        {...register("password")}
        onKeyDown={(e) => {
          e.preventDefault();
          return false;
        }}
      />
      <CopyBox>
        {winWidth >= 1440 && isCopied && <CopiedNote>COPIED</CopiedNote>}

        <IconBox
          onClick={() => {
            // Copy input value to clipboard
            navigator.clipboard.writeText(watch("password"));
            setIsCopied(true);
          }}
        ></IconBox>
      </CopyBox>
    </Container>
  );
}

export default PasswordInput;
