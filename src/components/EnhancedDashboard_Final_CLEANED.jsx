import React, { useState } from 'react';

const EnhancedDashboard = ({ startWithOnboarding = true, completeOnboarding }) => {
  const [activeTab, setActiveTab] = useState(startWithOnboarding ? 'onboarding' : 'home');
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  
  // Estados para el flujo de conversación
  const [chatStep, setChatStep] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [readyForDashboard, setReadyForDashboard] = useState(false);
  
  // Definir el flujo de conversación
  const chatFlow = [
    {
      message: "Hi Crystel! Thank you for sharing your CV. I have seen that you have been working very hard to stand where you are right now. Let's continue with this amazing path or journey to grow. Could you help me to know what are your goals to studying in Ireland?",
      options: []
    },
    {
      message: "Are you looking for a job just to generate money or are you looking for something that inspire you to grow in your field or get a new inspiration?",
      options: []
    },
    {
      message: "Amazing! Let's start to qualify your English level so I can help you to identify some job opportunities that will help you to improve your English language. Would you like to work on something else like:",
      options: [
        "1.- 💬 Emotional Support",
        "2.- 💼 Career Pathway Clarity",
        "3.- 🤝 Cultural Integration",
        "4.- 🧭 Purpose and Identity",
        "5.- 💬 Peer Support Systems",
        "6.- No thank you"
      ]
    },
    {
      message: "Amazing! Let me help you create a dashboard that will help you to grow and track your progress.",
      options: ["Continue to Dashboard"]
    }
  ];

  // Modificar handleOptionSelect para llamar a completeOnboarding
  const handleOptionSelect = (option, index) => {
    setSelectedOption(option);
    setChatStep(index + 1);

    if (option === "Continue to Dashboard") {
      setActiveTab('home');
      if (completeOnboarding) completeOnboarding();
    }
  };

  const renderContent = () => {
    if (activeTab === 'onboarding') {
      return (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Welcome to Career Compass!</h2>
          <p className="text-gray-600 mb-6">Let's start by understanding your needs and goals.</p>
          
          <div className="chat-assistant bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="chat-header flex justify-between items-center mb-4">
              <h3 className="chat-title text-lg font-semibold text-blue-600">Career Assistant</h3>
            </div>
            
            <div className="chat-messages max-h-96 overflow-y-auto mb-4 space-y-4">
              {chatFlow[chatStep]?.message}
            </div>
            
            <div className="chat-options">
              {chatFlow[chatStep]?.options.map((option, index) => (
                <button 
                  key={index} 
                  onClick={() => handleOptionSelect(option, chatStep)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg m-2"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h1 className="text-2xl font-bold">Dashboard Home</h1>
        {/* Contenido del dashboard */}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className={`bg-white shadow-md h-screen transition-all duration-300 ${menuCollapsed ? 'w-20' : 'w-64'} fixed z-10`}>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                <Globe size={20} />
              </div>
              {!menuCollapsed && <h1 className="text-lg font-bold text-blue-600">Career Compass</h1>}
            </div>
            <button 
              onClick={() => setMenuCollapsed(!menuCollapsed)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Menu size={20} />
            </button>
          </div>
          
          <div className="py-4">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 py-3 px-4 transition-colors ${
                  activeTab === item.id 
                    ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                {!menuCollapsed && <span className="font-medium">{item.name}</span>}
              </button>
            ))}
          </div>
          
          <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
            <button className="w-full flex items-center gap-3 py-3 text-gray-600 hover:text-red-600 transition-colors">
              <LogOut size={20} />
              {!menuCollapsed && <span className="font-medium">Log Out</span>}
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className={`transition-all duration-300 flex-1 p-6 ${menuCollapsed ? 'ml-20' : 'ml-64'}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default EnhancedDashboard;