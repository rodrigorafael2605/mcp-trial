import React from 'react';

interface IconProps {
  color?: string;
  className?: string;
}

export const CheckboxIcon: React.FC<IconProps> = ({ color = '#1E93FA', className }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" fill={color} stroke={color} />
    <path
      d="M4 9L7.5 12.5L14 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckboxEmptyIcon: React.FC<IconProps> = ({ color = '#BCCAD8', className }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" fill="white" stroke={color} />
  </svg>
);

export const RiskIcon: React.FC<IconProps & { progress?: number }> = ({
  color = '#6EE39F',
  className,
  progress = 75
}) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="18" stroke="#E4EAF2" strokeWidth="4" />
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 20 20)"
      />
    </svg>
  );
};

export const StatusDotIcon: React.FC<IconProps> = ({ color = '#6EE39F', className }) => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="4" cy="4" r="4" fill={color} />
  </svg>
);

export const PlaceholderIcon: React.FC<IconProps> = ({ color = '#BCCAD8', className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="16" height="16" rx="2" fill={color} fillOpacity="0.3" />
    <circle cx="8" cy="8" r="3" stroke={color} strokeWidth="1.5" />
  </svg>
);
