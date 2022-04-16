import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Badge",
};

const _SolidBadge = () => {
  return (
    <React.Fragment>
      {["_gray", "gray", "red", "green", "blue", "sky", "amber"].map(
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
    {["_gray", "gray", "red", "green", "blue", "sky", "amber"].map(
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
    {["_gray", "gray", "red", "green", "blue", "sky", "amber"].map(
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
