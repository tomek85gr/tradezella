"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface PaywallOverlayProps {
  onClose: () => void;
  onSubscribe?: (planName: string) => void;
}

export default function PaywallOverlay({ onClose, onSubscribe }: PaywallOverlayProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState('Basic');
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
  }, [slogans.length]);

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 24,
      yearlyPrice: 288,
      yearlySavings: 60,
      description: "Perfect for new traders",
      features: [
        "1 account", "1Gb storage", "3 playbooks", "5 mentees", "Backtesting"
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
        "20 accounts", "6Gb storage", "Unlimited playbooks", "Unlimited mentees", "Backtesting", "Seconds speed", "Trade Replay"
      ],
      recommended: false,
      cta: "Subscribe now"
    }
  ];

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleSubscribe = () => {
    onSubscribe?.(selectedPlan);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-6xl mx-4 h-[600px] flex">
        {/* Left Column - Animated Slogans */}
        <div className="w-1/2 bg-gradient-to-br from-[#4332EB] to-[#6853B5] flex items-center justify-center p-8">
          <div className="text-center text-white w-full max-w-sm">
            <div className="flex items-center justify-center min-h-[200px]">
              {slogans.map((slogan, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-1000 ${
                    currentSlogan === index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                >
                  <blockquote className="text-xl font-bold italic leading-relaxed relative pt-8">
                    {/* Quote Icon */}
                    <div className="absolute top-0 left-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                    
                    <div className="relative z-10">
                      {slogan.includes('</br>') ? (
                        <>
                          <div>{slogan.split('</br>')[0]}</div>
                          <div>{slogan.split('</br>')[1]}</div>
                        </>
                      ) : (
                        <div>{slogan}</div>
                      )}
                    </div>
                    
                    {/* Decorative line */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"></div>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Plans */}
        <div className="w-1/2 p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Choose your plan
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-start space-x-2 mb-6">
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

          {/* Plans Stack */}
          <div className="flex-1 space-y-4">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative cursor-pointer transition-all hover:shadow-lg ${
                  selectedPlan === plan.name
                    ? "border-2 border-[#4332EB] bg-[#4332EB]/5"
                    : "border-2 border-gray-200 hover:border-[#4332EB]/50"
                } ${plan.recommended ? 'ring-2 ring-[#4332EB]/20' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => handlePlanSelect(plan.name)}
              >
                {plan.recommended && (
                  <div className="absolute -top-2 left-4">
                    <Badge className="bg-[#4332EB] text-white text-xs">
                      Recommended
                    </Badge>
                  </div>
                )}
                <CardContent className="p-3">
                  <div className="flex gap-4">
                    {/* Left Column - Plan Info & Features */}
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                        <p className="text-sm text-gray-600">{plan.description}</p>
                      </div>
                      
                      {/* Horizontal Features */}
                      <div className="flex flex-wrap gap-2">
                        {plan.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800"
                          >
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Column - Pricing & Button */}
                    <div className="flex flex-col justify-between items-end min-w-[120px]">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#4332EB]">
                          ${billingCycle === 'monthly' ? plan.monthlyPrice : (plan.yearlyPrice / 12).toFixed(2)}/mo
                        </div>
                        {billingCycle === 'yearly' && (
                          <div className="text-xs text-gray-500">
                            Save ${plan.yearlySavings}
                          </div>
                        )}
                      </div>
                      
                      {/* Button */}
                      <Button
                        className={`w-full ${
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}