import { Inter } from 'next/font/google'
import './globals.css'
import './global.scss'
import { SpeedInsights } from "@vercel/speed-insights/next"

import { neutralsNine, neutralsZ, primary } from '../../public/Assets/Const/ColorConst'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Development',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`scrollbar-thin bg-${neutralsNine} text-${neutralsZ} antialiased selection:${primary} selection:text-${neutralsZ}`}  >
        {children}  
        <SpeedInsights />
       </body>
    </html>
  )
}

