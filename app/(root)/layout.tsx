import type { Metadata } from 'next'
import { Fira_Mono } from 'next/font/google'
import '../globals.css'
import Topbar from '@/components/topbar'

const font = Fira_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Next.js Spotify Controller App',
  description:
    'An Next.js Web App that controls Spotify Playback aka CarThing Clone (kinda)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen`}>
        <main className="p-4 min-h-screen w-full">
          <Topbar />
          <div className="p-6">{children}</div>
        </main>
      </body>
    </html>
  )
}
