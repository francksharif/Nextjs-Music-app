import "./globals.css";
import { AuthProvider } from "./context/AuthProvider";
import { AudioProvider } from "./context/AudioProvider";

export const metadata = {
  title: "Music fullstack app",
  description: "A fullstack application with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AudioProvider>
          {children}
          </AudioProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
