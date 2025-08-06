"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUrlParams } from "@/hooks/useUrlParams";
import Image from "next/image";

interface PaywallProps {
  tradingLevel?: string;
  onSubscribe?: (planName: string) => void;
  onDemo?: () => void;
  onLogout?: () => void;
}

export default function Paywall({ tradingLevel, onSubscribe, onDemo, onLogout }: PaywallProps) {
  const { hasParam } = useUrlParams();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  // Determine default plan based on trading level
  const getDefaultPlan = () => {
    if (tradingLevel === 'newbie' || tradingLevel === 'climbing') {
      return 'Basic';
    } else if (tradingLevel === 'ninja' || tradingLevel === 'monk') {
      return 'Pro';
    }
    return 'Basic'; // fallback
  };

  const [selectedPlan, setSelectedPlan] = useState(getDefaultPlan());

  const plans = [
    // {
    //   name: "Demo",
    //   monthlyPrice: 0,
    //   yearlyPrice: 0,
    //   yearlySavings: 0,
    //   description: "Not ready yet? Try it free for 7 days!",
    //   features: [
    //     { text: "Fully functional application for demo purposes", included: true },
    //     { text: "View only", included: true },
    //     { text: "Access valid for 7 days", included: true },
    //   ],
    //   recommended: false,
    //   cta: "Access demo",
    //   isDemo: true
    // },
    {
      name: "Basic",
      monthlyPrice: 24,
      yearlyPrice: 288,
      yearlySavings: 60,
      description: "Perfect for new traders",
      features: [
        { text: "Can add up to 1 account", included: true },
        { text: "Data storage allowed up to 1Gb", included: true },
        { text: "Can add up to 3 playbooks", included: true },
        { text: "Can invite up to 5 mentees", included: true },
        { text: "Backtesting", included: true },
        { text: "Seconds speed in backtesting", included: false },
        { text: "Trade Replay", included: false },
      ],
      recommended: true,
      cta: "Subscribe now"
    },
    {
      name: "Pro",
      monthlyPrice: 34,
      yearlyPrice: 399,
      yearlySavings: 189,
      description: "For serious traders",
      features: [
        { text: "Can add up to 20 accounts", included: true },
        { text: "Data storage allowed up to 6Gb", included: true },
        { text: "Can add unlimited playbooks", included: true },
        { text: "Can add unlimited mentees", included: true },
        { text: "Backtesting", included: true },
        { text: "Seconds speed in backtesting", included: true },
        { text: "Trade Replay", included: true },
      ],
      recommended: false,
      cta: "Subscribe now"
    }
  ];

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleSubscribe = () => {
    if (selectedPlan === "Demo") {
      onDemo?.();
    } else {
      onSubscribe?.(selectedPlan);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* SaaS Background with Color Mix */}
      <div className="absolute inset-0" style={{ backgroundColor: 'color-mix(in oklab, var(--color-white) 10%, transparent)' }}>
        <div className="min-h-screen bg-gray-50">
          {/* Real SaaS Background Image */}
          <Image 
            src="/saas_bg_image.png" 
            alt="SaaS Background" 
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      {/* Paywall Overlay */}
      <div className="relative z-10 min-h-screen bg-white/70 backdrop-blur-md flex flex-col">
        {/* Close Button */}
        <div className="absolute top-6 right-6 z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={onDemo}
            className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 max-w-6xl mx-auto px-6 py-8 pb-4 bg-transparent">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Choose your subscription
            </h1>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Button
                variant={billingCycle === 'monthly' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setBillingCycle('monthly')}
                className={billingCycle === 'monthly' ? 'bg-[#4332EB]' : ''}
              >
                Monthly
              </Button>
              <Button
                variant={billingCycle === 'yearly' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setBillingCycle('yearly')}
                className={billingCycle === 'yearly' ? 'bg-[#4332EB]' : ''}
              >
                Yearly • Save 32%
              </Button>
            </div>
            
            {/* Money Back Guarantee */}
            {hasParam('exp_growth_money_back_guarantee', 'true') && (
              <div className="text-center mb-8">
                <p className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                  ✓ 14 days money back guarantee!
                </p>
              </div>
            )}

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-4">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative cursor-pointer transition-all hover:shadow-lg bg-white/90 backdrop-blur-sm ${
                    selectedPlan === plan.name
                      ? "border-[#4332EB] bg-[#4332EB]/10"
                      : "border-gray-200 hover:border-[#4332EB]/50"
                  } ${plan.recommended ? 'ring-2 ring-[#4332EB]/20' : ''}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#4332EB] text-white text-xs">
                        Recommended
                      </Badge>
                    </div>
                  )}
                  <CardContent className="px-6 py-4">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                      {billingCycle === 'yearly' && (
                        <p className="text-xs text-gray-500 mb-2">
                          You Saved ${plan.yearlySavings} if paid ${plan.yearlyPrice} annually.
                        </p>
                      )}
                      <div className="text-3xl font-bold text-[#4332EB] mb-6">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : (plan.yearlyPrice / 12).toFixed(2)}/mo
                      </div>
                    </div>
                    
                    {/* Button moved above features */}
                    <Button
                      className={`w-full mb-6 ${
                        selectedPlan === plan.name
                          ? 'bg-[#4332EB] hover:bg-[#3a2bd4]'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubscribe();
                      }}
                    >
                      {plan.cta}
                    </Button>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          {feature.included ? (
                            <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-green-600 text-xs">✓</span>
                            </div>
                          ) : (
                            <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-red-600 text-xs">✗</span>
                            </div>
                          )}
                          <span className={`text-sm text-left ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col items-center space-y-4 pb-8">
          <Button
            variant="outline"
            onClick={onDemo}
            className="text-gray-600 hover:text-gray-800 border-gray-300 hover:border-gray-400"
          >
            See it in action first
          </Button>
          <Button
            variant="ghost"
            onClick={onLogout}
            className="text-gray-500 hover:text-gray-700"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
} 