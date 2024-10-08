import type { Metadata } from "next"
import '@s/_index.min.scss'

export const metadata: Metadata = {
  title: "Country Info App",
  description: "Nextjs App created as an Assessment for DevelopsToday | Andi Montilla",
}

export default function RootLayout({ children }:
  Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  )
}
