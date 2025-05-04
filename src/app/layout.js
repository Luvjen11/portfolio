import './globals.css';

// import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'Jennifer Okeke | Portfolio',
  description: 'Full-stack developer with a passion for creating meaningful digital experiences',
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