import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import { Sparkles, GraduationCap, Compass, Layers } from "lucide-react";

const LatestJobs = ({ loading }) => {
  const allJobs = useSelector((state) => state.jobs?.allJobs || []); // Safely access allJobs

  return (
    <section className="relative max-w-7xl mx-auto my-24 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Opportunities</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              Latest & Top{" "}
            </span>
            Scholarship Openings
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Explore verified grants, government funds, and university
            fellowships open for immediate application.
          </p>
        </div>

        {/* Live Counter Badge */}
        {!loading && allJobs.length > 0 && (
          <div className="flex items-center gap-2 self-start md:self-auto px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-700 dark:text-zinc-300 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            <span>{allJobs.length} Available Programs</span>
          </div>
        )}
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {loading ? (
          /* Premium Shimmer Skeleton Cards */
          [1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 shadow-sm animate-pulse flex flex-col justify-between h-72"
            >
              <div>
                {/* Header Skeleton */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-200 dark:bg-zinc-800" />
                  <div className="space-y-1.5 flex-1">
                    <div className="h-4 w-1/2 rounded-md bg-slate-200 dark:bg-zinc-800" />
                    <div className="h-3 w-1/3 rounded-md bg-slate-200 dark:bg-zinc-800" />
                  </div>
                </div>

                {/* Title & Desc Skeleton */}
                <div className="h-5 w-3/4 rounded-md bg-slate-200 dark:bg-zinc-800 mb-3" />
                <div className="space-y-2">
                  <div className="h-3 w-full rounded-md bg-slate-200 dark:bg-zinc-800" />
                  <div className="h-3 w-4/5 rounded-md bg-slate-200 dark:bg-zinc-800" />
                </div>
              </div>

              {/* Badges & Footer Skeleton */}
              <div>
                <div className="flex gap-2 pt-4 border-t border-slate-100 dark:border-zinc-800">
                  <div className="h-6 w-20 rounded-lg bg-slate-200 dark:bg-zinc-800" />
                  <div className="h-6 w-16 rounded-lg bg-slate-200 dark:bg-zinc-800" />
                  <div className="h-6 w-16 rounded-lg bg-slate-200 dark:bg-zinc-800" />
                </div>
              </div>
            </div>
          ))
        ) : allJobs.length === 0 ? (
          /* Modern Empty State */
          <div className="col-span-full py-16 px-6 text-center rounded-3xl bg-slate-50/60 dark:bg-zinc-900/40 border border-dashed border-slate-300 dark:border-zinc-800 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 shadow-inner">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-zinc-200 mb-1">
              No Scholarships Found
            </h3>
            <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-sm">
              We couldn't find any active scholarships at the moment. Please
              check back soon or explore other categories.
            </p>
          </div>
        ) : (
          allJobs.slice(0, 6).map((job) =>
            job?._id ? (
              <JobCards key={job._id} job={job} />
            ) : (
              <div
                key={Math.random()}
                className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-600 text-xs flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Invalid Scholarship Data</span>
              </div>
            )
          )
        )}
      </div>
    </section>
  );
};

export default LatestJobs;
