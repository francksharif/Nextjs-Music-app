import Link from "next/link"

export default function page() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen flex flex-col items-center space-y-10 justify-center">
      
      <h1 className="text-2xl ">MUSIC APP</h1> 


      {/** Navigation buttons */}

    <div className="flex gap-4">
        <Link href={'/login'} className="border-2 p-3 bg-blue-950">Login Page</Link>
        <Link href={'/signup'} className="border-2 p-3 bg-indigo-700">Signup Page</Link>
    </div>
        
    

    </div>
  )
}
