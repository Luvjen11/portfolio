import './globals.css';

// import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'Your Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        <div className="flex-grow">
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  )
}