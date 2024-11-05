import React from 'react';
import { Signal, Loader2 } from 'lucide-react';

interface ScanButtonProps {
  isScanning: boolean;
  onClick: () => void;
}

export function ScanButton({ isScanning, onClick }: ScanButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isScanning}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg mb-8 flex items-center justify-center transition-colors duration-200 disabled:bg-blue-300"
    >
      {isScanning ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Scanning...
        </>
      ) : (
        <>
          <Signal className="w-5 h-5 mr-2" />
          Start Scan
        </>
      )}
    </button>
  );
}