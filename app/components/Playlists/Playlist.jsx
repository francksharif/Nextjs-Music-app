import DeleteButton from "./DeleteButton";
import Link from "next/link";

export default function Playlist({id, title}) {


    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-md shadow-md">
        {/* Playlist Link */}
        <Link href={`/dashboard/playlists/${id}`} className="text-lg font-semibold cursor-pointer">
         {title}
        </Link>
  
        {/* Delete Button */}
        <div className="bg-red-600 p-2 text-2xl rounded-md cursor-pointer">
            <DeleteButton />
        </div>
      </div>
    );
}