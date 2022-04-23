import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Button,
  ButtonGroup,
  IconButton,
  HStack,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import {
  ArrowForwardIcon,
  ChevronDownIcon,
  EmailIcon,
  PhoneIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { MdBuild, MdCall } from "react-icons/md";
import { BeatLoader } from "react-spinners";

export default {
  title: "Components / Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const _Solid = (props: { colors: string[] }) => (
  <Box display="grid">
    <Box>
      {props.colors.map((color) => (
        <Button key={color} colorScheme={color}>
          Button
        </Button>
      ))}
    </Box>
    <Box>
      {props.colors.map((color) => (
        <Button key={color} colorScheme={color} disabled>
          Button
        </Button>
      ))}
    </Box>
  </Box>
);
export const Solid: ComponentStory<typeof Button> = (args) => {
  return (
    <Decorators
      newComponent={
        <_Solid
          colors={["_gray", "gray", "red", "green", "blue", "sky", "amber"]}
        />
      }
      defaultComponent={
        <_Solid colors={["gray", "red", "green", "blue", "cyan", "yellow"]} />
      }
    />
  );
};

const _Ghost = (props: { colors: string[] }) => (
  <>
    {props.colors.map((color) => (
      <Button key={color} colorScheme={color} variant="ghost">
        Button
      </Button>
    ))}
  </>
);
export const Ghost: ComponentStory<typeof Button> = (args) => {
  return (
    <Decorators
      newComponent={
        <_Ghost
          colors={["_gray", "gray", "red", "green", "blue", "sky", "amber"]}
        />
      }
      defaultComponent={
        <_Ghost colors={["gray", "red", "green", "blue", "cyan", "yellow"]} />
      }
    />
  );
};

const _Outline = (props: { colors: string[] }) => (
  <Box display="grid">
    <Box>
      {props.colors.map((color) => (
        <Button key={color} colorScheme={color} variant="outline">
          Button
        </Button>
      ))}
    </Box>
    <Box>
      {props.colors.map((color) => (
        <Button key={color} colorScheme={color + "Dark"} variant="outline">
          Button
        </Button>
      ))}
    </Box>
  </Box>
);
export const Outline: ComponentStory<typeof Button> = (args) => {
  return (
    <Decorators
      newComponent={
        <_Outline
          colors={["_gray", "gray", "red", "green", "blue", "sky", "amber"]}
        />
      }
      defaultComponent={
        <_Outline colors={["gray", "red", "green", "blue", "cyan", "yellow"]} />
      }
    />
  );
};

const _Link = (props: { colors: string[] }) => (
  <>
    {props.colors.map((color) => (
      <Button key={color} colorScheme={color} variant="link">
        Button
      </Button>
    ))}
  </>
);
export const Link: ComponentStory<typeof Button> = (args) => {
  return (
    <Decorators
      newComponent={
        <_Link
          colors={["_gray", "gray", "red", "green", "blue", "sky", "amber"]}
        />
      }
      defaultComponent={
        <_Link colors={["gray", "red", "green", "blue", "cyan", "yellow"]} />
      }
    />
  );
};

const _withVariants = () => (
  <HStack spacing="24px">
    <Button colorScheme="teal" variant="solid">
      Button
    </Button>
    <Button colorScheme="teal" variant="outline">
      Button
    </Button>
    <Button colorScheme="teal" variant="ghost">
      Button
    </Button>
    <Button colorScheme="teal" variant="link">
      Button
    </Button>
    <Button colorScheme="teal" variant="unstyled">
      Button
    </Button>
  </HStack>
);
export const WithVariants = () => {
  return (
    <Decorators
      newComponent={<_withVariants />}
      defaultComponent={<_withVariants />}
    />
  );
};

const _withSizes = () => (
  <HStack>
    <Button colorScheme="blue" size="xs">
      Button
    </Button>
    <Button colorScheme="blue" size="sm">
      Button
    </Button>
    <Button colorScheme="blue" size="md">
      Button
    </Button>
    <Button colorScheme="blue" size="lg">
      Button
    </Button>
  </HStack>
);
export const WithSizes = () => {
  return (
    <Decorators
      newComponent={<_withSizes />}
      defaultComponent={<_withSizes />}
    />
  );
};

const _WithIcon = () => (
  <Stack direction="row" spacing={4}>
    <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
      Email
    </Button>
    <Button
      rightIcon={<ArrowForwardIcon />}
      colorScheme="teal"
      variant="outline"
    >
      Call us
    </Button>
  </Stack>
);
export const WithIcon = () => {
  return (
    <Decorators newComponent={<_WithIcon />} defaultComponent={<_WithIcon />} />
  );
};

const _withReactIcons = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
      Settings
    </Button>
    <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
      Call us
    </Button>
  </Stack>
);
export const WithReactIcons = () => {
  return (
    <Decorators
      newComponent={<_withReactIcons />}
      defaultComponent={<_withReactIcons />}
    />
  );
};

const _WithLoading = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button size="lg" isLoading colorScheme="teal">
      Email
    </Button>

    <Button
      isLoading
      colorScheme="blue"
      spinner={<BeatLoader size={8} color="white" />}
    >
      Click me
    </Button>

    <Button
      isLoading
      loadingText="Submitting..."
      colorScheme="teal"
      variant="outline"
    >
      Submit
    </Button>
  </Stack>
);
export const WithLoading = () => {
  return (
    <Decorators
      newComponent={<_WithLoading />}
      defaultComponent={<_WithLoading />}
    />
  );
};

const _withDisabled = () => (
  <HStack spacing="24px">
    <Button isDisabled colorScheme="teal" variant="solid">
      Button
    </Button>
    <Button isDisabled colorScheme="teal" variant="outline">
      Button
    </Button>
    <Button isDisabled colorScheme="teal" variant="ghost">
      Button
    </Button>
    <Button isDisabled colorScheme="teal" variant="link">
      Button
    </Button>
  </HStack>
);
export const WithDisabled = () => {
  return (
    <Decorators
      newComponent={<_withDisabled />}
      defaultComponent={<_withDisabled />}
    />
  );
};

const _iconButton = () => (
  <Stack direction="row">
    <IconButton aria-label="Search database" icon={<SearchIcon />} />

    <IconButton
      colorScheme="blue"
      aria-label="Search database"
      icon={<SearchIcon />}
    />

    <IconButton colorScheme="teal" aria-label="Call Segun" size="lg">
      <PhoneIcon />
    </IconButton>
  </Stack>
);
export const AnIconButton = () => {
  return (
    <Decorators
      newComponent={<_iconButton />}
      defaultComponent={<_iconButton />}
    />
  );
};

const _WithButtonGroup = () => (
  <ButtonGroup variant="outline">
    <Button colorScheme="blue">Save</Button>
    <Button>Cancel</Button>
  </ButtonGroup>
);
export const WithButtonGroup = () => {
  return (
    <Decorators
      newComponent={<_WithButtonGroup />}
      defaultComponent={<_WithButtonGroup />}
    />
  );
};

const _attachedButtons = () => (
  <ButtonGroup size="sm" isAttached variant="outline">
    <Button marginEnd="-px">Save</Button>
    <IconButton
      fontSize="2xl"
      aria-label="Add to friends"
      icon={<ChevronDownIcon />}
    />
  </ButtonGroup>
);
export const AttachedButtons = () => {
  return (
    <Decorators
      newComponent={<_attachedButtons />}
      defaultComponent={<_attachedButtons />}
    />
  );
};
