import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Breadcrumb",
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const _Default = () => (
  <BrowserRouter>
    <Breadcrumb spacing="4">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/home" replace>
          Breadcrumb 1
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Breadcrumb 2</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Breadcrumb 3</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </BrowserRouter>
);
export const Default: ComponentStory<typeof Breadcrumb> = (args) => {
  return (
    <Decorators newComponent={<_Default />} defaultComponent={<_Default />} />
  );
};

const _Separator = () => (
  <Breadcrumb separator=">">
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">About</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="#">Current</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
export const Seperator: ComponentStory<typeof Breadcrumb> = (args) => {
  return (
    <Decorators
      newComponent={<_Separator />}
      defaultComponent={<_Separator />}
    />
  );
};

const _SeparatorV2 = () => (
  <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.300" />}>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="/about">About</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
export const SeparatorV2: ComponentStory<typeof Breadcrumb> = (args) => {
  return (
    <Decorators
      newComponent={<_SeparatorV2 />}
      defaultComponent={<_SeparatorV2 />}
    />
  );
};
