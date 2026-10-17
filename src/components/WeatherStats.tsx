"use client";

import { useEffect, useState } from "react";

export default function WeatherStats() {
  const [airTemp, setAirTemp] = useState<string>("28°C");
  const [waterTemp, setWaterTemp] = useState<string>("27°C");
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const weatherRes = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=14.0945&longitude=74.4844&current=temperature_2m"
        );
        const weatherData = await weatherRes.json();
        if (weatherData?.current?.temperature_2m !== undefined) {
          setAirTemp(`${Math.round(weatherData.current.temperature_2m)}°C`);
          setIsLive(true);
        }

        const marineRes = await fetch(
          "https://marine-api.open-meteo.com/v1/marine?latitude=14.0945&longitude=74.4844&current=sea_surface_temperature"
        );
        const marineData = await marineRes.json();
        if (marineData?.current?.sea_surface_temperature !== undefined) {
          setWaterTemp(`${Math.round(marineData.current.sea_surface_temperature)}°C`);
        }
      } catch (error) {
        console.error("Failed to fetch live ocean weather:", error);
      }
    }

    fetchWeather();
  }, []);

  return (
    <div className="w-full lg:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 bg-[#ffffff] border border-black p-5 sm:px-7 sm:py-4 rounded-[28px] select-none shadow-[4px_4px_0px_#000000] transition-colors">
      {/* Location / Status Badge */}
      <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-black/20 pb-3 sm:pb-0 sm:pr-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black shrink-0"></span>
          <span className="text-black text-[11px] font-bold uppercase tracking-[0.032em]">
            {isLive ? "Live Sea Conditions" : "Typical Dive Conditions"}
          </span>
        </div>
        <span className="text-black text-sm font-bold tracking-tight">
          Netrani Island Reef
        </span>
        <span className="text-xs text-black/70 font-medium">
          Visibility: <strong className="text-black font-bold">15 – 30 Metres</strong>
        </span>
      </div>

      {/* Metrics Row */}
      <div className="flex items-center gap-6 sm:gap-7">
        {/* Air Temperature */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ffd731] border border-black flex items-center justify-center text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </div>
          <div>
            <span className="block text-xl font-bold tracking-tight text-black leading-none">
              {airTemp}
            </span>
            <span className="text-[10px] text-black/70 uppercase tracking-[0.032em] font-bold">
              Air Temp
            </span>
          </div>
        </div>

        {/* Sea Temperature */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4da2ff] border border-black flex items-center justify-center text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12h20"></path>
              <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"></path>
              <path d="M9 4v4"></path>
              <path d="M15 4v4"></path>
            </svg>
          </div>
          <div>
            <span className="block text-xl font-bold tracking-tight text-black leading-none">
              {waterTemp}
            </span>
            <span className="text-[10px] text-black/70 uppercase tracking-[0.032em] font-bold">
              Water Temp
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
