// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
  // { subject: 'Math', grade: 85 },
  // { subject: 'Science', grade: 92 },
  // { subject: 'English', grade: 78 },
  // { subject: 'History', grade: 88 },
  // { subject: 'Art', grade: 95 },
// ];

// const PerformanceCard = () => {
  // return (
    // <div className="bg-white p-6 rounded-xl shadow-sm">
      // <h2 className="text-xl font-semibold text-gray-800 mb-4">Academic Performance</h2>
      // <div className="h-64">
        // <ResponsiveContainer width="100%" height="100%">
          // <BarChart data={data}>
            // <CartesianGrid strokeDasharray="3 3" />
            // <XAxis dataKey="subject" />
            // <YAxis />
            // <Tooltip />
            // <Bar dataKey="grade" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          // </BarChart>
        // </ResponsiveContainer>
      // </div>
      // <div className="mt-4">
        // <p className="text-sm text-gray-600">Weekly Progress: <span className="text-green-600">↑ 5%</span></p>
      // </div>
    // </div>
  // );
// };

// export default PerformanceCard;
import React from 'react';

const PerformanceCard = () => {
  const scores = {
    Math: 92,
    Science: 88,
    English: 85,
    History: 90,
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md w-full">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Performance Report</h2>
      <ul className="space-y-2">
        {Object.entries(scores).map(([subject, score], index) => (
          <li
            key={index}
            className="flex justify-between items-center text-sm sm:text-base border-b pb-1"
          >
            <span>{subject}</span>
            <span className="font-medium">{score}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceCard;
