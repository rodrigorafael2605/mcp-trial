import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';
import { SearchIcon, ClearIcon } from './icons';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text above the input',
    },
    message: {
      control: 'text',
      description: 'Helper or error message below the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when empty',
    },
    showInfo: {
      control: 'boolean',
      description: 'Show info icon next to label',
    },
    showMessage: {
      control: 'boolean',
      description: 'Show helper message',
    },
    leadingIcon: {
      control: 'boolean',
      description: 'Show leading icon',
    },
    trailingIcon: {
      control: 'boolean',
      description: 'Show trailing icon',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Default state
export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Message',
  },
};

// Normal state (empty)
export const Normal: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Message',
  },
};

// Filled state
export const Filled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Message',
    defaultValue: 'Filled text',
  },
};

// Focus state
export const Focus: Story = {
  render: (args) => {
    return (
      <Input
        {...args}
        autoFocus
      />
    );
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Message',
  },
};

// Error state
export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Error message',
    error: true,
    defaultValue: 'Invalid value',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Message',
    disabled: true,
  },
};

// Without icons
export const WithoutIcons: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Message',
    leadingIcon: false,
    trailingIcon: false,
  },
};

// Without info icon
export const WithoutInfoIcon: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Message',
    showInfo: false,
  },
};

// Without message
export const WithoutMessage: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    showMessage: false,
  },
};

// With custom icons
export const WithCustomIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    message: 'Type to search',
    leftIcon: <SearchIcon color="#68778D" />,
    rightIcon: <ClearIcon color="#68778D" />,
  },
};

// Controlled input
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="flex flex-col gap-4">
        <Input
          label="Controlled Input"
          placeholder="Type something..."
          message={`Character count: ${value.length}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="text-sm text-gray-500">Value: {value || '(empty)'}</p>
      </div>
    );
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-gray-50">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">Normal (Empty)</h3>
        <Input
          label="Label"
          placeholder="Placeholder"
          message="Message"
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">Filled</h3>
        <Input
          label="Label"
          placeholder="Placeholder"
          message="Message"
          defaultValue="Filled text"
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">Focus (Placeholder)</h3>
        <Input
          label="Label"
          placeholder="Placeholder"
          message="Message"
          autoFocus
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">Error</h3>
        <Input
          label="Label"
          placeholder="Placeholder"
          message="Error message"
          error
          defaultValue="Invalid value"
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">Disabled</h3>
        <Input
          label="Label"
          placeholder="Placeholder"
          message="Message"
          disabled
        />
      </div>
    </div>
  ),
};

// Icon variations
export const IconVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-gray-50">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">With Both Icons</h3>
        <Input
          label="Label"
          placeholder="Placeholder"
          message="Message"
          leadingIcon
          trailingIcon
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">Leading Icon Only</h3>
        <Input
          label="Label"
          placeholder="Placeholder"
          message="Message"
          leadingIcon
          trailingIcon={false}
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">Trailing Icon Only</h3>
        <Input
          label="Label"
          placeholder="Placeholder"
          message="Message"
          leadingIcon={false}
          trailingIcon
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">No Icons</h3>
        <Input
          label="Label"
          placeholder="Placeholder"
          message="Message"
          leadingIcon={false}
          trailingIcon={false}
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">Custom Icons (Search)</h3>
        <Input
          label="Search"
          placeholder="Search..."
          message="Type to search"
          leftIcon={<SearchIcon color="#68778D" />}
          rightIcon={<ClearIcon color="#68778D" />}
        />
      </div>
    </div>
  ),
};
