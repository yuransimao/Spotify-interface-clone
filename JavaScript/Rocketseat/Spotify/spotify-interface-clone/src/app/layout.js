import './globals.css'

export const metadata = {
  title: 'Spotify-interface-clone',
  description: 'You listen music',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-zinc-50' >{children}</body>
    </html>
  )
}
