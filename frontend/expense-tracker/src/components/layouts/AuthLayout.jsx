import React from "react";
import expcard1 from "../../assets/images/exp-card1.jpg";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* ---------- LEFT SECTION (Form Section) ---------- */}
      <div className="w-full md:w-[60vw] h-auto min-h-screen px-6 sm:px-10 lg:px-12 pt-8 pb-12 flex flex-col">
        <h2 className="text-lg sm:text-xl font-medium text-black mb-6 text-center md:text-left">
          Expense Tracker
        </h2>

        {/* Center the form content */}
        <div className="flex-1 flex items-center justify-center">
            
                <div className="w-full max-w-lg px-5 py-7 rounded-xl shadow-2xl shadow-purple-600/20">{children}</div>
        </div>
      </div>

      {/* ---------- RIGHT SECTION (Info + Image) ---------- */}
      <div className="hidden md:flex md:w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center relative overflow-hidden p-8">
        {/* Decorative shapes */}
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5" />
        <div className="w-40 h-52 md:w-48 md:h-56 rounded-[40px] border-[15px] md:border-[20px] border-fuchsia-600 absolute top-[30%] -right-10" />
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5" />

        {/* Centered content container */}
        <div className="relative z-20 flex flex-col items-start lg:justify-between md:justify-center w-full">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income and Expenses"
            value="430,000"
            color="bg-purple-600"
          />

          {/* Centered image */}
          <img
            src={expcard1}
            alt="Expense preview"
            className="w-full lg:w-[100%] lg:h-[45%] md:h-50 mt-10 center rounded-xl shadow-lg shadow-purple-300/30 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

// ---------- STATS CARD COMPONENT ----------
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center md:h-25 lg:w-full gap-4 bg-white p-4 md:p-5 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200 z-10">
      <div
        className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[22px] md:text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs md:text-sm text-gray-500 mb-1">{label}</h6>
        <span className="text-base md:text-lg lg:text-xl font-medium">
          ${value}
        </span>
      </div>
    </div>
  );
};
