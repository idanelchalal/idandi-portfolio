import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Container from "@/components/Container/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IDANDI Portfolio Web",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-primary-black ${inter.className}`}>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
