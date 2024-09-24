'use client';
import MainPlaylist from "@/app/components/Playlists/MainPlaylist";

export default function Playlists() {


    return (

        <div className="p-6 bg-gray-900 min-h-screen">
        <h1 className="text-center text-3xl font-bold text-white mb-8">My PlayLists</h1>
  
        {/* PlayLists List */}

        <div className="max-w-7xl mx-auto px-2 sm:px-6 justify-center lg:px-8 flex gap-6 p-4">
            <MainPlaylist id='1' title='playslist1' />
        </div>
      </div>
     
        
    );
}