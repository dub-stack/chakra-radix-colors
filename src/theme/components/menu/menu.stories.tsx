import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { FaUnlink } from "react-icons/fa";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const words = [
  "About Visual Studio Code",
  "Check for updates",
  "Preferences",
  "Services",
  "Hide Visual Studio Code",
  "Show All",
];

function logEvents(e: React.MouseEvent | React.KeyboardEvent | undefined) {
  if (e && e.persist) {
    // Stop React from complaining about non-persisting events.
    e.persist();
  }
  console.log(e);
}

const _Basic = () => (
  <div style={{ minHeight: 4000, paddingTop: 500 }}>
    <Menu>
      <MenuButton
        as={Button}
        variant="solid"
        colorScheme="teal"
        size="sm"
        rightIcon={<FaUnlink />}
      >
        Open Wakanda menu
      </MenuButton>
      <MenuList>
        {words.map((word) => (
          <MenuItem key={word} onClick={logEvents}>
            {word}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  </div>
);

export const Basic: ComponentStory<typeof _Basic> = (args) => {
  return <Decorators newComponent={<_Basic />} oldComponent={<_Basic />} />;
};
