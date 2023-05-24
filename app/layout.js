import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Diego Medina',
  description: 'Full Stack Developer',
  image: '/assets/me.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link rel="shortcut icon" href="/assets/me.png" />
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
