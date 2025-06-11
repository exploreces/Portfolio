import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="relative flex flex-col items-center">
        {/* Main animated container */}
        <div className="relative w-32 h-32 mb-8">
          {/* Outer rotating ring with gradient */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin"
               style={{
                 background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                 animation: 'spin 3s linear infinite'
               }}>
            <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900"></div>
          </div>

          {/* Middle pulsing waves */}
          <div className="absolute inset-2 rounded-full border-2 border-blue-400 opacity-60 animate-ping"></div>
          <div className="absolute inset-4 rounded-full border-2 border-purple-400 opacity-40 animate-ping"
               style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-6 rounded-full border-2 border-pink-400 opacity-20 animate-ping"
               style={{ animationDelay: '1s' }}></div>

          {/* Inner rotating dots */}
          <div className="absolute inset-8 animate-spin" style={{ animation: 'spin 2s linear infinite reverse' }}>
            <div className="w-3 h-3 bg-blue-500 rounded-full absolute -top-1.5 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full absolute top-1/2 -right-1 transform -translate-y-1/2"></div>
            <div className="w-2.5 h-2.5 bg-pink-500 rounded-full absolute -bottom-1.5 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full absolute top-1/2 -left-1 transform -translate-y-1/2"></div>
          </div>

          {/* Center pulsing core */}
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 animate-pulse shadow-lg"></div>
        </div>

        {/* Animated text with gradient */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Loading
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-ping"
               style={{ top: '20%', left: '15%', animationDelay: '0s', animationDuration: '2s' }}></div>
          <div className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-ping"
               style={{ top: '70%', right: '20%', animationDelay: '1s', animationDuration: '2.5s' }}></div>
          <div className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-40 animate-ping"
               style={{ bottom: '25%', left: '25%', animationDelay: '0.5s', animationDuration: '3s' }}></div>
          <div className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-30 animate-ping"
               style={{ top: '40%', right: '15%', animationDelay: '1.5s', animationDuration: '2s' }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;