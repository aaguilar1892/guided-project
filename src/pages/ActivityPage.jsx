// ActivityPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import WeatherComponent from '../utils/WeatherComponent';

function ActivityPage() {
  return (
    <div>
        <Navbar />
      <div className="relative my-12 flex flex-col items-center">
        {/* TITLE */}
        <h1 className="text-4xl poppins-bold text-darkgreen">Weather</h1>
        <hr className="mb-6 mt-4 w-1/3 border-pastelgreen" />

        {/* Center Card for Vote and Weather */}
        <div className="relative z-10 p-6 w-full max-w-2xl flex flex-col gap-6">
          {/* COMPONENTS HERE */}
            <WeatherComponent />
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;