import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./_components/NavBar";
import MenuChannels from "./_components/MenuChannels";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kick",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-screen px-3 pt-3 bg-kick-gray-100 flex flex-col space-y-3 selection:text-kick-gray-100 selection:bg-kick-green">
          <NavBar></NavBar>
          <div className="w-full h-2/4 flex flex-1 gap-3">
            <MenuChannels />
            <section className="w-full flex-1 flex gap-3">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}
