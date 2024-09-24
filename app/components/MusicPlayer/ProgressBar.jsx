export default function ProgressBar(){
    const calculateProgress = () => {
      return (progress / duration) * 100;
    };
  
    return (
      <div className="w-full bg-gray-600 h-2 rounded-full">
        <div
          className="bg-green-500 h-2 rounded-full"
        ></div>
      </div>
    );
  };
  
