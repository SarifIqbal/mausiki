import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar';
import SupabaseProvider from '@/providers/supabaseProvider';
import UserProvider from '@/providers/userProvider';

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
                <UserProvider>
                    <Sidebar>
                        {children}
                    </Sidebar>
                </UserProvider>
            </SupabaseProvider>
        </body>
    </html>
  )
}