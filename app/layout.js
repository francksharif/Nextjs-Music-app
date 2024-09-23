import "./globals.css";

export const metadata = {
  title: "Music fullstack app",
  description: "A fullstack application with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
