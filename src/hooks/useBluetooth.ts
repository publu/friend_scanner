import { useState } from 'react';
import { BluetoothDevice } from '../types/bluetooth';

const DEVICE_NAME = 'Friend';
const SERVICE_UUID = '19b10000-e8f2-537e-4f6c-d104768a1214';

export function useBluetooth() {
  const [devices, setDevices] = useState<BluetoothDevice[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  const startScanning = async () => {
    try {
      setIsScanning(true);
      setDevices([]);

      const foundDevices: BluetoothDevice[] = [];
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ name: DEVICE_NAME }],
        optionalServices: [SERVICE_UUID]
      });

      if (device.id) {
        foundDevices.push({
          name: device.name || 'Unknown Device',
          id: device.id,
          rssi: (device as any).rssi || -70
        });
      }

      setDevices(foundDevices);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsScanning(false);
    }
  };

  const getStrongestDevice = () => {
    if (devices.length === 0) return null;
    return devices.reduce((prev, current) => 
      (prev.rssi > current.rssi) ? prev : current
    );
  };

  return {
    devices,
    isScanning,
    startScanning,
    getStrongestDevice
  };
}