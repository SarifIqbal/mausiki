import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar';
import SupabaseProvider from '@/providers/supabaseProvider';
import UserProvider from '@/providers/userProvider';
import ModalProvider from '@/providers/modalProvider';
import ToasterProvider from '@/providers/toasterProvider';
import getSongsByUserId from '@/actions/getSongsByUserId';
import Player from '@/components/player';

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mausiki',
  description: 'listen to music',
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const userSongs = await getSongsByUserId();
    
    return (
        <html lang="en">
            <body className={font.className}>
                <ToasterProvider />
                <SupabaseProvider>
                    <UserProvider>
                        <ModalProvider />
                        <Sidebar songs={userSongs}>
                            {children}
                        </Sidebar>
                        <Player />
                    </UserProvider>
                </SupabaseProvider>
            </body>
        </html>
    )
}