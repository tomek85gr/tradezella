"use client";

import { useState } from "react";
import PaywallOverlay from "@/components/PaywallOverlay";

export default function PaywallTestPage() {
  const [showPaywall, setShowPaywall] = useState(false);

  const handleSubscribe = (planName: string) => {
    console.log(`Subscribing to ${planName}`);
    setShowPaywall(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          PaywallOverlay Test Page
        </h1>
        <p className="text-gray-600 mb-8">
          Click the button below to test the new two-column PaywallOverlay design
        </p>
        <button
          onClick={() => setShowPaywall(true)}
          className="bg-[#4332EB] hover:bg-[#3a2bd4] text-white px-6 py-3 rounded-lg font-medium"
        >
          Open PaywallOverlay
        </button>
      </div>

      {showPaywall && (
        <PaywallOverlay
          onClose={() => setShowPaywall(false)}
          onSubscribe={handleSubscribe}
        />
      )}
    </div>
  );
} 