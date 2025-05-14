// import React from 'react';
// import { Smile, Meh, Frown } from 'lucide-react';

// const moodData = [
  // { date: 'Mon', mood: 'happy', icon: Smile, color: 'text-green-500' },
  // { date: 'Tue', mood: 'neutral', icon: Meh, color: 'text-yellow-500' },
  // { date: 'Wed', mood: 'happy', icon: Smile, color: 'text-green-500' },
  // { date: 'Thu', mood: 'sad', icon: Frown, color: 'text-red-500' },
  // { date: 'Fri', mood: 'happy', icon: Smile, color: 'text-green-500' },
// ];

// const MoodTrackerCard = () => {
  // return (
    // <div className="bg-white p-6 rounded-xl shadow-sm">
      // <h2 className="text-xl font-semibold text-gray-800 mb-4">Emotional Well-being</h2>
      // <div className="space-y-4">
        // {moodData.map((day, index) => {
          // const Icon = day.icon;
          // return (
            // <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              // <span className="font-medium text-gray-600">{day.date}</span>
              // <div className="flex items-center space-x-2">
                // <Icon className={`${day.color}`} size={24} />
                // <span className="capitalize text-gray-600">{day.mood}</span>
              // </div>
            // </div>
          // );
        // })}
      // </div>
    // </div>
  // );
// };

// export default MoodTrackerCard;
import React from 'react';

const MoodTrackerCard = () => {
  const moods = ['Happy', 'Sad', 'Angry', 'Excited', 'Tired'];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md w-full">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Mood Tracker</h2>
      <div className="flex flex-wrap gap-3">
        {moods.map((mood, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-green-400 hover:bg-green-500 text-white rounded text-sm sm:text-base"
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTrackerCard;
