import React from 'react';
import { cn } from '@/lib/utils';
import {
  CheckboxIcon,
  CheckboxEmptyIcon,
  RiskIcon,
  StatusDotIcon,
  PlaceholderIcon,
} from './icons';

export type CellType = 'left' | 'middle' | 'right';

export interface TagProps {
  label: string;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ label, className }) => (
  <div
    className={cn(
      'bg-[#BCCAD8] rounded px-1 py-0.5 inline-flex items-center justify-center',
      className
    )}
  >
    <span className="font-['Proxima_Nova',sans-serif] font-semibold text-[10px] leading-3 tracking-[0.6px] uppercase text-white">
      {label}
    </span>
  </div>
);

export interface TableCellProps {
  /** Cell type determines position styling and content */
  type?: CellType;
  /** Main label text */
  label?: string;
  /** Secondary sublabel text */
  sublabel?: string;
  /** Tag text (only for left type) */
  tag?: string;
  /** Show checkbox selector (only for left type) */
  showCheckbox?: boolean;
  /** Checkbox checked state */
  checked?: boolean;
  /** Checkbox change handler */
  onCheckChange?: (checked: boolean) => void;
  /** Show risk indicator icon (only for left type) */
  showRiskIcon?: boolean;
  /** Risk progress percentage (0-100) */
  riskProgress?: number;
  /** Risk icon color */
  riskColor?: string;
  /** Status dot color (only for left type) */
  statusColor?: string;
  /** Show icon placeholder (only for middle type) */
  showIcon?: boolean;
  /** Custom leading icon (only for middle type) */
  icon?: React.ReactNode;
  /** Additional className */
  className?: string;
}

export const TableCell = React.forwardRef<HTMLDivElement, TableCellProps>(
  (
    {
      type = 'left',
      label = 'Label',
      sublabel = 'Sublabel',
      tag,
      showCheckbox = true,
      checked = false,
      onCheckChange,
      showRiskIcon = true,
      riskProgress = 75,
      riskColor = '#6EE39F',
      statusColor = '#6EE39F',
      showIcon = true,
      icon,
      className,
    },
    ref
  ) => {
    const handleCheckboxClick = () => {
      onCheckChange?.(!checked);
    };

    const baseStyles = cn(
      'bg-white flex items-center h-16 py-2.5',
      'shadow-[4px_4px_8px_0px_rgba(0,0,0,0.04)]'
    );

    const typeStyles = {
      left: 'gap-2 px-6 rounded-l-lg',
      middle: 'pr-6',
      right: 'pr-6 rounded-r-lg',
    };

    if (type === 'left') {
      return (
        <div ref={ref} className={cn(baseStyles, typeStyles.left, className)}>
          {/* Checkbox */}
          {showCheckbox && (
            <button
              onClick={handleCheckboxClick}
              className="shrink-0 w-6 h-6 flex items-center justify-center focus:outline-none"
              aria-label={checked ? 'Deselect row' : 'Select row'}
            >
              {checked ? (
                <CheckboxIcon color="#1E93FA" />
              ) : (
                <CheckboxEmptyIcon color="#BCCAD8" />
              )}
            </button>
          )}

          {/* Risk Icon */}
          {showRiskIcon && (
            <div className="shrink-0 w-10 h-10 relative flex items-center justify-center">
              <RiskIcon color={riskColor} progress={riskProgress} />
            </div>
          )}

          {/* Text Content */}
          <div className="flex flex-col gap-1 py-0.5 max-w-[128px]">
            <div className="flex gap-1 items-center">
              <p className="font-['Proxima_Nova',sans-serif] font-semibold text-sm leading-5 tracking-[0.2px] text-[#3C4A5B] truncate">
                {label}
              </p>
              {tag && <Tag label={tag} />}
            </div>
            <div className="flex gap-1 items-center">
              <StatusDotIcon color={statusColor} />
              <p className="font-['Proxima_Nova',sans-serif] font-light text-xs leading-4 tracking-[0.4px] text-[#68778D]">
                {sublabel}
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'middle') {
      return (
        <div ref={ref} className={cn(baseStyles, typeStyles.middle, className)}>
          {/* Text Content */}
          <div className="flex flex-col gap-1 py-0.5">
            <div className="flex gap-1 items-center max-w-[128px]">
              <p className="font-['Proxima_Nova',sans-serif] font-semibold text-sm leading-5 tracking-[0.2px] text-[#3C4A5B] truncate">
                {label}
              </p>
            </div>
            <div className="flex gap-1 items-center">
              {showIcon && (
                <div className="shrink-0">
                  {icon || <PlaceholderIcon color="#BCCAD8" />}
                </div>
              )}
              <p className="font-['Proxima_Nova',sans-serif] font-light text-xs leading-4 tracking-[0.4px] text-[#68778D]">
                {sublabel}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // type === 'right'
    return (
      <div ref={ref} className={cn(baseStyles, typeStyles.right, className)}>
        {/* Text Content */}
        <div className="flex flex-col gap-1 py-0.5">
          <p className="font-['Proxima_Nova',sans-serif] font-semibold text-sm leading-5 tracking-[0.2px] text-[#3C4A5B] truncate">
            {label}
          </p>
          <p className="font-['Proxima_Nova',sans-serif] font-light text-xs leading-4 tracking-[0.4px] text-[#68778D] truncate">
            {sublabel}
          </p>
        </div>
      </div>
    );
  }
);

TableCell.displayName = 'TableCell';

export default TableCell;
