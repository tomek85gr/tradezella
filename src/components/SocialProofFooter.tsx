"use client";

import { useState, useEffect } from "react";


export default function SocialProofFooter() {


  const slogans = [
    "Top traders don't guess, they track",
    "60% of TradeZella users hit profitability in 6 months",
    "Every trade you don't journal is a lesson lost"
  ];


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
                  { 
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', 
                    name: 'John Doe', 
                    color: '' 
                  },
                  { 
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', 
                    name: 'Jane Doe', 
                    color: '' 
                  },
                  { 
                    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', 
                    name: 'John Smith', 
                    color: '' 
                  },
                  { 
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', 
                    name: 'Mike Johnson', 
                    color: '' 
                  },
                  { 
                    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face', 
                    name: 'David Wilson', 
                    color: '' 
                  },
                  { 
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', 
                    name: 'Alex Brown', 
                    color: '' 
                  }
                ].map((person, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded-full border-2 border-white ${person.color} relative group cursor-pointer overflow-hidden hover:z-10`}
                    title={person.name}
                  >
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a colored background if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.style.backgroundColor = '#e5e7eb';
                        target.parentElement!.innerHTML = `<span class="text-xs font-semibold text-gray-600">${person.name.charAt(0)}</span>`;
                      }}
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-20 pointer-events-none">
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