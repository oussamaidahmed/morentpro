"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <label className="block font-semibold mb-2">Date</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy/MM/dd"
        placeholderText="Choose a date"
        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default DatePickerComponent;
