"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SocialProofFooter from "./SocialProofFooter";
import { useUrlParams } from "@/hooks/useUrlParams";
import TradingLevelIcon from "./TradingLevelIcons";

interface OnboardingData {
  tradingLevel: string;
  broker: string;
  securities: string[];
  goals: string[];
}

interface OnboardingFlowProps {
  onComplete?: (data: OnboardingData) => void;
}

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const { hasParam } = useUrlParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    tradingLevel: "",
    broker: "",
    securities: [],
    goals: [],
  });



  const progress = (currentStep / 4) * 100;

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding and trigger paywall
      onComplete?.(data);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleLogout = () => {
    window.location.reload();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <TradingLevelStep data={data} setData={setData} />;
      case 2:
        return <BrokerStep data={data} setData={setData} />;
      case 3:
        return <SecuritiesStep data={data} setData={setData} />;
      case 4:
        return <GoalsStep data={data} setData={setData} />;
      default:
        return null;
    }
  };

  const canContinue = () => {
    switch (currentStep) {
      case 1:
        return data.tradingLevel !== "";
      case 2:
        return data.broker !== "";
      case 3:
        return data.securities.length > 0;
      case 4:
        return data.goals.length > 0;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
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
            <div className="hidden sm:block flex items-center">
              <p className="text-sm text-gray-500 font-light italic pt-1.5">We help traders become profitable</p>
            </div>
            {currentStep > 1 && (
              <Button variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <div className="flex-1 max-w-md">
            </div>
          </div>
          <Button variant="ghost" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>

      {/* Progress Bar Border Separator */}
      <div className="border-b border-gray-200">
        <div 
          className="h-1 bg-gradient-to-r from-[#4332EB] to-[#4332EB] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto px-6 pt-16 pb-8">
        {renderStep()}
        
        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!canContinue()}
            className="bg-[#4332EB] hover:bg-[#3a2bd4] px-8 py-3 text-lg flex items-center space-x-2"
          >
            {currentStep === 4 ? "Let's go" : "Continue"}
            {currentStep !== 4 && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Experimental Social Proof Footer */}
      {hasParam('exp_add_social_proof_signup', 'true') && (
        <SocialProofFooter />
      )}

      {/* Chat Support */}
      <div className="fixed bottom-6 right-6">
        <Button size="icon" className="rounded-full bg-[#4332EB] hover:bg-[#3a2bd4]">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}

// Step 1: Trading Level - Modern icons
function TradingLevelStep({ data, setData }: { data: OnboardingData; setData: (data: OnboardingData) => void }) {
  const levels = [
    { id: "newbie", title: "Newbie", description: "< 1 year" },
    { id: "climbing", title: "Climbing Ranks", description: "1-3 years" },
    { id: "ninja", title: "Ninja Level", description: "3-5 years" },
    { id: "monk", title: "Monk Mode", description: "5+ years" },
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        How long have you been trading?
      </h1>
      <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
        {levels.map((level) => (
          <Card
            key={level.id}
            className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
              data.tradingLevel === level.id
                ? "border-2 border-[#4332EB] bg-gradient-to-br from-[#4332EB]/10 to-[#6853B5]/5 shadow-lg"
                : "border-2 border-gray-200 hover:border-[#4332EB]/50 bg-gradient-to-br from-gray-50 to-slate-50"
            }`}
            style={{ cursor: 'pointer' }}
            onClick={() => setData({ ...data, tradingLevel: level.id })}
          >
            <CardContent className="p-4 text-center">
              <div className="flex justify-center mb-2">
                <TradingLevelIcon level={level.id as 'newbie' | 'climbing' | 'ninja' | 'monk'} className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{level.title}</h3>
              <p className="text-xs text-gray-600">{level.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Step 2: Primary Broker
function BrokerStep({ data, setData }: { data: OnboardingData; setData: (data: OnboardingData) => void }) {
  const brokers = [
    "Interactive Brokers",
    "TD Ameritrade",
    "E*TRADE",
    "Charles Schwab",
    "Fidelity",
    "Robinhood",
    "Webull",
    "TastyTrade",
    "Other",
  ];

  return (
    <div className="text-center">
      {/* Data Visualization Image */}
      <div className="mb-8 flex justify-center">
        <Image
          src="/your_broker.png"
          alt="Data Visualization"
          width={320}
          height={160}
          className="rounded-lg max-h-[160px] w-auto"
          style={{ height: 'auto' }}
        />
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Who is your primary broker?
      </h1>
      <p className="text-gray-600 mb-8">Select only one</p>
      
      <div className="max-w-md mx-auto">
        <Select value={data.broker} onValueChange={(value) => setData({ ...data, broker: value })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select broker" />
          </SelectTrigger>
          <SelectContent>
            {brokers.map((broker) => (
              <SelectItem key={broker} value={broker}>
                {broker}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

// Step 3: Securities - Modern icons
function SecuritiesStep({ data, setData }: { data: OnboardingData; setData: (data: OnboardingData) => void }) {
  const securities = [
    { name: "Stocks" },
    { name: "Options" },
    { name: "Forex" },
    { name: "Crypto" },
    { name: "Futures" },
    { name: "Other" },
  ];

  const toggleSecurity = (security: string) => {
    const newSecurities = data.securities.includes(security)
      ? data.securities.filter((s) => s !== security)
      : [...data.securities, security];
    setData({ ...data, securities: newSecurities });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        What securities are you currently trading?
      </h1>
      <p className="text-gray-600 mb-8">Select all that apply</p>
      
      <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
        {securities.map((security) => (
          <Button
            key={security.name}
            variant={data.securities.includes(security.name) ? "default" : "outline"}
            className={`h-12 text-sm border-2 text-center transition-all hover:scale-105 ${
              data.securities.includes(security.name)
                ? "bg-gradient-to-r from-[#4332EB] to-[#6853B5] border-[#4332EB] shadow-lg"
                : "border-gray-300 bg-gradient-to-r from-gray-50 to-slate-50 hover:border-[#4332EB]/50"
            }`}
            onClick={() => toggleSecurity(security.name)}
          >
            {security.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

// Step 4: Goals
function GoalsStep({ data, setData }: { data: OnboardingData; setData: (data: OnboardingData) => void }) {
  const goals = [
    {
      id: "journal",
      title: "Journal, track, and analyze my trading stats",
    },
    {
      id: "new",
      title: "New to trading, just checking out",
    },
    {
      id: "replay",
      title: "Going back in time with the trade replay",
    },
    {
      id: "funded",
      title: "Tracking my funded accounts",
    },
    {
      id: "backtest",
      title: "Backtesting trading strategies",
    },
  ];

  const toggleGoal = (goalId: string) => {
    const newGoals = data.goals.includes(goalId)
      ? data.goals.filter((g) => g !== goalId)
      : [...data.goals, goalId];
    setData({ ...data, goals: newGoals });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        What are you looking to do with Tradezella?
      </h1>
      <p className="text-gray-600 mb-8">Select all that apply</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
        {goals.map((goal) => (
          <Card
            key={goal.id}
            className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 !p-0 ${
              data.goals.includes(goal.id)
                ? "border-2 border-[#4332EB] bg-gradient-to-br from-[#4332EB]/10 to-[#6853B5]/5 shadow-lg"
                : "border-2 border-gray-200 hover:border-[#4332EB]/50 bg-gradient-to-br from-gray-50 to-slate-50"
            }`}
            style={{ cursor: 'pointer' }}
            onClick={() => toggleGoal(goal.id)}
          >
            <CardContent className="text-center py-3 px-4">
              <span className="font-medium text-sm">{goal.title}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

 