import { Providers } from './providers';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { inter, poppins } from '@/config/google-fonts';

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    default: process.env.NEXT_PUBLIC_APP_NAME || 'ISP',
  },
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  icons: {
    icon: process.env.NEXT_PUBLIC_BRAND_LOGO_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${poppins.variable} bg-gray-100 font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
