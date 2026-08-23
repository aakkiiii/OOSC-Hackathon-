import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Search,
  Sparkles,
  GraduationCap,
  Award,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Zap,
} from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  const handleQuickTagClick = (tag) => {
    setQuery(tag);
    dispatch(setSearchedQuery(tag));
    navigate("/browse");
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glow Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-emerald-400/15 via-teal-400/20 to-cyan-400/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-amber-400/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50/90 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm mb-6 transition-all hover:scale-105 cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            No.1 Scholarship & Grant Discovery Network in India
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
          Search, Apply & Claim <br />
          Your{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
            Dream Scholarship
            {/* Elegant Underline Wave */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-emerald-400/40 -z-10"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 10 Q 25 20, 50 10 T 100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Unlock fully-funded government programs, institutional grants, and
          private corporate fellowships tailored specifically to your
          background.
        </p>

        {/* Modern Frosted Search Bar */}
        <div className="max-w-2xl mx-auto relative group">
          {/* Ambient Glow on Hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 rounded-full blur-md opacity-25 group-hover:opacity-40 group-focus-within:opacity-60 transition duration-500 -z-10" />

          <div className="flex items-center bg-white/95 dark:bg-slate-900/90 backdrop-blur-2xl rounded-full p-2 border border-slate-200/90 dark:border-slate-700/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all">
            <div className="pl-4 text-emerald-600 dark:text-emerald-400">
              <Search className="w-5 h-5" />
            </div>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchjobHandler();
                }
              }}
              placeholder="Search by college, major, degree, or grant amount..."
              className="w-full py-3.5 px-4 bg-transparent outline-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400 text-sm sm:text-base font-medium"
            />

            <Button
              onClick={searchjobHandler}
              className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold h-12 px-6 sm:px-8 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.02] active:scale-95 transition-all shrink-0 flex items-center gap-2"
            >
              <span>Search</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline-block" />
            </Button>
          </div>
        </div>

        {/* Quick Tag Recommendations */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
            <Zap className="w-3.5 h-3.5 text-amber-500" /> Popular:
          </span>
          {[
            "Merit Based",
            "STEM & AI",
            "Women in Tech",
            "Study Abroad",
            "Postgraduate",
          ].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleQuickTagClick(tag)}
              className="px-3 py-1 rounded-lg bg-slate-100/80 hover:bg-emerald-50 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-700 border border-slate-200/60 dark:border-slate-700/60 transition-all hover:scale-105"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Impact Stats Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 border-t border-slate-200/70 dark:border-slate-800">
          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              ₹50Cr+
            </div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center justify-center gap-1">
              <Award className="w-3.5 h-3.5" /> Total Awarded
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              15,000+
            </div>
            <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-0.5 flex items-center justify-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" /> Active Grants
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              98.4%
            </div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center justify-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Success Rate
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              100%
            </div>
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mt-0.5 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Schemes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
