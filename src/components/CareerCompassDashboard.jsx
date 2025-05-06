import React, { useState } from 'react';
import { 
  Home, User, LineChart, Globe, Briefcase, Users, BookMarked, 
  Heart, Settings, ChevronRight, MessageCircle, Send, 
  Menu, LogOut, Check, Clock, Target, Calendar, FileText, Mic, BookOpen
} from 'lucide-react';

const InteractiveSolutionDesign = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'assistant', text: "Hi Crystel! I'm your Career Compass assistant. How can I help you today?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  
  // Navigation items
  const navItems = [
    { name: 'Home', icon: <Home size={22} />, id: 'home' },
    { name: 'Profile', icon: <User size={22} />, id: 'profile' },
    { name: 'Language Progress', icon: <LineChart size={22} />, id: 'language' },
    { name: 'Cultural Integration', icon: <Globe size={22} />, id: 'cultural' },
    { name: 'Career Path', icon: <Briefcase size={22} />, id: 'career' },
    { name: 'Community', icon: <Users size={22} />, id: 'community' },
    { name: 'Resources', icon: <BookMarked size={22} />, id: 'resources' },
    { name: 'Wellness', icon: <Heart size={22} />, id: 'wellness' },
    { name: 'Settings', icon: <Settings size={22} />, id: 'settings' },
  ];
  
  // Progress steps
  const progressSteps = [
    { name: 'Profile Selected', completed: true, icon: <User size={18} /> },
    { name: 'Goals Identified', completed: true, icon: <Target size={18} /> },
    { name: 'Needs Assessment', completed: false, inProgress: true, icon: <Clock size={18} /> },
    { name: 'Personalized Plan', completed: false, icon: <Calendar size={18} /> },
    { name: 'Resource Connection', completed: false, icon: <FileText size={18} /> }
  ];

  // Cultural integration activities
  const culturalActivities = [
    { 
      name: 'Attend a local cultural event', 
      description: 'Find an Irish cultural festival or community event',
      icon: <Calendar size={20} />,
      status: 'To do',
      date: 'Within 2 weeks'
    },
    { 
      name: 'Join a conversation club', 
      description: 'Weekly English conversation practice with locals',
      icon: <Users size={20} />,
      status: 'In progress',
      date: 'Started 1 week ago'
    },
    { 
      name: 'Practice English with peers', 
      description: 'Language exchange with other international students',
      icon: <Mic size={20} />,
      status: 'To do',
      date: 'Schedule this week'
    }
  ];

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    setMessages([...messages, { sender: 'user', text: inputMessage }]);
    setInputMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      let response;
      if (inputMessage.toLowerCase().includes('job') || inputMessage.toLowerCase().includes('work')) {
        response = "Based on your Marketing background, I recommend exploring entry positions like Marketing Assistant or Retail Brand Ambassador in Cork. These roles would help you practice English while building local experience. Would you like me to provide specific job listings?";
      } else if (inputMessage.toLowerCase().includes('english') || inputMessage.toLowerCase().includes('language')) {
        response = "Your current English level is B2 (Upper Intermediate). I recommend focusing on business vocabulary and presentation skills. There's a conversation club meeting this Thursday at the Central Library. Should I add it to your calendar?";
      } else if (inputMessage.toLowerCase().includes('visa') || inputMessage.toLowerCase().includes('permit')) {
        response = "Your current Student Visa (Stamp 2) is valid through December 2025. After graduation, you'll be eligible for the Third Level Graduate Scheme (Stamp 1G) for 2 years, allowing full-time work. Would you like more details about Critical Skills Employment Permits?";
      } else {
        response = "Let's start to build your personalized Dashboard!"
      }

      setMessages(prevMessages => [...prevMessages, { sender: 'assistant', text: response }]);
    }, 1000);
  };
  
  // Render content based on active tab
  const renderContent = () => {
    if (activeTab === 'home') {
      return (
        <>
          {/* Welcome Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Hi Crystel 👋 Welcome to your personalized dashboard!</h1>
                <p className="text-gray-600 mt-2">Based on your profile, we've created a tailored plan to help with your cultural integration, English improvement, and job search in Ireland.</p>
              </div>
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                CL
              </div>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Journey Progress</h2>
            <div className="flex items-center justify-between">
              {progressSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    step.completed 
                      ? 'bg-green-100 text-green-600' 
                      : step.inProgress 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step.completed ? <Check size={22} /> : step.icon}
                  </div>
                  <p className={`text-sm mt-2 text-center ${
                    step.completed 
                      ? 'text-green-600 font-medium' 
                      : step.inProgress 
                        ? 'text-blue-600 font-medium' 
                        : 'text-gray-400'
                  }`}>
                    {step.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cultural Integration Tracker */}
            <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Cultural Integration Tracker 🌍</h2>
                <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Priority Focus</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {culturalActivities.map((activity, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-4 transition-all hover:border-blue-200 hover:shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-blue-50 text-blue-600 rounded-lg p-2 mr-3">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-800">{activity.name}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            activity.status === 'In progress' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {activity.status}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">{activity.description}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-blue-600 font-medium text-sm flex items-center">
                See more activities <ChevronRight size={16} className="ml-1" />
              </button>
            </div>

            {/* Language Practice Tips */}
            <div className="bg-white rounded-xl shadow-sm p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Language Practice Tips 🗣️</h2>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Level B2</span>
              </div>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <div className="flex items-start">
                    <div className="bg-indigo-50 text-indigo-600 rounded-lg p-2 mr-3">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">B2 → C1 Vocabulary Building</h3>
                      <p className="text-gray-500 text-sm">Focus on industry-specific terms in marketing</p>
                      <a href="#" className="text-blue-600 text-xs font-medium mt-1 flex items-center">
                        Marketing Terminology Guide <ChevronRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-100 pb-3">
                  <div className="flex items-start">
                    <div className="bg-indigo-50 text-indigo-600 rounded-lg p-2 mr-3">
                      <Mic size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Pronunciation Practice</h3>
                      <p className="text-gray-500 text-sm">Work on reducing accent in professional settings</p>
                      <a href="#" className="text-blue-600 text-xs font-medium mt-1 flex items-center">
                        Irish English Pronunciation Course <ChevronRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="font-medium text-gray-800 mb-2">Practice Streak: 5 days 🔥</h3>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-full bg-green-500 rounded-l-full"></div>
                  <div className="h-2 w-full bg-green-500"></div>
                  <div className="h-2 w-full bg-green-500"></div>
                  <div className="h-2 w-full bg-green-500"></div>
                  <div className="h-2 w-full bg-green-500"></div>
                  <div className="h-2 w-full bg-gray-200"></div>
                  <div className="h-2 w-full bg-gray-200 rounded-r-full"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">2 more days to reach your weekly goal!</p>
              </div>
            </div>
          </div>
        </>
      );
    } else if (activeTab === 'language') {
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Language Learning Progress</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <h3 className="font-medium text-gray-700 mb-3">Practice Activity</h3>
                <div className="h-64 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                  <p className="text-gray-400">Language progress chart visualization</p>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mt-6">
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <p className="text-indigo-600 text-xs font-medium">Speaking</p>
                    <p className="text-2xl font-bold text-indigo-700 mt-1">45<span className="text-sm font-normal">min</span></p>
                    <p className="text-xs text-indigo-500 mt-1">+12% from last week</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-600 text-xs font-medium">Listening</p>
                    <p className="text-2xl font-bold text-blue-700 mt-1">95<span className="text-sm font-normal">min</span></p>
                    <p className="text-xs text-blue-500 mt-1">+5% from last week</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-green-600 text-xs font-medium">Reading</p>
                    <p className="text-2xl font-bold text-green-700 mt-1">60<span className="text-sm font-normal">min</span></p>
                    <p className="text-xs text-green-500 mt-1">+20% from last week</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-purple-600 text-xs font-medium">Writing</p>
                    <p className="text-2xl font-bold text-purple-700 mt-1">35<span className="text-sm font-normal">min</span></p>
                    <p className="text-xs text-purple-500 mt-1">-5% from last week</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Vocabulary Growth</h3>
                <div className="bg-white border border-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-gray-600">New words this week</p>
                    <p className="text-lg font-bold text-gray-800">42</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-gray-600">Total vocabulary</p>
                    <p className="text-lg font-bold text-gray-800">685</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Latest Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-full">Marketing Terms</span>
                      <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Irish Culture</span>
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Business English</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full py-2 border border-indigo-600 text-indigo-600 rounded-lg text-xs font-medium">
                    Review Vocabulary
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recommended Practice Activities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-100 rounded-lg p-4 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer">
                <div className="flex items-start">
                  <div className="bg-indigo-50 text-indigo-600 p-3 rounded-lg mr-3">
                    <Mic size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Practice Interview Questions</h3>
                    <p className="text-gray-600 text-sm">Record responses to common marketing interview questions</p>
                    <p className="text-gray-500 text-xs mt-1">Difficulty: Intermediate | 20 minutes</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer">
                <div className="flex items-start">
                  <div className="bg-green-50 text-green-600 p-3 rounded-lg mr-3">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Cover Letter Writing</h3>
                    <p className="text-gray-600 text-sm">Draft a cover letter for an Irish marketing position</p>
                    <p className="text-gray-500 text-xs mt-1">Difficulty: Challenging | 45 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'career') {
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Career Milestone Timeline</h2>
            
            <div className="relative pb-12">
              <div className="absolute top-0 left-6 h-full w-px bg-gray-200"></div>
              
              <div className="relative flex items-start mb-6">
                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <div className="ml-20">
                  <h3 className="font-medium text-gray-800">Academic Foundation</h3>
                  <p className="text-gray-500 text-sm mt-1">Completed Master's in Management and Marketing</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Strategic Marketing</span>
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Business Development</span>
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Management</span>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-start mb-6">
                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full">
                  <Clock size={20} />
                </div>
                <div className="ml-20">
                  <h3 className="font-medium text-gray-800">Current Focus: Local Market Adaptation</h3>
                  <p className="text-gray-500 text-sm mt-1">Building language proficiency and Irish market knowledge</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 my-2">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Business English</span>
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Irish Market Context</span>
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Cultural Integration</span>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-400 rounded-full">
                  <Briefcase size={20} />
                </div>
                <div className="ml-20">
                  <h3 className="font-medium text-gray-600">Career Entry: Marketing Assistant</h3>
                  <p className="text-gray-500 text-sm mt-1">Initial position to build local experience - Est. 3-6 months</p>
                  <p className="text-gray-400 text-xs mt-1">Requirements: B2/C1 English, Local knowledge, Basic digital skills</p>
                  <div className="mt-2 flex justify-between">
                    <span className="text-xs text-gray-500">Visa pathway: Stamp 1G</span>
                    <span className="text-xs text-gray-500">Timeline: Q3 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Skill Gap Analysis</h2>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Updated Weekly</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2 h-64 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                <p className="text-gray-400">Skills radar chart visualization</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Prioritized Development</h3>
                
                <div className="space-y-4">
                  <div className="border border-red-100 rounded-lg p-3 bg-red-50">
                    <h4 className="text-sm font-medium text-red-800">High Priority</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-start">
                        <div className="text-red-600 mr-2">•</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-red-800">Irish Market Knowledge</p>
                          <p className="text-xs text-red-600">40% → 80%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-yellow-100 rounded-lg p-3 bg-yellow-50">
                    <h4 className="text-sm font-medium text-yellow-800">Medium Priority</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-start">
                        <div className="text-yellow-600 mr-2">•</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-yellow-800">Business English</p>
                          <p className="text-xs text-yellow-600">65% → 85%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'cultural') {
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Cultural Integration Journey</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Integration Level:</span>
                <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Exploring</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '25%' }}></div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-600 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mb-2">
                    <Check size={18} />
                  </div>
                  <span className="text-center text-xs">Arrival</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                    <Globe size={18} />
                  </div>
                  <span className="text-center text-xs">Exploring</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center mb-2">
                    <Users size={18} />
                  </div>
                  <span className="text-center text-xs">Connecting</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center mb-2">
                    <Heart size={18} />
                  </div>
                  <span className="text-center text-xs">Belonging</span>
                </div>
              </div>
            </div>
            
            <h3 className="font-medium text-gray-700 mb-3">Upcoming Local Events</h3>
            <div className="space-y-3">
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-lg p-2 flex flex-col items-center justify-center mr-3 min-w-14">
                    <span className="text-gray-800 text-xs font-bold">MAY</span>
                    <span className="text-gray-800 text-lg font-bold">12</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">Cork International Food Festival</h4>
                    <p className="text-gray-600 text-sm">Experience a variety of cuisines and meet locals</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock size={14} className="mr-1" /> 12:00 - 20:00
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-600 text-sm font-medium whitespace-nowrap">
                    Add to Plan
                  </button>
                </div>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-lg p-2 flex flex-col items-center justify-center mr-3 min-w-14">
                    <span className="text-gray-800 text-xs font-bold">MAY</span>
                    <span className="text-gray-800 text-lg font-bold">15</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">Irish Language Taster Session</h4>
                    <p className="text-gray-600 text-sm">Learn basic Irish phrases and cultural context</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock size={14} className="mr-1" /> 18:30 - 20:00
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-600 text-sm font-medium whitespace-nowrap">
                    Add to Plan
                  </button>
                </div>
              </div>
            </div>
            
            <button className="mt-4 w-full py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium">
              View All Events
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Cultural Understanding</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-100 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Irish Business Culture</h3>
                <p className="text-gray-600 text-sm">Key insights to help you navigate professional settings in Ireland</p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Relationship-focused business practices</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Importance of small talk before business</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full p-1 mr-2 mt-0.5">
                      <Clock size={12} className="text-gray-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Understanding of Irish humor in the workplace</p>
                  </div>
                </div>
                <button className="mt-3 text-blue-600 text-sm font-medium flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'community') {
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Local Community Map</h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Events</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Groups</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Resources</span>
                </div>
              </div>
            </div>
            
            {/* Simulated map using just CSS and HTML */}
            <div className="w-full h-96 bg-gray-100 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-200"></div>
              
              {/* Map elements */}
              <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                3
              </div>
              <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                5
              </div>
              <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                2
              </div>
              <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">
                4
              </div>
              <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">
                1
              </div>
              
              {/* Current location */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white flex items-center justify-center text-white text-xs">
                  You
                </div>
                <div className="w-24 h-24 bg-red-500 opacity-10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {/* Location card popup */}
              <div className="absolute top-1/3 left-1/3 bg-white rounded-lg shadow-md p-3 w-64">
                <h3 className="font-medium text-gray-800">Cork International Students Association</h3>
                <p className="text-gray-600 text-xs mt-1">Weekly meetups & cultural exchange events</p>
                <div className="flex items-center text-gray-500 text-xs mt-2">
                  <Clock size={12} className="mr-1" /> 0.8 km away
                </div>
                <button className="mt-2 text-blue-600 text-xs font-medium">View Details</button>
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Find Events Near Me
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">International Student Groups</h2>
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">5 nearby</span>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-all">
                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">
                    <Users size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">UCC International Society</h3>
                    <p className="text-gray-600 text-sm">Cultural exchange events and social gatherings</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Users size={12} className="mr-1" /> 320 members
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <button className="text-purple-600 text-sm font-medium">Join Group</button>
                </div>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-all">
                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">
                    <Users size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">Cork Latino Network</h3>
                    <p className="text-gray-600 text-sm">Spanish-speaking community support and networking</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Users size={12} className="mr-1" /> 185 members
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <button className="text-purple-600 text-sm font-medium">Join Group</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'resources') {
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Personalized Resource Library</h2>
              <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">18 resources saved</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                    <FileText size={24} />
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">Marketing Terminology Guide</h3>
                  <p className="text-gray-600 text-sm flex-grow">Essential marketing terms and phrases for non-native speakers in the Irish context.</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center text-gray-500 text-xs">
                      <BookOpen size={12} className="mr-1" /> PDF Guide
                    </div>
                    <button className="text-blue-600 text-xs font-medium">View</button>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-indigo-50 text-indigo-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                    <Mic size={24} />
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">Business English Podcasts</h3>
                  <p className="text-gray-600 text-sm flex-grow">Weekly episodes focused on professional communication skills and workplace scenarios.</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock size={12} className="mr-1" /> Audio Series
                    </div>
                    <button className="text-indigo-600 text-xs font-medium">Listen</button>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-purple-50 text-purple-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                    <Globe size={24} />
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">Irish Business Culture</h3>
                  <p className="text-gray-600 text-sm flex-grow">Guide to understanding workplace norms, communication styles, and professional expectations in Ireland.</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center text-gray-500 text-xs">
                      <BookOpen size={12} className="mr-1" /> Online Course
                    </div>
                    <button className="text-purple-600 text-xs font-medium">Access</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-gray-700 mb-3">Resource Categories</h3>
              <div className="flex flex-wrap gap-2">
                <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full">
                  Language Skills
                </button>
                <button className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1.5 rounded-full">
                  Marketing Knowledge
                </button>
                <button className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1.5 rounded-full">
                  Cultural Integration
                </button>
                <button className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1.5 rounded-full">
                  Career Development
                </button>
                <button className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1.5 rounded-full">
                  Visa Information
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'wellness') {
      return (
        <div className="space-y-6">
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
            <div className="flex items-start">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mr-4">
                <Heart size={24} />
              </div>
              <div>
                <h2 className="text-lg font-medium text-indigo-800">Adaptation Journey Support</h2>
                <p className="text-indigo-700 mt-2">
                  Cultural transition is both exciting and challenging. This space is designed to support your well-being 
                  during this important journey. Remember that feelings of uncertainty or homesickness are normal and shared 
                  by many international students.
                </p>
                <button className="mt-3 bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Take Wellness Check-in
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Adaptation Curve</h2>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Your Progress</span>
              </div>
              
              {/* Simulated adaptation curve chart */}
              <div className="h-64 relative">
                <div className="absolute inset-0">
                  <svg viewBox="0 0 100 50" className="w-full h-full">
                    <path 
                      d="M0,25 C10,5 20,40 30,20 C40,0 50,15 60,35 C70,45 80,25 90,15 L100,10" 
                      fill="none" 
                      stroke="#4F46E5" 
                      strokeWidth="1.5"
                    />
                    <circle cx="30" cy="20" r="3" fill="#4F46E5" />
                  </svg>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500">
                  <span>Arrival</span>
                  <span>Honeymoon</span>
                  <span>Culture<br/>Shock</span>
                  <span>Adjustment</span>
                  <span>Adaptation</span>
                </div>
                
                <div className="absolute top-1/2 transform -translate-y-1/2 left-[30%]">
                  <div className="bg-white border border-indigo-200 rounded-lg p-2 shadow-sm">
                    <div className="font-medium text-gray-800">You are here</div>
                    <p className="text-xs text-gray-600">Navigating early culture shock</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium text-gray-700 mb-3">Common at this stage:</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="text-indigo-600 mr-2">•</div>
                    <p className="text-sm text-gray-600">Feelings of frustration with language barriers</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-indigo-600 mr-2">•</div>
                    <p className="text-sm text-gray-600">Missing familiar routines and support systems</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-indigo-600 mr-2">•</div>
                    <p className="text-sm text-gray-600">Uncertainty about professional identity in new context</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Well-being Resources</h2>
                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">Personalized</span>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-100 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">UCC International Student Support</h3>
                      <p className="text-gray-600 text-sm">Free counseling services specifically for international students.</p>
                      <div className="flex items-center text-gray-500 text-xs mt-2">
                        <Clock size={12} className="mr-1" /> Student Center, 2nd Floor
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-100 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                      <Users size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Cultural Adjustment Support Group</h3>
                      <p className="text-gray-600 text-sm">Weekly meetings with fellow international students navigating similar challenges.</p>
                      <div className="flex items-center text-gray-500 text-xs mt-2">
                        <Clock size={12} className="mr-1" /> Wednesdays, 6:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="font-medium text-gray-700 mb-3">Daily Well-being Practice</h3>
                <div className="bg-indigo-50 rounded-lg p-3">
                  <p className="text-indigo-700 text-sm">Take 5 minutes to practice deep breathing or journaling about one positive interaction today.</p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-lg flex items-center">
                      <Clock size={12} className="mr-1" /> 2-Minute Breathing
                    </button>
                    <button className="bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-lg flex items-center">
                      <FileText size={12} className="mr-1" /> Quick Journal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'settings') {
      return (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">System Settings</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-3">Account Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-600">Language</p>
                    <p className="text-gray-500 text-sm">Platform interface language</p>
                  </div>
                  <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
                    <option>English</option>
                    <option>Español</option>
                    <option>Français</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-600">Theme</p>
                    <p className="text-gray-500 text-sm">Visual appearance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                      <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 rounded-full"></button>
                    <button className="w-8 h-8 bg-indigo-600 rounded-full"></button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-600">Notifications</p>
                    <p className="text-gray-500 text-sm">Email and push notifications</p>
                  </div>
                  <div className="flex items-center h-6">
                    <input type="checkbox" className="h-4 w-4" defaultChecked />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
              <h3 className="font-medium text-gray-700 mb-3">Privacy Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-600">Profile Visibility</p>
                    <p className="text-gray-500 text-sm">Who can see your activity</p>
                  </div>
                  <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
                    <option>Only Me</option>
                    <option>My Network</option>
                    <option>Everyone</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-600">Data Sharing</p>
                    <p className="text-gray-500 text-sm">Used for personalized recommendations</p>
                  </div>
                  <div className="flex items-center h-6">
                    <input type="checkbox" className="h-4 w-4" defaultChecked />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
              <h3 className="font-medium text-gray-700 mb-3">Support & Feedback</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
                  <div className="flex items-center">
                    <MessageCircle size={18} className="text-gray-600 mr-2" />
                    <span className="text-gray-600">Contact Support</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'profile') {
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start gap-6">
              <div className="bg-blue-600 text-white rounded-full w-24 h-24 flex items-center justify-center text-3xl font-medium">
                CL
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Crystel León</h2>
                    <p className="text-gray-500">MSc Management and Marketing</p>
                    <p className="text-gray-500">University College Cork</p>
                  </div>
                  <button className="text-blue-600 font-medium flex items-center">
                    Edit Profile <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Country of Origin</p>
                    <p className="text-gray-800">Mexico</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-600">English Level</p>
                    <p className="text-gray-800">B2 (Upper Intermediate)</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-600">Target Role</p>
                    <p className="text-gray-800">Marketing Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Background & Experience</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700">Professional Experience</h3>
                  <p className="text-gray-600 text-sm mt-1">10+ years in Telco and Technology companies, specializing in retail channel management and marketing. Previous roles include Business Development Manager, Product Manager, and Key Account Manager.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700">International Experience</h3>
                  <p className="text-gray-600 text-sm mt-1">Managed market entry strategies for international brands in the Latin American market. Led cross-cultural teams across different regions.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700">Education</h3>
                  <p className="text-gray-600 text-sm mt-1">MSc in Management and Marketing, University College Cork (2021-2022)
                  Bachelor of Accounting and Finance Degree, Universidad de las Américas Puebla (1999-2003)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Self-Assessment</h2>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Last updated: 5 days ago</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700">Current Strengths</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Marketing Strategy</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Business Development</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Customer Relationship Management</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">International Market Experience</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700">Development Needs</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Irish Market Knowledge</span>
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Business English Proficiency</span>
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Digital Marketing Tools</span>
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Local Professional Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Select a tab from the sidebar to view content</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
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
      
      {/* Chat Button */}
      <button 
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat Panel */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-xl shadow-lg overflow-hidden z-20 border border-gray-200">
          <div className="flex items-center justify-between bg-blue-600 text-white p-4">
            <h3 className="font-medium">Career Compass Assistant</h3>
            <button onClick={() => setChatOpen(false)} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Type your message..."
              />
              <button 
                onClick={handleSendMessage}
                className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveSolutionDesign;