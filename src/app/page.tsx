"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import OnboardingFlow from "@/components/OnboardingFlow";
import Paywall from "@/components/Paywall";
import CelebrationScreen from "@/components/CelebrationScreen";
import TradezellaDash from "@/components/TradezellaDash";
import LoadingOverlay from "@/components/LoadingOverlay";
import SocialProofFooter from "@/components/SocialProofFooter";
import { useUrlParams } from "@/hooks/useUrlParams";

export default function Home() {
  const { hasParam } = useUrlParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [tradingLevel, setTradingLevel] = useState<string>("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setShowCelebration(true);
    } else {
      alert("Please use admin/admin to login");
    }
  };

  const handleSubscribe = (planName: string) => {
    console.log(`Subscribing to ${planName}`);
    // Handle subscription logic here
  };

  const [showLoading, setShowLoading] = useState(false);

  const handleDemo = () => {
    console.log("Starting demo");
    setShowLoading(true);
    setShowPaywall(false);
    
    // Simulate loading demo data for 2.5 seconds
    setTimeout(() => {
      setShowLoading(false);
      setShowDashboard(true);
    }, 2500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowCelebration(false);
    setShowPaywall(false);
    setShowDashboard(false);
    setShowLoading(false);
    setTradingLevel("");
  };

  const handleContinueFromCelebration = () => {
    setShowCelebration(false);
  };

  if (showCelebration) {
    return (
      <CelebrationScreen 
        onContinue={handleContinueFromCelebration}
        onLogout={handleLogout}
      />
    );
  }

  if (showLoading) {
    return <LoadingOverlay />;
  }

  if (showDashboard) {
    return <TradezellaDash />;
  }

  if (showPaywall) {
    return (
      <Paywall 
        tradingLevel={tradingLevel}
        onSubscribe={handleSubscribe}
        onDemo={handleDemo}
        onLogout={handleLogout}
      />
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#161828] to-[#242B66] flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex flex-col items-center justify-center mb-4">
                <Image
                  src="/tradezella_logo.png"
                  alt="Tradezella Logo"
                  width={200}
                  height={78}
                  className="mb-2"
                  style={{ width: '200px', height: 'auto' }}
                />
                <p className="text-lg text-gray-600 font-medium">
                  We help traders become profitable
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#4332EB] hover:bg-[#3a2bd4]">
                  Login
                </Button>
              </form>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Use admin/admin to login
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <OnboardingFlow 
          onComplete={(data) => {
            setTradingLevel(data.tradingLevel);
            setShowPaywall(true);
          }}
        />
      </div>
      
    </div>
  );
}
