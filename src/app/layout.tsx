import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lkoo - Hub de Recursos para Programação",
  description:
    "O Lkoo é uma plataforma que reúne os melhores conteúdos gratuitos para desenvolvedores, incluindo cursos, livros, tutoriais e documentações. Com uma interface intuitiva e organizada por categorias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased">{children}</body>
    </html>
  );
}
