import Navbar from "../components/Navbar";
import Player from "../components/MusicPlayer/Player";
import ProtectedRoute from "../components/Protected/Protected";


export default function Layout({ children }) {
    return (
        <ProtectedRoute>
        <html lang="en">
          <body>
            <Navbar />
               {children}
            <Player />
          </body> 
        </html>
        </ProtectedRoute>
  
    );
  }
  