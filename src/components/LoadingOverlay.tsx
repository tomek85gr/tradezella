"use client";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="mb-6">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-[#4332EB] rounded-full animate-spin mx-auto"></div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Loading demo user data
        </h2>
        <p className="text-gray-600">
          Please wait while we prepare your demo experience...
        </p>
      </div>
    </div>
  );
} 