import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Table,
  TableCaption,
  TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  StackProps,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const LeTable = (props: TableProps) => (
  <Table {...props}>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
      <Tr>
        <Td>miles</Td>
        <Td>kilometres (km)</Td>
        <Td isNumeric>1.61</Td>
      </Tr>
    </Tbody>
  </Table>
);

const NewSimple = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <LeTable data-testid="light-table" colorScheme="purple" />
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <LeTable data-testid="dark-table" colorScheme="purpleDark" />
      </Box>
    </VStack>
  );
};

const OldSimple = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box p="4">
        <LeTable data-testid="light-table" colorScheme="purple" />
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <LeTable data-testid="dark-table" colorScheme="purple" />
      </Box>
    </VStack>
  );
};

export const Simple: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewSimple data-testid="NewSimple" />}
    oldComponent={<OldSimple data-testid="OldSimple" />}
  />
);

const NewStriped = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <LeTable
          data-testid="light-table"
          variant="striped"
          colorScheme="purple"
        />
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <LeTable
          data-testid="dark-table"
          variant="striped"
          colorScheme="purpleDark"
        />
      </Box>
    </VStack>
  );
};

const OldStriped = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box p="4">
        <LeTable
          data-testid="light-table"
          variant="striped"
          colorScheme="purple"
        />
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <LeTable
          data-testid="dark-table"
          variant="striped"
          colorScheme="purple"
        />
      </Box>
    </VStack>
  );
};

export const Striped: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewStriped data-testid="NewStriped" />}
    oldComponent={<OldStriped data-testid="OldStriped" />}
  />
);
