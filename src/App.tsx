import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import PasswordInput from "./components/passwordInput/PasswordInput";
import CharLenghtInput from "./components/charLenghtInput/CharLenghtInput";
import StrengthPanel from "./components/strength/StrengthPanel";
import OptionsPanel from "./components/options/OptionsPanel";
import InputBtn from "./components/button/InputBtn";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import {
  Wrapper,
  Container,
  AppTitle,
  OptionsContainer,
  Form,
} from "./app-types";

// Types
export type PatternProps = {
  name: string;
  option: string;
  isChecked: boolean;
}[];

type BoxDataProps = {
  boxLevel: string;
  boxColor: string;
};

const patternOptions: PatternProps = [
  {
    name: "uppercase",
    option: "Include Uppercase Letters",
    isChecked: false,
  },
  {
    name: "lowercase",
    option: "Include Lowercase Letters",
    isChecked: false,
  },
  {
    name: "numbers",
    option: "Include Numbers",
    isChecked: false,
  },
  {
    name: "symbols",
    option: "Include Symbols",
    isChecked: false,
  },
];

interface ThemeProps {
  lightGrey: string;
  darkGrey: string;
  lightBlack: string;
  darkBlack: string;
  red: string;
  green: string;
  orange: string;
  yellow: string;
}

// Pattern options
const UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerChars = "abcdefghijklmnopqrstuvwxyz";
const Number = "01234567890123456789";
const Symbols = "!@#$%&^?!@#$%&^?";

function App() {
  const [patternData, setPatternData] = useState<PatternProps>(patternOptions);
  const [patternNum, setPatternNum] = useState<number>(0);
  const [boxData, setBoxData] = useState<BoxDataProps>({
    boxLevel: "",
    boxColor: "none",
  });
  const [sliderValue, setSliderValue] = useState<string>("0");
  const [inputPercent, setInputPercent] = useState<number>(0);
  const [isThumbDown, setIsThumbDown] = useState<boolean>(false);

  const { register, handleSubmit, watch, setValue } = useForm<FieldValues>();
  // const { errors } = formState;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // Generate and set password according to selected options
    let password = "";
    let passwordPattern = "";
    if (data.uppercase) {
      passwordPattern += UpperChars;
    }
    if (data.lowercase) {
      passwordPattern += LowerChars;
    }
    if (data.numbers) {
      passwordPattern += Number;
    }
    if (data.symbols) {
      passwordPattern += Symbols;
    }
    for (let i = 0; i < ~~sliderValue; i++) {
      let charIndex = Math.floor(Math.random() * passwordPattern.length);
      if (passwordPattern !== "") {
        password = password + passwordPattern[charIndex];
      }
    }
    setValue("password", password);
  };

  const defaultTheme: ThemeProps = {
    lightGrey: "rgb(230, 229, 234)",
    darkGrey: "rgb(128, 124, 146)",
    lightBlack: "rgb(36, 35, 44)",
    darkBlack: "rgb(24, 23, 31)",
    red: "rgb(246, 74, 74)",
    green: "rgb(164, 255, 175)",
    orange: "rgb(251, 124, 88)",
    yellow: "rgb(248, 205, 101)",
  };

  // Count how many option is checked
  let isCheckedNum = 0;
  useEffect(() => {
    patternData.forEach((pattern) => {
      if (pattern.isChecked) {
        isCheckedNum += 1;
      }
    });
    setPatternNum(isCheckedNum);
  }, [patternData]);

  // Set box color and level data according to checked options count
  useEffect(() => {
    switch (patternNum) {
      case 1:
        setBoxData({
          boxLevel: "TOO WEAK!",
          boxColor: "rgb(246, 74, 74)",
        });
        break;
      case 2:
        setBoxData({
          boxLevel: "WEAK",
          boxColor: "rgb(251, 124, 88)",
        });
        break;
      case 3:
        setBoxData({
          boxLevel: "MEDIUM",
          boxColor: "rgb(248, 205, 101)",
        });
        break;
      case 4:
        setBoxData({
          boxLevel: "STRONG",
          boxColor: "rgb(164, 255, 175)",
        });
        break;
      default:
        setBoxData({
          boxLevel: "",
          boxColor: "none",
        });
        break;
    }
  }, [patternNum]);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HelmetProvider>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap"
            rel="stylesheet"
          />
        </HelmetProvider>
        <Wrapper>
          <Container>
            <AppTitle>Password Generator</AppTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <PasswordInput watch={watch} register={register} />
              <OptionsContainer>
                <CharLenghtInput
                  isThumbDown={isThumbDown}
                  setIsThumbDown={setIsThumbDown}
                  inputPercent={inputPercent}
                  setInputPercent={setInputPercent}
                  sliderValue={sliderValue}
                  setSliderValue={setSliderValue}
                  register={register}
                />

                <OptionsPanel
                  watch={watch}
                  register={register}
                  patternData={patternData}
                  setPatternData={setPatternData}
                />
                <StrengthPanel
                  patternData={patternData}
                  color={boxData.boxColor}
                  level={boxData.boxLevel}
                />
                <InputBtn />
              </OptionsContainer>
            </Form>
          </Container>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
