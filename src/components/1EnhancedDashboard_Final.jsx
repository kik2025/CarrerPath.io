
import React from 'react';
import {
  ChevronRight, MessageSquare, Heart, Star, LifeBuoy, MapPin,
  Users, Smile, Clock, PenTool, Check, Briefcase, Award
} from 'lucide-react';

const EnhancedDashboard_Final = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="space-y-4">
        <div className="border border-gray-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-800">Notification Preferences</h3>
            <button className="text-blue-600 text-sm">Manage</button>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-medium text-gray-800 mb-3">Today's Prompt</h3>
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
            <p className="text-indigo-700 text-sm">
              What Irish cultural practice or custom has surprised you the most so far, and why?
            </p>
            <textarea 
              className="w-full border border-gray-200 rounded-lg p-3 mt-3 text-sm" 
              rows="3"
              placeholder="Share your thoughts here..."
            ></textarea>
            <button className="mt-3 bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Save Reflection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDashboard_Final;
