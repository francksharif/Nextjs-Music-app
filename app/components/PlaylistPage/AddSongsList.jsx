import AddSongButton from "./AddSongButton"

export default function AddSongsList() {
  return (
    <div className="bg-gray-700 p-4 rounded-md shadow-md">
    <h3 className="text-lg font-semibold">Add Songs to Playlist</h3>
    <div className="flex items-center space-x-4 mt-4">
    <div>
    <select className=" bg-gray-800 py-3 px-2">
        <option value="">Select a song to add</option>
        <option value="1">Song 1</option>
        <option value="2">Song 2</option>
    </select>
    </div>
   <div>
   <AddSongButton />
   </div>
    
    </div>
    
</div>
  );
}
