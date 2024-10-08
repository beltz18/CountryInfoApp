import type { Metadata } from "next"
import '@s/_index.min.scss'

export const metadata: Metadata = {
  title: "Country Info App",
  description: "Nextjs App created as an Assessment for DevelopsToday | Andi Montilla",
}

export default function RootLayout({ children }:
  Readonly<{ children: React.ReactNode }>) : React.JSX.Element {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tr from-blue-300 to-indigo-50">
        { children }
      </body>
    </html>
  )
}
