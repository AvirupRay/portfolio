import { Tangerine } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-tangerine",
});

export const metadata = {
  title: "Avirup Ray",
  description: "My Portfolio",
  image: "/images/avirup.jpg",
  icons: {
    icon: ["/avirup_logo_2.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tangerine.variable} scrollbar-hide `}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
