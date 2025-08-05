"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

export default function SocialProofFooter() {
  const [currentSlogan, setCurrentSlogan] = useState(0);

  const slogans = [
    "Top traders don't guess, they track",
    "60% of TradeZella users hit profitability in 6 months",
    "Every trade you don't journal is a lesson lost"
  ];

  // Animate slogans
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-sm font-semibold text-gray-900 mr-3">400+ Reviews</span>
              <div className="flex items-center space-x-1">
                {/* 4 full stars */}
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                ))}
                {/* 1 partial star */}
                <div className="w-4 h-4 bg-gray-300 rounded-sm flex items-center justify-center overflow-hidden">
                  <div className="w-2 h-4 bg-green-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-900 ml-2">4.7</span>
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-5 w-5 text-[#4332EB] mr-2" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
              <span className="text-lg font-semibold">50,000+</span>
            </div>
            <p className="text-sm text-gray-600">Active traders</p>
          </div>
          <div className="text-center">
            {/* Commented out animated slogans */}
            {/* <div className="h-8 flex items-center justify-center mb-2">
              {slogans.map((slogan, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-1000 ${
                    currentSlogan === index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                >
                  <p className="text-xs text-gray-700 italic text-center max-w-[120px] leading-tight">
                    {slogan}
                  </p>
                </div>
              ))}
            </div> */}
            
            {/* Trusted by section */}
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-sm font-semibold text-gray-900">Trusted by:</span>
              <div className="flex -space-x-1">
                {[
                  { emoji: '👨', name: 'John Doe', color: '' },
                  { emoji: '👩', name: 'Jane Doe', color: 'ring-2 ring-[#4332EB]' },
                  { emoji: '👨', name: 'John Smith', color: '' },
                  { emoji: '👨', name: 'Mike Johnson', color: '' },
                  { emoji: '👨', name: 'David Wilson', color: '' },
                  { emoji: '👤', name: 'Alex Brown', color: '' }
                ].map((person, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600 ${person.color} relative group cursor-pointer`}
                    title={person.name}
                  >
                    <span>{person.emoji}</span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                      {person.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 