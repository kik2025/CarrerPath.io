import React, { useState, useEffect } from 'react';
import { Globe, BarChart2, User, Award, Target, Book, Clipboard, MessageSquare, ChevronRight } from 'lucide-react';
import { profiles } from './data/profiles';
import { profileSkills } from './data/skills';
import { profileChatMessages } from './data/messages';
import { getProfileResponse } from './data/responses';

const CareerDevelopmentAI = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() === '' || !selectedProfile) return;
    setChatMessages([...chatMessages, { sender: 'user', message: inputMessage }]);
    setTimeout(() => {
      const response = getProfileResponse(selectedProfile.id, inputMessage);
      setChatMessages(prev => [...prev, { sender: 'assistant', message: response }]);
    }, 1000);
    setInputMessage('');
  };

  useEffect(() => {
    if (selectedProfile) {
      setChatMessages(profileChatMessages[selectedProfile.id]);
    }
  }, [selectedProfile]);

  if (!selectedProfile) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
              <Globe size={20} />
            </div>
            <h1 className="text-2xl font-bold text-blue-600">Career Compass</h1>
          </div>
          <h2 className="text-xl font-medium mb-6">Select an International Student Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profiles.map(profile => (
              <div
                key={profile.id}
                onClick={() => setSelectedProfile(profile)}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-medium mb-4">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-medium">{profile.name}</h3>
                <p className="text-gray-500">{profile.origin} • {profile.age} years</p>
                <p className="mt-2 text-sm">{profile.program}</p>
                <p className="text-sm">{profile.university}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome, {selectedProfile.name}!</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-medium mb-2">AI Career Assistant</h2>
        <div className="h-64 overflow-y-auto mb-4 flex flex-col space-y-3">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === 'assistant'
                  ? 'bg-blue-50 text-gray-800 mr-auto rounded-tl-none'
                  : 'bg-blue-600 text-white ml-auto rounded-tr-none'
              }`}
            >
              {msg.message}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ask about your career development..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={handleSendMessage}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerDevelopmentAI;