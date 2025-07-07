import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onLoadComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onLoadComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className={`fixed inset-0 bg-gray-900 z-50 flex items-center justify-center transition-opacity duration-500 ${
      loading ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="text-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-4 border-blue-400 border-t-transparent animate-spin mb-8"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white animate-pulse">DL</span>
          </div>
        </div>
        <p className="text-white text-lg">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default Preloader;