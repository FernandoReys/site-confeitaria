import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reys Doces | Confeitaria artesanal",
  description:
    "Bolos, doces e kits de festa feitos com carinho para transformar cada ocasião em uma memória deliciosa.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
