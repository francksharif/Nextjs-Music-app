import PlayerButton from './PlayerButtons';
import ProgressBar from './ProgressBar';

 export default function Player(){
  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex flex-col items-center space-y-4">
  {/* Song Title */}
  <div className="text-lg font-semibold mb-2 text-center">
    Song Title
  </div>

  <div className="w-full sm:w-auto flex flex-col items-center space-y-4">
    {/* Controls */}
    <div className="flex justify-center items-center space-x-10">
      <PlayerButton iconType="previous" onClick={() => {}} />
      <PlayerButton iconType="play" onClick={() => {}} />
      <PlayerButton iconType="next" onClick={() => {}} />
    </div>

    {/* ProgressBar */}
    <div className="w-full sm:w-96">
      <ProgressBar />
    </div>
  </div>
</div>

  
  );
};

