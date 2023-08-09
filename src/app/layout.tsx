'use client'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
        <title>Lebelo Dashboard</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
