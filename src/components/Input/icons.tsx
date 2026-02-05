import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
}

export const InfoIcon: React.FC<IconProps> = ({
  color = '#68778D',
  size = 6,
  className
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="3" cy="3" r="3" fill={color} />
    <text
      x="3"
      y="4.5"
      fontSize="4"
      fill="white"
      textAnchor="middle"
      fontFamily="sans-serif"
      fontWeight="bold"
    >
      i
    </text>
  </svg>
);

export const PlaceholderIcon: React.FC<IconProps> = ({
  color = '#BCCAD8',
  size = 20,
  className
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.5" />
    <circle cx="10" cy="8" r="2.5" stroke={color} strokeWidth="1.5" />
    <path
      d="M5 16.5C5.5 14 7.5 12.5 10 12.5C12.5 12.5 14.5 14 15 16.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({
  color = '#68778D',
  size = 20,
  className
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="9" cy="9" r="6" stroke={color} strokeWidth="1.5" />
    <path
      d="M13.5 13.5L17 17"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ClearIcon: React.FC<IconProps> = ({
  color = '#68778D',
  size = 20,
  className
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="10" cy="10" r="8" fill={color} fillOpacity="0.2" />
    <path
      d="M7 7L13 13M13 7L7 13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
