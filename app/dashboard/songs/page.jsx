import SongsList from "../../components/Songs/SongsList";


export default function Songs() {

    const songs = [
        {
            title: 'Song1',
            duration: '4:20',
        },
       
    ];
    

    return (
        <div className="p-6 bg-gray-900 min-h-screen">
        <h1 className="text-center text-3xl font-bold text-white mb-8">My Songs List</h1>
  
        {/* Songs List */}

        <div className="max-w-7xl mx-auto px-2 sm:px-6 justify-center lg:px-8 flex gap-6 p-4">
        <SongsList songs={songs} />
        </div>
      </div>
    );
}