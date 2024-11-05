import React from 'react';
import { Bluetooth } from 'lucide-react';
import { ScanButton } from './components/ScanButton';
import { DeviceCard } from './components/DeviceCard';
import { useBluetooth } from './hooks/useBluetooth';

function App() {
  const { isScanning, startScanning, devices, getStrongestDevice } = useBluetooth();
  const strongestDevice = getStrongestDevice();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-8">
          <Bluetooth className="w-12 h-12 text-blue-500 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Bluetooth Scanner</h1>
        </div>

        <ScanButton 
          isScanning={isScanning} 
          onClick={startScanning} 
        />

        {strongestDevice && (
          <div className="space-y-4">
            <DeviceCard device={strongestDevice} />
          </div>
        )}

        {devices.length === 0 && !isScanning && (
          <p className="text-center text-gray-500">
            Click the button above to start scanning for nearby "Friend" devices
          </p>
        )}
      </div>
    </div>
  );
}

export default App;