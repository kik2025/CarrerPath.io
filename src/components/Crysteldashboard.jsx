import React, { useState } from 'react';
import { 
  ChevronRight, Check, Clock, Users, BookOpen, Mic, Music, Calendar, MapPin, 
  UserCheck, Award, Coffee, Globe, Briefcase, Heart, Star, BarChart2, Menu,
  MessageCircle, PenTool, Home, Settings, LogOut, User, BarChart, BookMarked, 
  LineChart, Zap, LucideActivity, Bell, FileText, Link2, Lightbulb, Mail, 
  Target, LifeBuoy, Book, Compass, Layout, Smile, Sparkles, ThumbsUp
} from 'lucide-react';

const EnhancedDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  
  // Progress steps
  const progressSteps = [
    { name: 'Profile Selected', completed: true, icon: <UserCheck size={18} /> },
    { name: 'Goals Identified', completed: true, icon: <Target size={18} /> },
    { name: 'Needs Assessment', completed: false, inProgress: true, icon: <ClipboardList size={18} /> },
    { name: 'Personalized Plan', completed: false, icon: <Map size={18} /> },
    { name: 'Resource Connection', completed: false, icon: <Link2 size={18} /> }
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
    },
    { 
      name: 'Explore local neighborhoods', 
      description: 'Visit different parts of the city to understand local life',
      icon: <MapPin size={20} />,
      status: 'To do',
      date: 'Weekend activity'
    }
  ];

  // Language practice tips
  const languageTips = [
    {
      title: 'B2 → C1 Vocabulary Building',
      description: 'Focus on industry-specific terms in marketing',
      icon: <BookOpen size={20} />,
      resource: 'Marketing Terminology Guide'
    },
    {
      title: 'Pronunciation Practice',
      description: 'Work on reducing accent in professional settings',
      icon: <Mic size={20} />,
      resource: 'Irish English Pronunciation Course'
    },
    {
      title: 'Business Communication',
      description: 'Practice formal emails and presentations',
      icon: <Mail size={20} />,
      resource: 'Business English Workshop'
    },
    {
      title: 'Cultural Context',
      description: 'Learn Irish expressions and communication styles',
      icon: <Globe size={20} />,
      resource: 'Irish Culture & Communication Guide'
    }
  ];

  // Job inspiration options
  const jobInspiration = [
    {
      title: 'Marketing Assistant',
      description: 'Apply your experience in a supportive team environment',
      location: 'Cork City',
      benefits: ['English practice', 'Local network', 'Marketing skills'],
      match: '85%'
    },
    {
      title: 'Retail Brand Ambassador',
      description: 'Represent brands while practicing customer communication',
      location: 'Galway',
      benefits: ['Public speaking', 'Sales experience', 'Flexible hours'],
      match: '78%'
    },
    {
      title: 'Tourism Marketing Intern',
      description: 'Combine marketing skills with cultural immersion',
      location: 'Dublin',
      benefits: ['Cultural knowledge', 'Local networking', 'Portfolio building'],
      match: '92%'
    }
  ];

  // Language learning data for chart
  const languageData = [
    { day: 'Mon', minutes: 25 },
    { day: 'Tue', minutes: 35 },
    { day: 'Wed', minutes: 15 },
    { day: 'Thu', minutes: 40 },
    { day: 'Fri', minutes: 30 },
    { day: 'Sat', minutes: 20 },
    { day: 'Sun', minutes: 45 }
  ];

  // Success stories
  const successStories = [
    {
      name: "Maria Garcia",
      origin: "Mexico",
      role: "Marketing Manager at Hubspot",
      timeline: "2 years to secure full-time role",
      quote: "Focus on building local relationships while showcasing your unique international perspective.",
      image: "https://via.placeholder.com/50"
    },
    {
      name: "Carlos Mendoza",
      origin: "Colombia",
      role: "Brand Strategist at Google",
      timeline: "18 months from arrival to job offer",
      quote: "The cultural insights from my background became my biggest competitive advantage.",
      image: "https://via.placeholder.com/50"
    }
  ];

  // Recommended mentors
  const recommendedMentors = [
    {
      name: "Sarah O'Brien",
      role: "Marketing Director",
      company: "LinkedIn Ireland",
      compatibility: "92%",
      expertise: ["Marketing Strategy", "Career Transition", "International Talent"],
      image: "https://via.placeholder.com/50"
    },
    {
      name: "Miguel Santos",
      role: "Senior Brand Manager",
      company: "Microsoft Dublin",
      compatibility: "87%",
      expertise: ["Market Entry", "Cultural Integration", "Professional English"],
      image: "https://via.placeholder.com/50"
    }
  ];

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

  // Handle chat messages
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    setChatMessages([...chatMessages, { sender: 'user', message: inputMessage }]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      if (inputMessage.toLowerCase().includes('plan') || inputMessage.toLowerCase().includes('development')) {
        response = "I've created a personalized development plan based on your profile and target role. Focus on improving your knowledge of the Irish market through networking and targeted research.";
      } else if (inputMessage.toLowerCase().includes('skill') || inputMessage.toLowerCase().includes('gap')) {
        response = "I've identified skill gaps in Irish market context, business English communication, and digital marketing tools. Your strongest areas are marketing strategy and business development.";
      } else if (inputMessage.toLowerCase().includes('resource') || inputMessage.toLowerCase().includes('recommend')) {
        response = "I recommend joining the Irish Marketing Association Mentorship Program and the Cork Business English for Professionals course to address your most pressing development needs.";
      } else {
        response = "I'm here to help with your career development in Ireland. I can analyze your skill gaps, create personalized development plans, and recommend relevant resources. What specific aspect would you like to explore today?";
      }
      
      setChatMessages(prev => [...prev, { sender: 'assistant', message: response }]);
    }, 1000);
    
    setInputMessage('');
  };

  // Example chat messages
  const [chatMessages, setChatMessages] = useState([
    { sender: 'assistant', message: "Welcome to Career Compass, Crystel! I've analyzed your extensive experience in Telco and Technology companies. Your marketing background is impressive, but I've identified some adaptation needs for the Irish market. Would you like to see your personalized development plan?" }
  ]);

  // Renders the progress chart for language learning
  const renderLanguageChart = () => {
    const maxMinutes = Math.max(...languageData.map(d => d.minutes));
    
    return (
      <div className="h-40 flex items-end justify-between mt-4">
        {languageData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex-1 flex flex-col justify-end">
              <div 
                className="w-8 bg-blue-500 rounded-t-md transition-all duration-500"
                style={{ 
                  height: `${(item.minutes / maxMinutes) * 100}%`,
                  backgroundColor: item.minutes >= 30 ? '#4F46E5' : '#93C5FD'
                }}
              ></div>
            </div>
            <span className="text-xs mt-2">{item.day}</span>
            <span className="text-xs text-gray-500">{item.minutes}m</span>
          </div>
        ))}
      </div>
    );
  };

  // Render skill gap radar chart
  const renderSkillGap = () => {
    return (
      <div className="relative h-72 mt-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-xs">
            {/* Simulated radar chart using CSS */}
            <div className="relative w-full h-full">
              {/* Background circles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-gray-200 opacity-20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border border-gray-200 opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full border border-gray-200 opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full border border-gray-200 opacity-50"></div>
              
              {/* Skill areas */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-gray-600">Marketing Strategy</div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs text-gray-600">Digital Skills</div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-xs text-gray-600">Local Network</div>
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 text-xs text-gray-600">Business English</div>
              <div className="absolute top-1/4 right-1/4 text-xs text-gray-600">Cultural Context</div>

              {/* Current skill polygon */}
              <div className="absolute top-1/2 left-1/2 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <polygon 
                    points="50,10 85,50 50,85 15,50" 
                    fill="rgba(79, 70, 229, 0.2)" 
                    stroke="#4F46E5" 
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              
              {/* Target skill polygon */}
              <div className="absolute top-1/2 left-1/2 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <polygon 
                    points="50,5 90,50 50,90 10,50" 
                    fill="none" 
                    stroke="#9CA3AF" 
                    strokeWidth="1.5"
                    strokeDasharray="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
                <p className="text-gray-600 mt-2">Based on your conversation, we've created a tailored plan to help with your cultural integration, English improvement, and job search.</p>
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
                    {step.completed ? <Check size={22} /> : (step.inProgress ? step.icon : step.icon)}
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
                {languageTips.slice(0, 3).map((tip, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                    <div className="flex items-start">
                      <div className="bg-indigo-50 text-indigo-600 rounded-lg p-2 mr-3">
                        {tip.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{tip.title}</h3>
                        <p className="text-gray-500 text-sm">{tip.description}</p>
                        <a href="#" className="text-blue-600 text-xs font-medium mt-1 flex items-center">
                          {tip.resource} <ChevronRight size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
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

          {/* Job Inspiration */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Job Inspiration 💼</h2>
              <button className="text-blue-600 text-sm font-medium flex items-center">
                View all matches <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jobInspiration.map((job, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800">{job.title}</h3>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{job.match}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{job.description}</p>
                  <div className="flex items-center text-gray-500 text-xs mt-2">
                    <MapPin size={14} className="mr-1" /> {job.location}
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-1">Benefits:</p>
                    <div className="flex flex-wrap gap-1">
                      {job.benefits.map((benefit, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="mt-3 text-sm text-blue-600 font-medium flex items-center">
                    Learn more <ChevronRight size={14} className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Goal Reminder */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-6 flex items-start">
            <div className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-4">
              <Target size={24} />
            </div>
            <div>
              <h3 className="font-medium text-blue-800">Your Weekly Goal</h3>
              <p className="text-blue-700 mt-1">Attend at least one cultural event and practice English for 30 minutes daily</p>
              <button className="mt-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Track Progress
              </button>
            </div>
          </div>
        </>
      );
    }
    
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Coming Soon</h2>
        <p className="text-gray-600">This section is under development. Please check back later!</p>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-700 text-sm">Use the navigation menu to explore other sections of your dashboard.</p>
        </div>
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
        </div>
        
        {/* Main Content */}
        <div className={`transition-all duration-300 flex-1 p-6 ${menuCollapsed ? 'ml-20' : 'ml-64'}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// These components weren't imported at the top
const ClipboardList = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
    <line x1="8" y1="11" x2="16" y2="11"></line>
    <line x1="8" y1="15" x2="16" y2="15"></line>
    <line x1="8" y1="19" x2="16" y2="19"></line>
  </svg>
);

const Map = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
    <line x1="8" y1="2" x2="8" y2="18"></line>
    <line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
);

export default EnhancedDashboard;