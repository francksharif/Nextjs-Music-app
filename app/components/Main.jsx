import Card from "./Cards";




export default function Main(){

    const links = [
        {
            id: 1,
            title: "Songs",
            url: "songs",
        },
        {
            id: 2,
            title: "Your Playlists",
            url: "playlists",
        }
    ]



    return (

        <div className="mt-4 max-w-7xl mx-auto px-2 sm:px-6 justify-center lg:px-8 flex gap-6 p-4">
            {
                links.map(link => (
                    <Card 
                    key={link.id} 
                    title={link.title} 
                    url={link.url} />
                ))
            }
        </div>


    );
}