import React, { useState, useId } from 'react';
import { cn } from '@/lib/utils';
import { InfoIcon, PlaceholderIcon } from './icons';

export type InputState = 'normal' | 'filled' | 'focus' | 'error' | 'disabled' | 'skeleton';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text */
  label?: string;
  /** Helper/error message */
  message?: string;
  /** Show info icon next to label */
  showInfo?: boolean;
  /** Show helper message */
  showMessage?: boolean;
  /** Show leading icon */
  leadingIcon?: boolean;
  /** Show trailing icon */
  trailingIcon?: boolean;
  /** Custom leading icon */
  leftIcon?: React.ReactNode;
  /** Custom trailing icon */
  rightIcon?: React.ReactNode;
  /** Error state */
  error?: boolean;
  /** Container className */
  containerClassName?: string;
}

const stateColors = {
  label: {
    normal: 'text-[#68778D]',
    focus: 'text-[#3C4A5B]',
    error: 'text-[#FF673D]',
    disabled: 'text-[#68778D]',
  },
  input: {
    normal: 'text-[#BCCAD8]',
    filled: 'text-[#3C4A5B]',
    focus: 'text-[#3C4A5B]',
    error: 'text-[#3C4A5B]',
    disabled: 'text-[#BCCAD8]',
  },
  border: {
    normal: 'bg-[#BCCAD8]',
    focus: 'bg-[#3C4A5B]',
    error: 'bg-[#FF673D]',
    disabled: 'bg-[#E4EAF2]',
  },
  message: {
    normal: 'text-[#68778D]',
    error: 'text-[#FF673D]',
  },
  icon: {
    normal: '#BCCAD8',
    filled: '#68778D',
    focus: '#3C4A5B',
    error: '#FF673D',
    disabled: '#BCCAD8',
  },
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = 'Label',
      message = 'Message',
      showInfo = true,
      showMessage = true,
      leadingIcon = true,
      trailingIcon = true,
      leftIcon,
      rightIcon,
      error = false,
      disabled = false,
      placeholder = 'Placeholder',
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || '');

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const hasValue = Boolean(currentValue);

    const getState = (): InputState => {
      if (disabled) return 'disabled';
      if (error) return 'error';
      if (isFocused) return 'focus';
      if (hasValue) return 'filled';
      return 'normal';
    };

    const state = getState();

    const getLabelColor = () => {
      if (error) return stateColors.label.error;
      if (isFocused) return stateColors.label.focus;
      if (disabled) return stateColors.label.disabled;
      return stateColors.label.normal;
    };

    const getInputColor = () => {
      if (disabled) return stateColors.input.disabled;
      if (hasValue || isFocused) return stateColors.input.filled;
      return stateColors.input.normal;
    };

    const getBorderColor = () => {
      if (error) return stateColors.border.error;
      if (isFocused) return stateColors.border.focus;
      if (disabled) return stateColors.border.disabled;
      return stateColors.border.normal;
    };

    const getMessageColor = () => {
      if (error) return stateColors.message.error;
      return stateColors.message.normal;
    };

    const getIconColor = () => {
      if (error) return stateColors.icon.error;
      if (disabled) return stateColors.icon.disabled;
      if (isFocused) return stateColors.icon.focus;
      if (hasValue) return stateColors.icon.filled;
      return stateColors.icon.normal;
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const iconColor = getIconColor();
    const leadingIconElement = leftIcon || (leadingIcon && <PlaceholderIcon color={iconColor} />);
    const trailingIconElement = rightIcon || (trailingIcon && <PlaceholderIcon color={iconColor} />);

    return (
      <div className={cn('flex flex-col items-start w-[333px]', containerClassName)}>
        {/* Label */}
        <div className="flex gap-2 items-center overflow-hidden pr-2">
          <label
            htmlFor={id}
            className={cn(
              "font-['Proxima_Nova',sans-serif] font-semibold text-xs leading-4 tracking-[0.4px]",
              getLabelColor()
            )}
          >
            {label}
          </label>
          {showInfo && <InfoIcon color={iconColor} />}
        </div>

        {/* Input Container */}
        <div
          className={cn(
            'flex gap-2 items-center w-full py-2 pr-2',
            disabled && 'bg-[#F5F9FC] rounded-t-lg px-2'
          )}
        >
          {leadingIconElement}

          <div className="flex-1 flex items-center relative">
            <input
              ref={ref}
              id={id}
              type="text"
              disabled={disabled}
              placeholder={placeholder}
              value={currentValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={cn(
                "w-full bg-transparent outline-none",
                "font-['Proxima_Nova',sans-serif] text-sm leading-5 tracking-[0.2px]",
                "placeholder:text-[#BCCAD8]",
                getInputColor(),
                disabled && 'cursor-not-allowed',
                className
              )}
              {...props}
            />
            {isFocused && (
              <div className="w-0.5 h-5 bg-[#1E93FA] animate-pulse" />
            )}
          </div>

          {trailingIconElement}
        </div>

        {/* Border Line */}
        <div className={cn('h-px w-full', getBorderColor())} />

        {/* Message */}
        {showMessage && (
          <div className="flex items-start pt-1 pb-2 pr-2 w-full">
            <p
              className={cn(
                "font-['Proxima_Nova',sans-serif] text-xs leading-4 tracking-[0.4px]",
                getMessageColor()
              )}
            >
              {message}
            </p>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
