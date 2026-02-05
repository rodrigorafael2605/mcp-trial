import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'icon-primary', 'icon-secondary', 'icon-tertiary'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium'],
      description: 'The size of the button',
    },
    label: {
      control: 'text',
      description: 'The text content of the button',
    },
    leadingIcon: {
      control: 'boolean',
      description: 'Show icon before the label',
    },
    trailingIcon: {
      control: 'boolean',
      description: 'Show icon after the label',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Label',
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Label',
  },
};

export const PrimaryWithIcons: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Label',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Label',
    disabled: true,
  },
};

// Secondary variants
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Label',
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: 'secondary',
    size: 'small',
    label: 'Label',
  },
};

export const SecondaryWithIcons: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Label',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Label',
    disabled: true,
  },
};

// Tertiary variants
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    label: 'Label',
  },
};

export const TertiarySmall: Story = {
  args: {
    variant: 'tertiary',
    size: 'small',
    label: 'Label',
  },
};

export const TertiaryWithIcons: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    label: 'Label',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const TertiaryDisabled: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    label: 'Label',
    disabled: true,
  },
};

// Icon-only variants
export const IconPrimary: Story = {
  args: {
    variant: 'icon-primary',
    size: 'small',
  },
};

export const IconSecondary: Story = {
  args: {
    variant: 'icon-secondary',
    size: 'small',
  },
};

export const IconTertiary: Story = {
  args: {
    variant: 'icon-tertiary',
    size: 'small',
  },
};

export const IconPrimaryDisabled: Story = {
  args: {
    variant: 'icon-primary',
    size: 'small',
    disabled: true,
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-gray-50">
      {/* Medium size - Text buttons */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">Medium - Text Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-xs text-gray-500">Primary</span>
            <Button variant="primary" size="medium" label="Label" />
            <Button variant="primary" size="medium" label="Label" leadingIcon trailingIcon />
            <Button variant="primary" size="medium" label="Label" disabled />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-xs text-gray-500">Secondary</span>
            <Button variant="secondary" size="medium" label="Label" />
            <Button variant="secondary" size="medium" label="Label" leadingIcon trailingIcon />
            <Button variant="secondary" size="medium" label="Label" disabled />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-xs text-gray-500">Tertiary</span>
            <Button variant="tertiary" size="medium" label="Label" />
            <Button variant="tertiary" size="medium" label="Label" leadingIcon trailingIcon />
            <Button variant="tertiary" size="medium" label="Label" disabled />
          </div>
        </div>
      </div>

      {/* Small size - Text buttons */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">Small - Text Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-xs text-gray-500">Primary</span>
            <Button variant="primary" size="small" label="Label" />
            <Button variant="primary" size="small" label="Label" leadingIcon trailingIcon />
            <Button variant="primary" size="small" label="Label" disabled />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-xs text-gray-500">Secondary</span>
            <Button variant="secondary" size="small" label="Label" />
            <Button variant="secondary" size="small" label="Label" leadingIcon trailingIcon />
            <Button variant="secondary" size="small" label="Label" disabled />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-xs text-gray-500">Tertiary</span>
            <Button variant="tertiary" size="small" label="Label" />
            <Button variant="tertiary" size="small" label="Label" leadingIcon trailingIcon />
            <Button variant="tertiary" size="small" label="Label" disabled />
          </div>
        </div>
      </div>

      {/* Icon-only buttons */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-gray-700">Icon-Only Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-xs text-gray-500">Primary</span>
            <Button variant="icon-primary" size="small" />
            <Button variant="icon-primary" size="small" disabled />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-xs text-gray-500">Secondary</span>
            <Button variant="icon-secondary" size="small" />
            <Button variant="icon-secondary" size="small" disabled />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-xs text-gray-500">Tertiary</span>
            <Button variant="icon-tertiary" size="small" />
            <Button variant="icon-tertiary" size="small" disabled />
          </div>
        </div>
      </div>
    </div>
  ),
};

// States showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex gap-4 items-center">
        <span className="w-20 text-xs text-gray-500">Normal</span>
        <Button variant="primary" label="Label" />
        <Button variant="secondary" label="Label" />
        <Button variant="tertiary" label="Label" />
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-20 text-xs text-gray-500">With Icons</span>
        <Button variant="primary" label="Label" leadingIcon trailingIcon />
        <Button variant="secondary" label="Label" leadingIcon trailingIcon />
        <Button variant="tertiary" label="Label" leadingIcon trailingIcon />
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-20 text-xs text-gray-500">Disabled</span>
        <Button variant="primary" label="Label" disabled />
        <Button variant="secondary" label="Label" disabled />
        <Button variant="tertiary" label="Label" disabled />
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-20 text-xs text-gray-500">Icon Only</span>
        <Button variant="icon-primary" />
        <Button variant="icon-secondary" />
        <Button variant="icon-tertiary" />
      </div>
    </div>
  ),
};
