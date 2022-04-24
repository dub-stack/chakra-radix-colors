import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  useEditable,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  useEditableControls,
  chakra,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Editable",
  component: Editable,
} as ComponentMeta<typeof Editable>;

const EditableControls = () => {
  const {
    isEditing,
    getEditButtonProps,
    getSubmitButtonProps,
    getCancelButtonProps,
  } = useEditableControls();

  return (
    <div>
      {!isEditing ? (
        <button {...getEditButtonProps()}>Edit</button>
      ) : (
        <>
          <button {...getSubmitButtonProps()}>Save</button>
          <button {...getCancelButtonProps()}>Cancel</button>
        </>
      )}
    </div>
  );
};

const _Basic = () => (
  <Editable
    defaultValue="Rasengan ⚡️"
    fontSize="xl"
    textAlign="center"
    isPreviewFocusable={false}
    submitOnBlur={false}
    onChange={console.log}
  >
    <EditablePreview />
    <EditableInput />
    <EditableControls />
  </Editable>
);
export const Basic: ComponentStory<typeof Editable> = (args) => {
  return <Decorators newComponent={<_Basic />} oldComponent={<_Basic />} />;
};

export const _CodeSandboxTopbar = () => {
  return (
    <chakra.div py="4" display="flex" alignItems="center">
      <chakra.p fontWeight="medium">My Sandboxes</chakra.p>
      <chakra.span mx="3">/</chakra.span>
      <Editable defaultValue="chakra-ui-demo">
        <EditableInput _focus={{ boxShadow: "none" }} />
        <EditablePreview />
      </Editable>
    </chakra.div>
  );
};
export const CodeSandboxTopbar: ComponentStory<typeof Editable> = (args) => {
  return (
    <Decorators
      newComponent={<_CodeSandboxTopbar />}
      oldComponent={<_CodeSandboxTopbar />}
    />
  );
};
