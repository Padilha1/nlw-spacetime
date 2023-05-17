import "./globals.css";
import { ReactNode } from "react";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamJuree,
} from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamJuree = BaiJamJuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-baiJamJuree",
});

export const metadata = {
  title: "NLW Spacetime",
  description: "A capsula do tempo que voce precisava para guardar suas melhores memorias",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamJuree.variable} bg-gray-900 font-sans text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
