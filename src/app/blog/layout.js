import { neutralsNine, neutralsZ, primary } from '../../../public/Assets/Const/ColorConst'

export default function RootLayout({ children }) {
return (
    <html lang="en">
      <body className={`scrollbar-thin bg-${neutralsNine} text-${neutralsZ} antialiased selection:${primary} selection:text-${neutralsZ}`}  >
        {children}  
      <slot />
       </body>
    </html>
  )
}