import React, { FC, ReactElement, useEffect } from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "../theme";
import { RenderOptions } from "@storybook/addons";
import { matchers } from "@emotion/jest";
import { Button, useColorMode } from "@chakra-ui/react";

const ColorModeButtons = () => {
  const { toggleColorMode, setColorMode } = useColorMode();
  return (
    <>
      <Button onClick={toggleColorMode} data-testid="toggle-color-mode" />{" "}
      <Button
        onClick={() => setColorMode("light")}
        data-testid="reset-color-mode"
      />
    </>
  );
};

const AllTheProviders: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <>
        <ColorModeButtons />
        {children}
      </>
    </ChakraProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

expect.extend(matchers);

export * from "@testing-library/react";
export { customRender as render };
