"use client";
import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const TimePickerComponent = () => {
  const [selectedTime, setSelectedTime] = useState('10:00');

  return (
    <div>
      <label className="block font-semibold mb-2">Time</label>
      <TimePicker
        onChange={setSelectedTime}
        value={selectedTime}
        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        clockIcon={null}
        clearIcon={null}
      />
    </div>
  );
};

export default TimePickerComponent;
