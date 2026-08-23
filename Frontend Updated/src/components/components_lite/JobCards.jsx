import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Bookmark,
  Users,
  Coins,
} from "lucide-react";

const JobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job?._id}`)}
      className="group relative w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900/90 p-6 border border-slate-200/90 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 hover:border-indigo-400/60 dark:hover:border-indigo-500/50 cursor-pointer flex flex-col justify-between"
    >
      {/* Ambient Gradient Glow on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />

      {/* Top Header: Foundation / Provider & Location */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* Institution Avatar / Icon */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-base font-semibold text-slate-900 dark:text-zinc-100 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {job?.name || "Scholarship "}
              </h1>
              <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-zinc-500 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{job?.location || "India"}</span>
              </div>
            </div>
          </div>

          {/* Quick Bookmark / Save Icon */}
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-zinc-800 transition-all active:scale-90"
          >
            <Bookmark className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Title & Description */}
        <div className="mt-2 mb-4">
          <h2 className="font-bold text-lg text-slate-900 dark:text-zinc-50 tracking-tight line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {job?.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 line-clamp-2 mt-1.5 leading-relaxed">
            {job?.description ||
              "Explore this scholarship opportunity for academic funding and research grants."}
          </p>
        </div>
      </div>

      {/* Badges & Card Footer */}
      <div>
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
          {/* Amount Badge */}
          {job?.salary && (
            <Badge
              variant="ghost"
              className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40 font-bold px-2.5 py-1 text-xs flex items-center gap-1.5 rounded-lg"
            >
              <Coins className="w-3.5 h-3.5" />
              {job?.salary} Amount
            </Badge>
          )}

          {/* Open Positions / Seats */}
          {job?.position && (
            <Badge
              variant="ghost"
              className="bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40 font-semibold px-2.5 py-1 text-xs flex items-center gap-1.5 rounded-lg"
            >
              <Users className="w-3.5 h-3.5" />
              {job?.position} Open Positions
            </Badge>
          )}

          {/* Location Badge */}
          {job?.location && (
            <Badge
              variant="ghost"
              className="bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400 border border-purple-200/60 dark:border-purple-800/40 font-semibold px-2.5 py-1 text-xs flex items-center gap-1.5 rounded-lg"
            >
              <MapPin className="w-3.5 h-3.5" />
              {job?.location}
            </Badge>
          )}

          {/* Type Badge */}
          {job?.jobType && (
            <Badge
              variant="ghost"
              className="bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40 font-semibold px-2.5 py-1 text-xs flex items-center gap-1.5 rounded-lg"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {job?.jobType}
            </Badge>
          )}
        </div>

        {/* View Details Action Prompt */}
        <div className="mt-4 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 pt-2 opacity-90 group-hover:opacity-100">
          <span className="text-slate-500 dark:text-zinc-400 font-normal">
            Click to view details
          </span>
          <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200 font-bold">
            Explore <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
