import Link from "next/link";



export default function Card({ title, url }) {
    return (
      <Link
      href={`/${url}`}
        className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform cursor-pointer"
      >
        
        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      </Link>
    );
  }
  