import React from 'react';
import { cn } from '@/lib/utils';
import { AddIcon, ArrowIcon } from './icons';

export type ButtonSize = 'small' | 'medium';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'icon-primary' | 'icon-secondary' | 'icon-tertiary';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant/style */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Button label text */
  label?: string;
  /** Show leading icon */
  leadingIcon?: boolean;
  /** Show trailing icon */
  trailingIcon?: boolean;
  /** Custom icon element */
  icon?: React.ReactNode;
}

const sizeStyles: Record<ButtonSize, Record<'text' | 'iconOnly', string>> = {
  small: {
    text: 'px-4 py-1.5 text-[10px] leading-3 tracking-[0.6px]',
    iconOnly: 'p-1 rounded-full',
  },
  medium: {
    text: 'px-4 py-2 text-xs leading-4 tracking-[0.4px]',
    iconOnly: 'p-1 rounded-full',
  },
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-[#3C4A5B] text-white rounded',
    'hover:bg-[#68778D]',
    'disabled:bg-[#E4EAF2] disabled:text-white'
  ),
  secondary: cn(
    'bg-white border border-[#BCCAD8] text-[#3C4A5B] rounded',
    'hover:border-[#3C4A5B]',
    'disabled:border-[#BCCAD8] disabled:text-[#BCCAD8]'
  ),
  tertiary: cn(
    'bg-white text-[#68778D] rounded',
    'hover:bg-[#F5F9FC]',
    'disabled:text-[#E4EAF2]'
  ),
  'icon-primary': cn(
    'bg-[#3C4A5B] text-white rounded-full',
    'hover:bg-[#68778D]',
    'disabled:bg-[#E4EAF2]'
  ),
  'icon-secondary': cn(
    'bg-white border border-[#BCCAD8] text-[#3C4A5B] rounded-full',
    'hover:border-[#3C4A5B]',
    'disabled:border-[#F5F9FC] disabled:text-[#BCCAD8]'
  ),
  'icon-tertiary': cn(
    'text-[#3C4A5B] rounded-full',
    'hover:bg-[#F5F9FC] hover:text-[#3C4A5B]',
    'disabled:text-[#BCCAD8]'
  ),
};

const getIconColor = (variant: ButtonVariant, disabled?: boolean): string => {
  if (disabled) {
    if (variant === 'primary' || variant === 'icon-primary') return '#FFFFFF';
    if (variant === 'secondary' || variant === 'icon-secondary') return '#BCCAD8';
    if (variant === 'tertiary' || variant === 'icon-tertiary') return '#E4EAF2';
  }

  if (variant === 'primary' || variant === 'icon-primary') return '#FFFFFF';
  if (variant === 'secondary' || variant === 'icon-secondary') return '#3C4A5B';
  if (variant === 'tertiary' || variant === 'icon-tertiary') return '#68778D';

  return '#3C4A5B';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      label = 'Label',
      leadingIcon = false,
      trailingIcon = false,
      icon,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const isIconOnly = variant.startsWith('icon-');
    const iconColor = getIconColor(variant, disabled);

    const DefaultIcon = isIconOnly ? ArrowIcon : AddIcon;
    const iconElement = icon || <DefaultIcon color={iconColor} />;

    if (isIconOnly) {
      return (
        <button
          ref={ref}
          disabled={disabled}
          className={cn(
            'inline-flex items-center justify-center transition-colors font-semibold',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C4A5B]',
            'disabled:cursor-not-allowed',
            sizeStyles[size].iconOnly,
            variantStyles[variant],
            className
          )}
          {...props}
        >
          {iconElement}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center gap-1 transition-colors font-semibold',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C4A5B]',
          'disabled:cursor-not-allowed',
          "font-['Proxima_Nova',sans-serif]",
          sizeStyles[size].text,
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {leadingIcon && iconElement}
        <span>{label}</span>
        {trailingIcon && iconElement}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
