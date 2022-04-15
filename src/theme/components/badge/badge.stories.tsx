import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const _Basic = () => <Badge>Success</Badge>;
export const Basic: ComponentStory<typeof Badge> = (args) => {
  return <Decorators newComponent={<_Basic />} defaultComponent={<_Basic />} />;
};

const _SolidBadge = () => {
  return (
    <React.Fragment>
      {["gray", "green", "red", "orange", "purple", "teal", "sky", "mint"].map(
        (colorScheme) => (
          <Badge
            key={colorScheme}
            colorScheme={colorScheme}
            variant="solid"
            mr={2}
          >
            {colorScheme}
          </Badge>
        )
      )}
    </React.Fragment>
  );
};
export const SolidBadge: ComponentStory<typeof Badge> = (args) => {
  return (
    <Decorators
      newComponent={<_SolidBadge />}
      defaultComponent={<_SolidBadge />}
    />
  );
};

const _SubtleBadges = () => (
  <React.Fragment>
    {["gray", "green", "red", "orange", "purple", "teal", "sky", "mint"].map(
      (colorScheme) => (
        <Badge key={colorScheme} colorScheme={colorScheme} mr={2}>
          {colorScheme}
        </Badge>
      )
    )}
  </React.Fragment>
);
export const SubtleBadges: ComponentStory<typeof Badge> = (args) => {
  return (
    <Decorators
      newComponent={<_SubtleBadges />}
      defaultComponent={<_SubtleBadges />}
    />
  );
};

const _OutlineBadges = () => (
  <React.Fragment>
    {["gray", "green", "red", "orange", "purple", "teal", "sky", "mint"].map(
      (colorScheme) => (
        <Badge
          key={colorScheme}
          colorScheme={colorScheme}
          variant="outline"
          mr={2}
        >
          {colorScheme}
        </Badge>
      )
    )}
  </React.Fragment>
);
export const OutlineBadges: ComponentStory<typeof Badge> = (args) => {
  return (
    <Decorators
      newComponent={<_OutlineBadges />}
      defaultComponent={<_OutlineBadges />}
    />
  );
};
