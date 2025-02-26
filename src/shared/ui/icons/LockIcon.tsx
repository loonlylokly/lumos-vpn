import { SVGProps } from 'react';

export const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='16'
    height='17'
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g opacity='0.5'>
      <path
        d='M10.9851 7.5V5.5V4C10.9851 2.34315 9.64194 1 7.98509 1H7.39404C5.73719 1 4.39404 2.34315 4.39404 4V5.5V7.5'
        stroke='#8C8C8C'
        strokeWidth='2'
      />
      <rect x='1' y='7' width='13.3791' height='9' rx='2' stroke='#646464' strokeWidth='2' />
      <path
        d='M7.68945 10V12'
        stroke='#8C8C8C'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
);
