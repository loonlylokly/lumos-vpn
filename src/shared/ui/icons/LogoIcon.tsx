import { SVGProps } from 'react';

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={31} height={32} fill='none' {...props}>
    <rect width={26.89} height={26.89} x={1.522} y={2.304} fill='#3177F2' rx={13.445} />
    <path
      stroke='#fff'
      strokeMiterlimit={10}
      strokeWidth={1.366}
      d='M14.967 29.194c7.425 0 13.444-6.02 13.444-13.445 0-7.425-6.019-13.445-13.444-13.445-7.426 0-13.445 6.02-13.445 13.445 0 7.425 6.02 13.445 13.445 13.445Z'
    />
    <path
      stroke='url(#a)'
      strokeLinecap='round'
      strokeMiterlimit={10}
      strokeWidth={1.344}
      d='M28.149 15.261C22.39 9.838 14.235 8.505 7.3 11.165c-.252.098-.5.198-.746.305'
    />
    <path
      stroke='url(#b)'
      strokeLinecap='round'
      strokeMiterlimit={10}
      strokeWidth={1.344}
      d='M24.6 18.635c-7.754 3.502-16.955 1.66-23.056-3.446'
    />
    <path
      stroke='url(#c)'
      strokeLinecap='round'
      strokeMiterlimit={10}
      strokeWidth={1.344}
      d='M15.123 29.194c5.082-6.37 6.308-15.35 2.921-22.182-.12-.246-.25-.492-.383-.734'
    />
    <path
      stroke='url(#d)'
      strokeLinecap='round'
      strokeMiterlimit={10}
      strokeWidth={1.344}
      d='M12.316 24.35C8.243 17.218 8.928 8.702 13.37 2.41'
    />
    <circle cx={12.33} cy={24.381} r={0.546} fill='#fff' />
    <circle cx={17.644} cy={6.27} r={0.546} fill='#fff' />
    <circle cx={6.58} cy={11.46} r={0.546} fill='#fff' />
    <circle cx={24.582} cy={18.644} r={0.546} fill='#fff' />
    <defs>
      <linearGradient
        id='a'
        x1={-13.837}
        x2={28.76}
        y1={6.325}
        y2={15.195}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' stopOpacity={0} />
        <stop offset={1} stopColor='#fff' />
      </linearGradient>
      <linearGradient
        id='b'
        x1={2.136}
        x2={46.644}
        y1={17.114}
        y2={19.298}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset={1} stopColor='#fff' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='c'
        x1={19.748}
        x2={16.007}
        y1={-11.158}
        y2={29.402}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' stopOpacity={0} />
        <stop offset={1} stopColor='#fff' />
      </linearGradient>
      <linearGradient
        id='d'
        x1={13.421}
        x2={13.015}
        y1={2.931}
        y2={36.372}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset={1} stopColor='#fff' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
