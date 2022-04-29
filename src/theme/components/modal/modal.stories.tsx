import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  StackProps,
  Button,
  VStack,
  HStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const NewDefault = (props: StackProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack {...props}>
      <Button onClick={onOpen}>New Open</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Welcome Home</ModalHeader>
          <ModalBody>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi.
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button onClick={onClose}>Cancel</Button>
              <Button>Save</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

const OldDefault = (props: StackProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack {...props}>
      <Button onClick={onOpen}>Old Open</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Welcome Home</ModalHeader>
          <ModalBody>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi.
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button onClick={onClose}>Cancel</Button>
              <Button>Save</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export const Default: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewDefault data-testid="NewDefault" />}
    oldComponent={<OldDefault data-testid="OldDefault" />}
  />
);
