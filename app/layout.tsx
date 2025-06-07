import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Personal portfolio showcasing my work as a developer',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://krushant.vercel.app/',
    title: 'Krushant Wagh - Developer Portfolio',
    description: 'Full-stack developer specializing in modern web technologies',
    siteName: 'Krushant Wagh',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Krushant Wagh Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krushant Wagh - Developer Portfolio',
    description: 'Full-stack developer specializing in modern web technologies',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetBrainsMono.variable} font-mono`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}