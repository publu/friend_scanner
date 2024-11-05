import React from 'react';
import { BluetoothDevice } from '../types/bluetooth';

interface DeviceCardProps {
  device: BluetoothDevice;
}

export function DeviceCard({ device }: DeviceCardProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-green-800 mb-2">
        Probable Match Found!
      </h2>
      <p className="text-green-700">
        Device: {device.name}
      </p>
      <p className="text-green-700 font-mono">
        MAC: {device.id}
      </p>
      <p className="text-green-700">
        Signal Strength: {device.rssi} dBm
      </p>
    </div>
  );
}