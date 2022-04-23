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
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const SimpleTable = (props: TableProps) => (
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
      <Tr>
        <Td>square inches</Td>
        <Td>sq. millimetres (mm²)</Td>
        <Td isNumeric>645</Td>
      </Tr>
      <Tr>
        <Td>square feet</Td>
        <Td>square metres (m²)</Td>
        <Td isNumeric>0.0929</Td>
      </Tr>
      <Tr>
        <Td>square yards</Td>
        <Td>square metres (m²)</Td>
        <Td isNumeric>0.836</Td>
      </Tr>
      <Tr>
        <Td>acres</Td>
        <Td>hectares</Td>
        <Td isNumeric>2.47</Td>
      </Tr>
      <Tr>
        <Td>cubic inches</Td>
        <Td>millilitres (ml)</Td>
        <Td isNumeric>16.4</Td>
      </Tr>
      <Tr>
        <Td>cubic feet</Td>
        <Td>litres</Td>
        <Td isNumeric>28.3</Td>
      </Tr>
      <Tr>
        <Td>imperial gallons</Td>
        <Td>litres</Td>
        <Td isNumeric>4.55</Td>
      </Tr>
      <Tr>
        <Td>
          <abbr>US</abbr> barrels
        </Td>
        <Td>cubic metres (m³)</Td>
        <Td isNumeric>0.159</Td>
      </Tr>
    </Tbody>
  </Table>
);

const _SimpleMD = () => <SimpleTable size="md" />;
export const SimpleMd: ComponentStory<typeof _SimpleMD> = (args) => (
  <Decorators newComponent={<_SimpleMD />} defaultComponent={<_SimpleMD />} />
);

const _StripedMD = () => <SimpleTable variant="striped" size="md" />;
export const StripedMD: ComponentStory<typeof _StripedMD> = (args) => (
  <Decorators newComponent={<_StripedMD />} defaultComponent={<_StripedMD />} />
);

const _SimpleMDColor = () => <SimpleTable size="md" colorScheme="teal" />;
export const SimpleMdColor: ComponentStory<typeof _SimpleMDColor> = (args) => (
  <Decorators
    newComponent={<_SimpleMDColor />}
    defaultComponent={<_SimpleMDColor />}
  />
);

const _StripedMDColor = () => (
  <SimpleTable variant="striped" size="md" colorScheme="teal" />
);
export const StripedMDColor: ComponentStory<typeof _StripedMDColor> = (
  args
) => (
  <Decorators
    newComponent={<_StripedMDColor />}
    defaultComponent={<_StripedMDColor />}
  />
);
