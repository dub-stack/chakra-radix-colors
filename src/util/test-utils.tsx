import React, { FC, ReactElement } from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "../theme";
import { RenderOptions } from "@storybook/addons";
import { matchers } from "@emotion/jest";

const AllTheProviders: FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

expect.extend(matchers);

export * from "@testing-library/react";
export { customRender as render };
