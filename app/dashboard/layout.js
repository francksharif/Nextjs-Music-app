import Navbar from "../components/Navbar";
import Player from "../components/MusicPlayer/Player";



export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
        <Navbar />
          {children}
        <Player />
        </body>
      </html>
    );
  }
  