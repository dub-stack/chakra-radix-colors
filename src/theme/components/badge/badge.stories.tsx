import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge, Box } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const _Basic = () => <Badge>Success</Badge>;
export const Basic: ComponentStory<typeof Badge> = (args) => {
  return <Decorators newComponent={<_Basic />} oldComponent={<_Basic />} />;
};

const _SolidBadge = () => {
  return (
    <Box display="grid">
      <Box>
        {[
          "gray",
          "green",
          "red",
          "orange",
          "purple",
          "teal",
          "sky",
          "mint",
        ].map((colorScheme) => (
          <Badge
            key={colorScheme}
            colorScheme={colorScheme}
            variant="solid"
            mr={2}
          >
            {colorScheme}
          </Badge>
        ))}
      </Box>
      <Box>
        {[
          "grayDark",
          "greenDark",
          "redDark",
          "orangeDark",
          "purpleDark",
          "tealDark",
          "skyDark",
          "mintDark",
        ].map((colorScheme) => (
          <Badge
            key={colorScheme}
            colorScheme={colorScheme}
            variant="solid"
            mr={2}
          >
            {colorScheme.replace("Dark", "")}
          </Badge>
        ))}
      </Box>
    </Box>
  );
};
export const SolidBadge: ComponentStory<typeof Badge> = (args) => {
  return (
    <Decorators newComponent={<_SolidBadge />} oldComponent={<_SolidBadge />} />
  );
};

const _SubtleBadges = () => (
  <Box display="grid">
    <Box>
      {["gray", "green", "red", "orange", "purple", "teal", "sky", "mint"].map(
        (colorScheme) => (
          <Badge key={colorScheme} colorScheme={colorScheme} mr={2}>
            {colorScheme}
          </Badge>
        )
      )}
    </Box>
    <Box>
      {[
        "grayDark",
        "greenDark",
        "redDark",
        "orangeDark",
        "purpleDark",
        "tealDark",
        "skyDark",
        "mintDark",
      ].map((colorScheme) => (
        <Badge key={colorScheme} colorScheme={colorScheme} mr={2}>
          {colorScheme.replace("Dark", "")}
        </Badge>
      ))}
    </Box>
  </Box>
);
export const SubtleBadges: ComponentStory<typeof Badge> = (args) => {
  return (
    <Decorators
      newComponent={<_SubtleBadges />}
      oldComponent={<_SubtleBadges />}
    />
  );
};

const _OutlineBadges = () => (
  <Box display="grid">
    <Box>
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
    </Box>
    <Box>
      {[
        "grayDark",
        "greenDark",
        "redDark",
        "orangeDark",
        "purpleDark",
        "tealDark",
        "skyDark",
        "mint",
      ].map((colorScheme) => (
        <Badge
          key={colorScheme}
          colorScheme={colorScheme}
          variant="outline"
          mr={2}
        >
          {colorScheme.replace("Dark", "")}
        </Badge>
      ))}
    </Box>
  </Box>
);
export const OutlineBadges: ComponentStory<typeof Badge> = (args) => {
  return (
    <Decorators
      newComponent={<_OutlineBadges />}
      oldComponent={<_OutlineBadges />}
    />
  );
};
