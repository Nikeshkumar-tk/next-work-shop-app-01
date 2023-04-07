import './globals.css'
import {Poppins } from "next/font/google"
export const metadata = {
  title: 'next_app_01',
  description: 'Try out Next.js by building a simple blog app',
}
const poppins = Poppins({weight:["200","400"],preload:false})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
