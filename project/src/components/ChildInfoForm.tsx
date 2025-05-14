// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

// interface ChildInfoFormProps {
  // onComplete: (childName: string) => void;
// }

// const ChildInfoForm: React.FC<ChildInfoFormProps> = ({ onComplete }) => {
  // const [childName, setChildName] = useState('');
  // const navigate = useNavigate();

  // const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    // if (childName.trim()) {
      // onComplete(childName);
      // toast.success('Child information saved successfully!');
      // navigate('/dashboard');
    // } else {
      // toast.error('Please enter your child\'s name');
    // }
  // };

  // return (
    // <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      // <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        // <div className="text-center mb-8">
          // <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome!</h1>
          // <p className="text-gray-600">Please provide your child's information</p>
        // </div>

        // <form onSubmit={handleSubmit} className="space-y-6">
          // <div>
            // <label className="block text-sm font-medium text-gray-700 mb-2">Child's Name</label>
            // <input
              // type="text"
              // className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              // placeholder="Enter your child's name"
              // value={childName}
              // onChange={(e) => setChildName(e.target.value)}
              // required
            // />
          // </div>

          // <button
            // type="submit"
            // className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
          // >
            // Continue
          // </button>
        // </form>
      // </div>
    // </div>
  // );
// };

// export default ChildInfoForm;
import React, { useState } from 'react';

const ChildInfoForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Child Info:\nName: ${name}\nAge: ${age}\nGrade: ${grade}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Enter Child Information</h2>
      <div className="flex flex-col sm:flex-row sm:gap-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded mb-2 sm:mb-0"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          className="w-full p-2 border border-gray-300 rounded mb-2 sm:mb-0"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Grade"
          className="w-full p-2 border border-gray-300 rounded"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ChildInfoForm;
