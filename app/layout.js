import "./globals.css";
import { AuthProvider } from "./context/AuthProvider";
import { PlayerProvider } from "./context/PlayerProvider";

export const metadata = {
  title: "Music fullstack app",
  description: "A fullstack application with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <PlayerProvider>
            {children}
          </PlayerProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
