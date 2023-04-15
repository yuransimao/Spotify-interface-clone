import './globals.css'

export const metadata = {
  title: 'Spotify-interface-clone',
  description: 'You listen music',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
