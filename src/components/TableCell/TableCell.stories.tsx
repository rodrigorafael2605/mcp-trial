import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['left', 'middle', 'right'],
    },
    riskProgress: {
      control: { type: 'range', min: 0, max: 100 },
    },
    riskColor: {
      control: 'color',
    },
    statusColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    type: 'left',
    label: 'Label',
    sublabel: 'Sublabel',
    tag: 'LABEL',
    showCheckbox: true,
    checked: true,
    showRiskIcon: true,
    riskProgress: 75,
    riskColor: '#6EE39F',
    statusColor: '#6EE39F',
  },
};

export const Middle: Story = {
  args: {
    type: 'middle',
    label: 'Label',
    sublabel: 'Sublabel',
    showIcon: true,
  },
};

export const Right: Story = {
  args: {
    type: 'right',
    label: 'Label',
    sublabel: 'Sublabel',
  },
};

export const LeftUnchecked: Story = {
  args: {
    type: 'left',
    label: 'Label',
    sublabel: 'Sublabel',
    tag: 'LABEL',
    showCheckbox: true,
    checked: false,
    showRiskIcon: true,
    riskProgress: 50,
  },
};

// Interactive example with checkbox state
const TableRowExample = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex">
      <TableCell
        type="left"
        label="Project Alpha"
        sublabel="Active"
        tag="NEW"
        checked={checked}
        onCheckChange={setChecked}
        riskProgress={75}
        riskColor="#6EE39F"
        statusColor="#6EE39F"
      />
      <TableCell
        type="middle"
        label="John Doe"
        sublabel="Owner"
      />
      <TableCell
        type="right"
        label="$12,500"
        sublabel="Budget"
      />
    </div>
  );
};

export const TableRow: Story = {
  render: () => <TableRowExample />,
};

// All three types side by side
export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm text-gray-500 mb-2">Left Cell (with checkbox, risk icon, tag)</p>
        <TableCell
          type="left"
          label="Label"
          sublabel="Sublabel"
          tag="LABEL"
          checked={true}
          riskProgress={75}
        />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Middle Cell (with icon placeholder)</p>
        <TableCell
          type="middle"
          label="Label"
          sublabel="Sublabel"
        />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Right Cell (text only)</p>
        <TableCell
          type="right"
          label="Label"
          sublabel="Sublabel"
        />
      </div>
    </div>
  ),
};
