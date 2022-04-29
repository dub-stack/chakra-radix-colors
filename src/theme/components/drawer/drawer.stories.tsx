import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  DrawerFooter,
  Input,
  DrawerCloseButton,
  Button,
  useDisclosure,
  StackProps,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Drawer",
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  const btnRef = React.useRef<null | HTMLButtonElement>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open New
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </VStack>
  );
};

const OldDefault = (props: StackProps) => {
  const c = useThemedColor();
  const btnRef = React.useRef<null | HTMLButtonElement>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open Old
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </VStack>
  );
};

export const Default: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewDefault data-testid="NewDefault" />}
    oldComponent={<OldDefault data-testid="OldDefault" />}
  />
);
