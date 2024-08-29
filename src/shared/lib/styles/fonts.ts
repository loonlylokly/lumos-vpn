import localFont from 'next/font/local';

export const Poppins = localFont({
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: false,
  src: [
    {
      path: '../../../../public/fonts/Poppins-Regular.woff2',
      style: 'normal',
      weight: '400'
    },
    {
      path: '../../../../public/fonts/Poppins-Medium.woff2',
      style: 'normal',
      weight: '500'
    },
    {
      path: '../../../../public/fonts/Poppins-SemiBold.woff2',
      style: 'normal',
      weight: '600'
    },
    {
      path: '../../../../public/fonts/Poppins-Bold.woff2',
      style: 'normal',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
});
