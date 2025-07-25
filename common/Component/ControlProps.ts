import { StyleProp, ViewStyle } from "react-native";

export type ControlProps<A> = {
  value?: A
  onChange?: (val: A | undefined) => void
  onBlur?: () => void
}

export type ButtonProps = {
  label: string;
  disabled?: boolean
  containerStyle?: StyleProp<ViewStyle>;
  onClickButtonEvent?: () => void
};

export type SelectOption = {
  label: string
  value: string
}