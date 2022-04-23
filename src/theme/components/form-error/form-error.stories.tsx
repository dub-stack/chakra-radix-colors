import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { chakra, PropsOf, useMultiStyleConfig } from "@chakra-ui/system";
import {
  FormControlOptions,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  useFormControl,
  Container,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / FormError",
  component: FormControl,
} as ComponentMeta<typeof FormControl>;

type OmittedTypes = "disabled" | "required" | "readOnly" | "size";

type InputProps = Omit<PropsOf<"input">, OmittedTypes> &
  FormControlOptions & {
    // Input component as `size` by default, so it resolves to `never`
    // Omitted it from types in Line 16 and added back here.
    size?: string;
  };

// Create an input that consumes useFormControl
type Props = { focusBorderColor?: string; errorBorderColor?: string };

const Input = React.forwardRef<HTMLInputElement, InputProps & Props>(
  (props, ref) => {
    const styles = useMultiStyleConfig("Input", props);
    const inputProps = useFormControl<HTMLInputElement>(props);
    return <chakra.input ref={ref} __css={styles.field} {...inputProps} />;
  }
);

const _InputExample = () => (
  <Container maxW="max-content">
    <FormControl id="first-name" isRequired isInvalid>
      <FormErrorMessage>
        <FormErrorIcon />
        Your First name is invalid
      </FormErrorMessage>
    </FormControl>
  </Container>
);
export const InputExample: ComponentStory<typeof _InputExample> = (args) => {
  return (
    <Decorators
      newComponent={<_InputExample />}
      defaultComponent={<_InputExample />}
    />
  );
};
