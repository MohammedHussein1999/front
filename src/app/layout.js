
import NavBar from './components/nav/NavBar';
import './globals.css'
import "@radix-ui/themes/styles.css";

export default function RootLayout({ children }) {

  return (
    <html lang="en" dir='rtl'>
      <body className='w-full'>

        <NavBar linksHome={false} linksLogin={true} />
        <main className=" p-3 " >
          {children}
        </main>

      </body>
    </html>
  );
}