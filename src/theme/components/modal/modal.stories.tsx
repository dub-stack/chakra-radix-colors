import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  chakra,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Button = chakra("button", {
  baseStyle: {
    outline: 0,
    transitionProperty: "color, box-shadow",
    transitionDuration: "normal",
  },
});

function _BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
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
            <Button onClick={onClose}>Cancel</Button>
            <Button>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export const BasicUsage: ComponentStory<typeof _BasicUsage> = (args) => {
  return (
    <Decorators
      newComponent={<_BasicUsage />}
      defaultComponent={<_BasicUsage />}
    />
  );
};
