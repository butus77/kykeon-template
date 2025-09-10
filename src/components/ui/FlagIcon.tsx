
import React from 'react';

interface FlagIconProps {
  country: 'GB' | 'ES';
  className?: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({ country, className }) => {
  switch (country) {
    case 'ES':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 600"
          className={className}
        >
          <title>Spanish Flag</title>
          <rect fill="#c60b1e" width="900" height="600" />
          <rect fill="#ffc400" y="150" width="900" height="300" />
          <g fill="#ad1519" transform="translate(250 225) scale(1.5)">
            <path
              d="M40 0 V30 H20 V50 H40 V70 H20 V90 H40 V100 H0 V0 H40 M60 0 H100 V100 H60 V90 H80 V70 H60 V50 H80 V30 H60 V0 M50 20 A10 10 0 0 0 50 40 A10 10 0 0 0 50 20 M50 60 V80 H45 V85 H55 V80 H50"
            />
          </g>
        </svg>
      );
    case 'GB':
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 30"
          className={className}
        >
          <title>British Flag</title>
          <clipPath id="a">
            <path d="M0 0v30h60V0z" />
          </clipPath>
          <clipPath id="b">
            <path d="M30 15h30v15zv-15h-30z" />
          </clipPath>
          <g clipPath="url(#a)">
            <path d="M0 0v30h60V0z" fill="#012169" />
            <path d="m0 0 60 30m-60 0 60-30" stroke="#fff" strokeWidth="6" />
            <path
              d="m0 0 60 30m-60 0 60-30"
              clipPath="url(#b)"
              stroke="#C8102E"
              strokeWidth="4"
            />
            <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
            <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      );
  }
};

export default FlagIcon;
