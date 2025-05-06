import React from 'react';

const Profile = ({ onSubmit }) => {
  const handleSubmit = () => {
    // Simular datos de perfil
    const data = {
      name: "Crystel León",
      origin: "Mexico",
      englishLevel: "B2",
      targetRole: "Marketing Manager"
    };
    onSubmit(data);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Create Your Profile</h1>
      <p className="text-gray-600 mb-6">Please fill out your information to get started.</p>
      <button 
        onClick={handleSubmit}
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Submit Profile
      </button>
    </div>
  );
};

export default Profile;