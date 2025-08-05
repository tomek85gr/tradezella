"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CelebrationScreenProps {
  onContinue: () => void;
  onLogout: () => void;
}

export default function CelebrationScreen({ onContinue, onLogout }: CelebrationScreenProps) {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    rotation: number;
    velocity: number;
  }>>([]);

  useEffect(() => {
    // Generate confetti particles
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -20,
      color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][Math.floor(Math.random() * 6)],
      rotation: Math.random() * 360,
      velocity: 2 + Math.random() * 3,
    }));
    setConfetti(particles);

    // Animate confetti
    const interval = setInterval(() => {
      setConfetti(prev => 
        prev.map(particle => ({
          ...particle,
          y: particle.y + particle.velocity,
          rotation: particle.rotation + 2,
        })).filter(particle => particle.y < window.innerHeight + 50)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4332EB] to-[#6853B5] relative overflow-hidden">
      {/* Confetti Animation */}
      {confetti.map(particle => (
        <div
          key={particle.id}
          className="absolute animate-bounce"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: `rotate(${particle.rotation}deg)`,
            zIndex: 10,
          }}
        >
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" 
              fill={particle.color}
            />
          </svg>
        </div>
      ))}



      {/* Header */}
      <div className="relative z-20 bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/tradezella_logo.png"
              alt="Tradezella Logo"
              width={120}
              height={47}
              className="w-30 h-12"
              style={{ width: '120px', height: 'auto' }}
            />
          </div>
          <Button 
            variant="ghost" 
            onClick={onLogout}
            className="text-gray-700 hover:bg-gray-100"
          >
            Log out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl">
          <CardContent className="p-8 text-center">
            {/* Logo Icon */}
            <div className="mb-6">
              <div className="mx-auto flex items-center justify-center">
                <Image
                  src="/tradezella-small-logo.svg"
                  alt="Tradezella Logo"
                  width={90}
                  height={90}
                  className="mb-2"
                  style={{ width: '90px', height: '90px' }}
                />
              </div>
            </div>

            {/* Welcome Text */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to Tradezella
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We help traders become profitable
            </p>

            {/* Continue Button */}
            <Button 
              onClick={onContinue}
              className="w-full bg-[#4332EB] hover:bg-[#3a2bd4] text-white text-lg py-3"
            >
              Continue
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Chat Support */}
      <div className="fixed bottom-6 right-6 z-30">
        <Button 
          size="icon" 
          className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
        >
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Button>
      </div>
    </div>
  );
} 