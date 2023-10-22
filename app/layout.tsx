import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar';
import SupabaseProvider from '@/providers/supabaseProvider';

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mausiki',
  description: 'listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={font.className}>
            <SupabaseProvider>
                <Sidebar>
                    {children}
                </Sidebar>
            </SupabaseProvider>
        </body>
    </html>
  )
}